import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import useTheme from "../../../hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Index() {
  const todos = useQuery(api.todos.getTodos)
  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodo = useMutation(api.todos.clearAllTodos)


  const {toggleDarkMode} = useTheme()
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen12355.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({
        text: "walk dog"
      })}>
        <Text>New Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodo()}>
        <Text>clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
