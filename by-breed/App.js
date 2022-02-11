import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { cats } from './breeds'
import Item from './Item'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList data={cats}
          renderItem={({ item, index }) => {
            return <Item index={index} data={item} />
          }}
          keyExtractor={item => item.breed}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
