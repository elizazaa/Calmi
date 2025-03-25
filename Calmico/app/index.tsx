import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router"
import { UserProvider } from "./context/UserContext"

const Home = () => {
    const router = useRouter()
    return (
    <UserProvider>
    <View style={styles.container}>
    <View style={styles.overlay}>
        <Text style={styles.mainText}>Calmi</Text>
        <Text style={styles.subText}>A fancy tagline</Text>
    </View>
    <View style={styles.buttons}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(auth)/login")}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
             style={styles.button}
             onPress={() => router.push("/(auth)/register")}
        >
             <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
    </View>
    </UserProvider>
    );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(22, 24, 61, 100)",
  },
  mainText: {
    color: "white",
    fontSize: 68,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3, // Adds a shadow effect on Android
  },
  buttonText: {
    color: "rgba(22, 24, 61, 100)",
    fontSize: 18,
    fontWeight: "bold",
  },
});