import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import NotificationModal from '../Modal/Notification'; 
export default function CustomNavbar() {
  const [isModalVisible, setModalVisible] = useState(false); 
  const navigation = useNavigation(); 

  const toggleModal = () => {
    setModalVisible(!isModalVisible); 
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
          <MaterialCommunityIcons name="home" size={30} color="#fff" />
          <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
          <MaterialCommunityIcons name="email" size={30} color="#fff" />
          <Text style={styles.iconLabel}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
          <MaterialCommunityIcons name="plus-circle" size={50} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={toggleModal}>
          <MaterialCommunityIcons name="bell" size={30} color="#fff" />
          <Text style={styles.iconLabel}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
          <MaterialCommunityIcons name="account" size={30} color="#fff" />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Notification Modal */}
      <NotificationModal visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    height: 70,
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});
