import { FlatList, StyleSheet, View } from "react-native";
import { NoteItem } from "../components/NoteItem";

export const NotesContainer = ({ list }) => {
  return (
    <View style={styles.notesContainer}>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={list}
        renderItem={({ item: { title, desc, date } }) => (
          <NoteItem title={title} desc={desc} date={date} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  notesContainer: {
    flex: 1,
    padding: 32,
    marginTop: 12,
  }
});