import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../componenets/Input";
import { colors, sizes } from "../shared/constant";

export default function RegisterScreen({setIsLogin}) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setuserName] = useState("");
  const navigation = useNavigation()
  const onHandlerSubmit = () => {
    console.log({email,userName , password})
    setIsLogin(true)
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcom}>Join us</Text>
        <Input
          value={userName}
          onHandler={setuserName}
          placeHolder={"Enter your userName"}
          label={"userName"}
        />
        <Input
          value={email}
          onHandler={setEmail}
          placeHolder={"Enter your email"}
          label={"email"}
        />
        <Input
          value={password}
          onHandler={setpassword}
          placeHolder={"Enter your password"}
          secure
          label={"password"}
        />
        <Text onPress={()=> navigation.goBack()}  style={styles.haveCompteText}>you have an account !</Text>
      </View>
      <Pressable onPress={()=>onHandlerSubmit()} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: sizes.height / 5,
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizes.mh,
  },
  welcom: {
    fontSize: 40,
    textAlign: "left",
    fontWeight: "bold",
    color: colors.primary,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  haveCompteText: {
    marginTop: 30,
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 55,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
