import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Img from '../../assets/BiologiaIcon.png';
import { FontAwesome } from '@expo/vector-icons';

export function BoxTransparentThreeTexts({
  title,
  subtitle,
  subtitle2,
  hasIcon,
  onClick,
  onEdit,
  onSave,
  onCancelEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSubtitle, setEditedSubtitle] = useState(subtitle);

  const handleEditClick = () => {
    setIsEditing(true);
    onEdit();
  };

  const handleSaveClick = () => {
    (editedSubtitle);
    setIsEditing(false);
  };

  const handleCancelEditClick = () => {
    onCancelEdit();
    setIsEditing(false);
  };

  return (
    <View>
      <View style={styles.main}>
        <Image source={Img} style={{ marginLeft: 12 }} />
        <View style={styles.textContainer}>
          <Text style={{ color: '#e2e2e2', fontSize: 17, fontWeight: '500' }}>{title}</Text>
          {isEditing ? (
            <TextInput
              value={editedSubtitle}
              onChangeText={(text) => setEditedSubtitle(text)}
              placeholder="Novo Valor"
              style={{ color: '#e2e2e2', fontSize: 14, fontWeight: '300' }}
            />
          ) : (
            <Text style={{ color: '#e2e2e2', fontSize: 14, fontWeight: '300' }}>{subtitle}</Text>
          )}
          <Text style={{ color: '#e2e2e2', fontSize: 14, fontWeight: '300' }}>{subtitle2}</Text>
        </View>
        {hasIcon && (
          <View>
            <TouchableOpacity onPress={onClick}>
              <FontAwesome style={{ alignSelf: 'center' }} name="trash-o" size={20} />
            </TouchableOpacity>
            {isEditing ? (
              <TouchableOpacity onPress={handleSaveClick}>
                <FontAwesome style={{ alignSelf: 'center' }} name="check" size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleEditClick}>
                <FontAwesome style={{ alignSelf: 'center' }} name="pencil-square-o" size={20} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#D9D9D938',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    height: 73,
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
  },
});
