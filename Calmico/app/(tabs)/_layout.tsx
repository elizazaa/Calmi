import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
    return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                title: "Home",
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="calmi"
            options={{
                headerShown: false,
                title: "Calmi",
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="robot" size={24} color={color}/>
                )
            }}
        />
    </Tabs>
    )
}