import React, {useState} from 'react';
import { Text, View, TextInput} from 'react-native';

const ModalFrom = () => {
  const [value, setValue] = useState(0);
  return (
    <View  >
      <Text> Model Form </Text>
      <View>
        <TextInput placeholder="Enter Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
    </View>
  );
};

export default ModalFrom;