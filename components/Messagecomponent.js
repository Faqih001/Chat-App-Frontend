import { StyleSheet, Text, View } from "react-native";

// Message component to display each message in the chat 
export default function Messagecomponent({ currentUser, item }) {

  // Get the current user status to determine the message alignment
  const currentUserStatus = item.currentUser !== currentUser;

  // Get the current user status to determine the message alignment
  console.log(currentUserStatus , item);

  // Function to handle navigation to the message screen when the chat is pressed
  return (
    <View style={currentUserStatus ? {} : { alignItems: "flex-end" }}>
      <View style={styles.messageItemWrapper}>
        <View style={styles.messageItemInnerWrapper}>
          <View
            style={
              currentUserStatus
                ? styles.messageItem
                : [styles.messageItem, { backgroundColor: "#703efe" }]
            }
          >
            <Text
              style={
                currentUserStatus ? { color: "#000" } : { color: "#e5c1fe" }
              }
            >
              {item.text}
            </Text>
          </View>
        </View>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );
}

// Styles for the message component
const styles = StyleSheet.create({
  messageItemWrapper: {
    maxWidth: "50%",
    marginBottom: 15,
  },
  messageItemInnerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageItem: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 2,
  },
  messageTime : {
    marginLeft : 10
  }
});
