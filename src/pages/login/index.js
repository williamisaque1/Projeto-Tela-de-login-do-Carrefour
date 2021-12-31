import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  Vibration,
} from "react-native";
import icone from "../../assets/Carrefour_logo.svg";
import { ButtonClick } from "../../component/button";
import { Link } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import Axios from "axios";
import api from "../../services/api";
import { Animated } from "react-native";
const { width, height } = Dimensions.get("window");
export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [acesso, setAcesso] = useState(null);
  const AnimatedValue = useRef(new Animated.Value(0));
  const animacao = () => {
    Animated.sequence([
      Animated.timing(AnimatedValue.current, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(AnimatedValue.current, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const enviarDados = async () => {
    try {
      const { data } = await api.post("/ValidaUsuario", {
        email: email,
        senha: senha,
      });
      if (data.id == "101") {
        setAcesso({ acesso: false, mensagem: data.mensagem });
        animacao();
        Vibration.vibrate(500);
        const clear = setTimeout(() => {
          setAcesso(null);
          clearTimeout(clear);
        }, 1700);
      } else {
        setAcesso({ acesso: true, mensagem: data.mensagem });
        animacao();

        const clear = setTimeout(() => {
          setAcesso(null);
          clearTimeout(clear);
        }, 1700);
      }
    } catch (e) {
      console.log("erro " + e);
    }
  };
  return (
    <View style={styles.container}>
      {acesso?.acesso == true ? (
        <View style={([styles.acesso], { backgroundColor: "green" })}>
          <Text style={styles.textoAcesso}></Text>
        </View>
      ) : acesso?.acesso == false ? (
        <Animated.View
          style={[
            styles.acesso,
            { backgroundColor: "red", opacity: AnimatedValue.current },
          ]}
        >
          <Text style={styles.textoAcesso}>
            Acesso negado {acesso?.mensagem}.
          </Text>
        </Animated.View>
      ) : (
        <></>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -64}
      >
        <Image source={icone} style={styles.icone}></Image>

        <Text style={styles.saudacao}>BEM VINDO</Text>

        <TextInput
          style={styles.inputs}
          keyboardType={"email-address"}
          autoCorrect={false}
          value={email}
          onChange={(dados) => {
            setEmail(dados.nativeEvent.text);
          }}
          placeholder="Email"
          placeholderTextColor="#C5C6C6"
        />
        <TextInput
          style={[styles.inputs, { borderTopWidth: 0 }]}
          secureTextEntry
          autoCorrect={false}
          value={senha}
          onChange={(dados) => {
            setSenha(dados.nativeEvent.text);
          }}
          placeholder="Senha"
          placeholderTextColor="#C5C6C6"
        />
        <TouchableOpacity>
          <Link style={styles.textoRecuperarSenha} to="#">
            Recuperar senha
          </Link>
        </TouchableOpacity>

        <ButtonClick
          configuracoes={{
            width: width,
            cor: "#129793",
            conteudo: "Acessar",
            funcao: enviarDados,
          }}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity>
        <Text style={styles.buttonNaoTemConta}>Não tem conta ?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link style={styles.buttonCriarConta} to="#">
          Crie uma nova agora
        </Link>
      </TouchableOpacity>
    </View>
  );
}
