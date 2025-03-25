import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"
import React from "react";

const Profile = () => {

    const router = useRouter();

    const handleSubmit = () => {router.push("/(auth)/login")}

    return (
    <View>
        <Text>Profile</Text>
        <TouchableOpacity onPress={handleSubmit}>
            <View>
                <Text>Log out</Text>
            </View>
        </TouchableOpacity>
    </View>
    );
};

export default Profile;

const styles = StyleSheet.create({});