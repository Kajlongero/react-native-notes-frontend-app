import { View, TextInput } from 'react-native';

export const TextInputMulti = ({ textValue, textChange, placeholder }) => {
  
  const handleTextChange = (t) => {  
    textChange(t);
  }

  return (
    <View>
      <TextInput 
        multiline={true}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        value={textValue}
      />
    </View>
  )
}