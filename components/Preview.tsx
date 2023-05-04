import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

type IProps = {
  name: string;
  palette: {
    colorName: string;
    hexCode: string;
  }[];
};

export const Preview = ({name, palette}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <FlatList
        horizontal
        data={palette.slice(0, 5)}
        renderItem={({item: {colorName, hexCode}}) => (
          <View
            key={colorName}
            style={[styles.color, {backgroundColor: hexCode}]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
  color: {
    height: 20,
    aspectRatio: 1,
    marginRight: 10,
  },
});
