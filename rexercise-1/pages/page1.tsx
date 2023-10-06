import { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import Card from "../components/Card";

export function Page1(): JSX.Element {
  const [resultField, setResultField] = useState("");
  const [loading, setLoading] = useState(false);
  const [listProduct, setListProduct] = useState<any>();

  useEffect(() => {
    getList(resultField);
  }, []);
  useEffect(() => {
    getList(resultField);
  }, [resultField]);

  const getList = async (searchString) => {
    setLoading(true);
    try {
      const resultApi = await fetch(
        "https://dummyjson.com/products/search?q=" + searchString
      );
      const json = await resultApi.json();
      setListProduct(json.products);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(event) => {
          setResultField(event);
        }}
        value={resultField}
      />

      {loading ? (
        <Text>STO CARICANDO...</Text>
      ) : (
        <FlatList
          style={{ padding: 16 }}
          data={listProduct}
          renderItem={({ item }) => {
            return (
              <Card>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{ height: 50, width: 50 }}
                />
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </Card>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap: 16,
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
