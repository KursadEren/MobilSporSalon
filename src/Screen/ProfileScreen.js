import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(null);
  const [fields, setFields] = useState([{ id: 1, label: '', value: '' }]);
  const [isEditing, setIsEditing] = useState(false);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  const handleChangeText = (text, id, key) => {
    const newFields = fields.map(field => {
      if (field.id === id) {
        return { ...field, [key]: text };
      }
      return field;
    });
    setFields(newFields);
  };

  const addField = () => {
    const newId = fields.length + 1;
    setFields([...fields, { id: newId, label: '', value: '' }]);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Profile saved', { profileImage, fields });
  };

  const renderField = ({ item }) => (
    <View key={item.id} style={styles.fieldContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter field name"
        value={item.label}
        onChangeText={(text) => handleChangeText(text, item.id, 'label')}
      />
      <TextInput
        style={styles.textInput}
        placeholder={`Enter ${item.label ? item.label.toLowerCase() : 'value'}`}
        value={item.value}
        onChangeText={(text) => handleChangeText(text, item.id, 'value')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.imageContainer}>
              {profileImage ? (
                <Image source={profileImage} style={styles.profileImage} />
              ) : (
                <Text style={styles.imagePlaceholder}>Pick an Image</Text>
              )}
            </View>
          </TouchableOpacity>

          <FlatList
            data={fields}
            renderItem={renderField}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={<Button title="Add New Field" onPress={addField} />}
          />

          <Button title="Save Profile" onPress={handleSaveProfile} />
        </>
      ) : (
        <>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image source={profileImage} style={styles.profileImage} />
            ) : (
              <Text style={styles.imagePlaceholder}>No Image</Text>
            )}
          </View>

          {fields.map(field =>
            field.value.trim() ? (
              <View key={field.id} style={styles.fieldContainer}>
                <Text style={styles.label}>{field.label}:</Text>
                <Text style={styles.infoText}>{field.value}</Text>
              </View>
            ) : null
          )}

          <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imagePlaceholder: {
    color: '#7a7a7a',
    fontSize: 16,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
});
