import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, RefreshControl } from 'react-native';
import AddBookModal from '../Components/AddBookModal'
import BooksCard from '../Components/BooksCard'

export default function ManageBooks() {
  const [bookItems, setBookItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    loadData();
  }, [modalOpen])

  const loadData = () => new Promise((resolve, reject) => {
    fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/getAllBooks')
    .then(response => {
        console.log(JSON.stringify(response))
        return response.json()
    })
    .then(responseJson => {
      console.log(responseJson.Items)
      setBookItems(responseJson.Items)
      
      resolve(true);
    })
    .catch(error => {
      console.error(error);
      reject(true);
    });
  })

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
        <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        <AddBookModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    fab: {
      position: 'absolute',
      width: 56,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 20,
      backgroundColor: '#03A9F4',
      borderRadius: 30,
      elevation: 8
    },
    fabIcon: {
      fontSize: 40,
      color: 'white'
    },
    list: {
      marginTop: 10
    }
})
  