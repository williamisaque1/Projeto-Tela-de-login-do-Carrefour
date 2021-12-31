import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F7",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  saudacao: {
    alignSelf: "center",
    marginTop: height * 0.1,
    fontSize: 25,
    color: "#B3B3B4",
    marginBottom: height * 0.05,
    fontWeight: "normal",
  },

  icone: {
    alignSelf: "center",
    maxWidth: 100,
    maxHeight: 80,
    marginTop: height * 0.15,
  },
  inputs: {
    width: width * 0.75,
    height: width * 0.15,
    borderTopWidth: 2,
    borderWidth: 2,

    borderColor: "#E3E4E5",

    paddingLeft: 20,
  },
  textoRecuperarSenha: {
    alignSelf: "flex-end",
    fontSize: 14,
    marginTop: height * 0.01,
    marginRight: width * 0.03,
    fontWeight: "700",
    color: "#B3B3B4",
  },
  buttonNaoTemConta: {
    marginTop: height * 0.15,

    color: "#B3B3B4",
  },
  buttonCriarConta: {
    color: "#FAB9B2",
  },
});
