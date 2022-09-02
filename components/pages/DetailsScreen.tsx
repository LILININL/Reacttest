import React, { useState} from 'react';
import { View, Button,Text ,StyleSheet } from "react-native";
import Modal from 'react-native-modal';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  
  Icon,
  TopNavigation,
  BottomNavigation,
  TopNavigationAction,
  BottomNavigationAction,
  TabBar,
} from "@ui-kitten/components";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ModalFrom from './Model';


export function DetailsScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Click here to  Modal" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}>
        <View>
          <ModalFrom />
          <View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

