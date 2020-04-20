import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, RefreshControl } from 'react-native';
import AddEmployeeModal from '../Components/AddEmployeeModal'
import EmployeesCard from '../Components/EmployeesCard'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/globalStyles'

export default function ManageEmployees() {
  const [employeeItems, setEmployeeItems] = useState([]);
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
    fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/getAllEmployees')
    .then(response => {
        return response.json()
    })
    .then(responseJson => {
      setEmployeeItems(responseJson.Items)
      resolve(true);
    })
    .catch(error => {
      console.error(error);
      reject(true)
    });
  })

  return (
    <View style={styles.container}>
        
        <FlatList
            data={employeeItems}
            style={styles.list}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => <EmployeesCard email={item.email} name={item.name} issued={item.issued}/>}
            keyExtractor={item => item.email}
        />
        <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        <AddEmployeeModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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
      backgroundColor: SECONDARY_COLOR,
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
  