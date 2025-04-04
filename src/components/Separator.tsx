import { View, StyleSheet } from 'react-native';
import React from 'react';

const Separator = () => {
  return (
    <View style={styles.separator} />
  );
};

const styles = StyleSheet.create({
    separator: {
        height: 0.8,
        backgroundColor: '#CAD5E2',
    },
});

export default Separator;
