import React from "react";
import { TouchableOpacity, Text } from "react-native";

export function ButtonClick({ configuracoes }) {
  return (
    <TouchableOpacity
      onPress={() => configuracoes.funcao()}
      style={{
        shadowColor: "#AAD3D2",
        shadowOffset: { width: 10, height: 10 },

        elevation: 10,

        backgroundColor: configuracoes?.cor ?? "green",
        paddingHorizontal: configuracoes?.width
          ? configuracoes.width * 0.32
          : 130,
        paddingVertical: 18,
        borderRadius: 25,
        marginTop: 20,
      }}
    >
      <Text style={{ color: "white" }}>
        {configuracoes?.conteudo ?? "Aperte"}
      </Text>
    </TouchableOpacity>
  );
}
