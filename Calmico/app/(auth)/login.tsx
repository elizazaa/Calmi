import {
  Alert,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router"
import { Formik } from "formik"
import * as Yup from "yup";
import { auth } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

//Schema
const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email().label("Email"),
    password: Yup.string().required('Password is required').min(4).label("Password"),
})

const Login = () => {
    //Router
    const router = useRouter();

    const handleLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/(tabs)"); // Navigate to the next screen after successful login
        } catch (error) {
            Alert.alert("Login Error", error.message);
        }
    };

    const handleSubmitBack = () => {
        router.push("/")
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        {/*Formik configuration*/}
        <Formik
        initialValues={{ email: "", password: ""}}
        onSubmit={(values) => handleLogin(values.email, values.password)}
        validationSchema={validationSchema}
        >
    {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,}) =>(
        <View style={styles.form}>
        {/*Email field*/}
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            />
        {/*Error for email*/}
            {errors.email && touched.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
        {/*Password field*/}
            <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            />
        {/*Error for password*/}
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
        {/*Login*/}
        <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </View>
        </TouchableOpacity>
        {/*Back to home*/}
        <TouchableOpacity onPress={handleSubmitBack}>
            <View style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to Home Page</Text>
            </View>
        </TouchableOpacity>
        </View>
        )}
        </Formik>
    </View>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      marginTop: 1,
  },
  backButtonText: {
    color: "grey",
    fontSize: 18,
  },
});