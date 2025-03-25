import {
  Alert,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router"
import { Formik } from "formik"
import * as Yup from "yup";
import { auth } from '../../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

//Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Register = () => {

    const router = useRouter();

    const handleRegister = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            console.log("User created:", userCredential.user);
            Alert.alert("Success", "Account created successfully!");
            router.push("/(tabs)"); // Navigate to the home screen or login page
        } catch(error) {
            console.error("Registration error:", error);
        }
    }

    const handleSubmitBack = () => {
        router.push("/")
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        {/*Formik configuration*/}
        <Formik
        initialValues={{ email: "", password: "", confirmPassword: ""}}
        onSubmit={handleRegister}
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
        {/*Confirm Password field*/}
            <TextInput
            style={styles.input}
            placeholder="Confirm password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            secureTextEntry
            />
        {/*Error for password*/}
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
        {/*Register*/}
        <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
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

export default Register;

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