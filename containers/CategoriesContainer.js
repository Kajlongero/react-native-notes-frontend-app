import { FlatList, StyleSheet, View } from "react-native"
import { CategoryItem } from "../components/CategoryItem";

export const CategoriesContainer = ({ list }) => {
  return (
    <View style={styles.categoryContainer}>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={list}
        horizontal
        renderItem={({ item: { categoryName, id } }) => (
          <CategoryItem categoryName={categoryName} id={id} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 120,
    marginHorizontal: 8,
  }
})