import React, { PropsWithChildren } from "react";
import { View } from "react-native";

const Card = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 24,
        borderColor: "red",
        borderStyle: "solid",
        marginBottom: 20,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "center",
      }}>
      {children}
    </View>
  );
};

export default Card;
