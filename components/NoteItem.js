import { View, Text, Pressable, StyleSheet } from 'react-native';

export const NoteItem = ({ title, desc, date }) => {

  const navigateTo = () => {
    console.log('navegar a');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.noteContainer} onPress={navigateTo} android_ripple={{  }}>
        <Text style={styles.noteTitle}>{title}</Text>
        <Text style={styles.noteDesc}>{desc}</Text>
        <Text style={styles.noteDate}>{date}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  noteContainer: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'column',
    gap: 4,
  },
  noteTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noteDesc: {
    color: '#cbc',
    fontWeight: '400',
    fontSize: 15,
  },
  noteDate: {
    color: '#aaa',
    fontWeight: '400',
    fontSize: 12,
  }
});