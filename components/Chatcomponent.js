import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { useNavigation } from "@react-navigation/native";

// Chat component to display each chat in the list of chats 
export default function Chatcomponent({ item }) {

  // Get the global context navigation object to navigate to the message screen
  const navigation = useNavigation();

  // Get the global context to access the current user messages and current group name
  console.log(item.messages[item.messages.length - 1]);

  // Function to handle navigation to the message screen when the chat is pressed
  function handleNavigateToMessageScreen() {
    navigation.navigate("Messagescreen", {
      currentGroupName: item.currentGroupName,
      currentGroupID: item.id,
    });
  }

  // Render the chat component
  return (
    <Pressable style={styles.chat} onPress={handleNavigateToMessageScreen}>
      <View style={styles.circle}>
        <FontAwesome name="group" size={24} color={"black"} />
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.userName}>{item.currentGroupName}</Text>
          <Text style={styles.message}>
            {item && item.messages && item.messages.length ? item.messages[item.messages.length - 1].text : "Tap to start messaging"}
          </Text>
        </View>
        <View>
          <Text style={styles.time}>
            {item && item.messages && item.messages.length ? item.messages[item.messages.length - 1].time : "Now"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

// Styles for the chat component
const styles = StyleSheet.create({
  chat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    height: 80,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    opacity: 0.8,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  time: {
    opacity: 0.6,
  },
  circle: {
    width: 50,
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginRight: 10,
  },
});
