import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type IProps = {
  colorName: string;
  hexCode: string;
};

export const Color = ({colorName, hexCode}: IProps) => {
  return (
    <View
      style={[styles.container, {backgroundColor: hexCode}]}
      key={[colorName, hexCode].join('-')}>
      <Text style={[styles.text]}>{colorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});
