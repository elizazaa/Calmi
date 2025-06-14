import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UserProvider } from "../context/UserContext"

const TabHome = () => {
    return (
    <UserProvider>
    <View>
        <Text>TabHome</Text>
    </View>
     </UserProvider>
    );
};

export default TabHome;

const styles = StyleSheet.create({});