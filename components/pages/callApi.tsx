import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export function CallApi({ navigation }) {
  const [isLoading, setLoading] = useState(true); // set loading to true
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? 
        <Text>Loading ...</Text> : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text category="h1" style={{ fontSize: 24 ,color: "black" }}>
              Nmae: {item.name}
              {"\n"}
              Email: {item.email}
              {"\n"}
            </Text>
          )}
        /> 
        </View>
      )}
      
    </View>
  );
}
