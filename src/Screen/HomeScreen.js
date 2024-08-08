import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Navbar from '../Component/MyAapbar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar />
      
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to the Sports App</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('JoinCompany')}
        >
          <Text style={styles.buttonText}>Join a Company</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('JoinCoach')}
        >
          <Text style={styles.buttonText}>Join a Coach</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ManageStudents')}
        >
          <Text style={styles.buttonText}>Manage Students</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
