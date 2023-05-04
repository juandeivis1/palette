import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme, View, FlatList, StyleSheet} from 'react-native';
import {Color} from '../components/Color';

export const ColorPalette = ({route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {colors} = route.params;

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <FlatList
        data={colors}
        style={styles.sectionContainer}
        keyExtractor={({colorName}) => colorName}
        renderItem={({item: {colorName, hexCode}, index}) => (
          <Color
            key={[colorName, hexCode, index].join('-')}
            colorName={colorName}
            hexCode={hexCode}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
