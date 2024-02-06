import { Pressable, StyleSheet, Text, View } from "react-native"

export const CategoryItem = ({ categoryName, id }) => {
  
  const chargeNotesAttached = () => {
    console.log('click');
  }
  
  return (
    <View style={styles.categoryView}>
      <Pressable style={styles.itemContainer} onPress={chargeNotesAttached}>
        <Text style={styles.textItem}>{categoryName}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryView: {
    flexDirection: 'row',
  },
  itemContainer: {
    padding: 8,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 12,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
  textItem: {
    color: '#fff',
  },
});