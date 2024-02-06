import { StyleSheet, View, Text, TextInput, Image, Pressable } from "react-native"
import { StandardInput } from "../components/StandardInput";

export const Login = () => {
  return (
    <View>
      <View>
        <Image />
      </View>
      <View>
        <StandardInput placeholder="Email" />
        <StandardInput placeholder="Password" />
      </View>
      <View>
        <View>
          <Pressable>
            <View>
              <Text></Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable>
            <View>
              <Text></Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}