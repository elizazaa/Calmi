import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(auth)/login"
                options={{ headerShown: false, title: ""}}
            />
            <Stack.Screen
                name="(auth)/register"
                options={{ headerShown: false, title: ""}}
            />
        </Stack>
    );
}
