import React, { useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  useEffect(() => {
    handleLogin();
  }, []);

  async function handleLogin() {
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isEnrolled) {
      return;
    }
    const { success, error } = await LocalAuthentication.authenticateAsync();

    if (success) {
      Alert.alert("Autenticado", "Logado com sucesso!!");
    } else {
      Alert.alert(
        "Erro ao atenticar",
        "Use a impressão digital para se autenticar"
      );
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7159c1", "#9b49c1", "#B62A8F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.containerGradient}
      >
        <Text style={styles.title}>Experiemente o TouchID</Text>
        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#FFF"
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#FFF"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    margin: 10,
    paddingHorizontal: 60,
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#FFF",
    color: "#FFF",
    borderRadius: 8,
    fontSize: 18,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 100,
    height: 40,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 6,
  },
  btnText: {
    fontSize: 18,
    color: "#000",
  },
});
