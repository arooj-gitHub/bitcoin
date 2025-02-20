import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>bitcoin-YAY</Text>
      <Text style={styles.subtitle}>Cryptocurrency mining anywhere</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AuthOptions")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AuthOptions")}>
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Terms of Service • Privacy Policy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center" },
  logo: { fontSize: 28, fontWeight: "bold", color: "#FFA500" },
  subtitle: { color: "#FFF", marginVertical: 10 },
  button: { backgroundColor: "#FFA500", padding: 15, width: "80%", borderRadius: 5, alignItems: "center", marginVertical: 10 },
  buttonText: { color: "#000", fontWeight: "bold" },
  footer: { color: "#AAA", fontSize: 12, position: "absolute", bottom: 20 },
});

export default LoginScreen;
