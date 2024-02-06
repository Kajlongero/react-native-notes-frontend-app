import { StyleSheet, Text, TextInput, View } from "react-native";

export const StandardInput = ({ placeholder, store }) => {
  const handleTextChange = (text) => {
    store(text);
  }

  return (
    <View>
      <TextInput 
        onChangeText={handleTextChange}
        placeholder={placeholder}
      />
      <Text></Text>
    </View>
  )
}

