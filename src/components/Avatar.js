import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ source, size }) => {
  return (
    <View style={[styles.avatarContainer, { width: size, height: size }]}>
      <Image source={{ uri: source }} style={styles.avatarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Avatar;
