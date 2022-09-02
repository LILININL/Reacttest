import * as React from "react";
import { View, Alert, Image, userState, useEffect } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Button,
  Icon,
  TopNavigation,
  BottomNavigation,
  TopNavigationAction,
  BottomNavigationAction,
  TabBar,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StackActions } from '@react-navigation/native';
// twitter icons
const TwitterIcon = (props) => <Icon {...props} name="twitter" />;
// facebook icons
const FacebookIcon = (props) => <Icon name="facebook" {...props} />;
// Alert clickme
const Clickme = () => {
  Alert.alert("You clicked me!");
};
// const pushAction = StackActions.push('Home', { user: 'Wojtek' });

export function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../../assets/image/as.jpg")}
        resizeMode="contain"
        style={{ width: 120, height: 150 }}
      />
      <Text category="h1" style={{ fontSize: 24, color: "black",marginBottom: 10, }}>
        Login for HauTuo App
      </Text>
      <Button
        onPress={() => navigation.popToTop()}
        titel="Twitter"
        style={{ marginBottom: 10, width: 300, backgroundColor: "#1DA1F2" }}
        accessoryLeft={TwitterIcon}
      >
        Login with Twitter
      </Button>
      <Button
        onPress={Clickme}
        titel="Facebook"
        style={{ marginTop: 10, width: 300, backgroundColor: "#4267B2" }}
        accessoryLeft={FacebookIcon}
      >
        Login with Facebook
      </Button>
     
    </View>
  );
}
