import  React ,{useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import {
  Input,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from "@ui-kitten/components";

export function HomeScreen({ navigation }) {
  const useInputState = (initialValue = "") => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };
  const primaryInputState = useInputState();
  const successInputState = useInputState();
  const infoInputState = useInputState();
  const warningInputState = useInputState();
  const dangerInputState = useInputState();
  const basicInputState = useInputState();
  const controlInputState = useInputState();
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
   const [usertext, setText] = useState('');
  console.log(usertext);
  console.log(number);
  return (
    <>
      <React.Fragment>
        <Select
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
        <Input
          style={styles.input}
          status="primary"
          placeholder="Primary"
          {...primaryInputState}
          onChangeText={onChangeText}
          value={text}
        />

        <Input
          style={styles.input}
          status="success"
          placeholder="Success"
          {...successInputState}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Input
          style={styles.input}
          status="info"
          placeholder="Info"
          {...infoInputState}
          onChangeText={newText => setText(newText)}
         value={usertext}
        />

        <Input
          style={styles.input}
          status="warning"
          placeholder="Warning"
          {...warningInputState}
        />

        <Input
          style={styles.input}
          status="danger"
          placeholder="Danger"
          {...dangerInputState}
        />

        <Input
          style={styles.input}
          status="basic"
          placeholder="Basic"
          {...basicInputState}
        />
      </React.Fragment>
      <Button
        styles={{ marginTop: 20 }}
        title="Go to Details"
        onPress={() => {
          {
            text;
          }
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controlContainer: {
    borderRadius: 4,
    margin: 1,
    padding: 1,
    backgroundColor: "#3366FF",
  },
});
