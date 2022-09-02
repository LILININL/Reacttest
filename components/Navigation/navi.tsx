import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { SettingsScreen } from "../pages/SettingsScreen";
import { DetailsScreen } from "../pages/DetailsScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { CallApi } from "../pages/callApi";
import { PostApi } from "../pages/postapi";

export function Navigation() {
  const { Navigator, Screen } = createBottomTabNavigator();
  const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Home" />
      <BottomNavigationTab title="Settings" />
      <BottomNavigationTab title="Details" />
      <BottomNavigationTab title="Apicall" />
      <BottomNavigationTab title="PostApi" />
      <BottomNavigationTab title="Login" />
    </BottomNavigation>
  );
  //   const Stack = createNativeStackNavigator();
  //   const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Settings" component={SettingsScreen} />
        <Screen name="Details" component={DetailsScreen} />
        <Screen name="Apicall" component={CallApi} />
        <Screen name="PostApi" component={PostApi} />
        <Screen name="Login" component={LoginScreen} />
      </Navigator> 
    </NavigationContainer>
  );
}
export default function Navigation();


// icon tap 
// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused
//         ? 'ios-information-circle'
//         : 'ios-information-circle-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'ios-list-box' : 'ios-list';
//     }

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'gray',
// })}