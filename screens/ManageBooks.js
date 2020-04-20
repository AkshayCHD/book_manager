import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, RefreshControl } from 'react-native';
import BooksCard from '../Components/BooksCard'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/globalStyles' 

export default function ManageBooks({ navigation }) {
  const [bookItems, setBookItems] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => new Promise((resolve, reject) => {
    fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/getAllBooks')
    .then(response => {
        return response.json()
    })
    .then(responseJson => {
      responseJson.Items.sort(function(item1, item2) {
        return item1.book_id - item2.book_id;
      })
      setBookItems(responseJson.Items)
      
      resolve(true);
    })
    .catch(error => {
      console.error(error);
      reject(true);
    });
  })
  const moveToAddBooks = () => {
    navigation.navigate('AddBooks');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookItems}
        style={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <BooksCard id={item.book_id} name={item.name} author={item.author} issued_by={item.issued_by} issued={item.issued}/>}
        keyExtractor={item => item.book_id.toString()}
      />
        <TouchableOpacity onPress={() => moveToAddBooks()} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        {/* <AddBookModal navigation={navigation} modalOpen={modalOpen} setModalOpen={setModalOpen}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
      position: 'absolute',
      width: 56,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 20,
      backgroundColor: SECONDARY_COLOR,
      borderRadius: 30,
      elevation: 8
    },
    fabIcon: {
      fontSize: 40,
      color: 'white'
    },
    list: {
      marginTop: 10,
    }
})
  