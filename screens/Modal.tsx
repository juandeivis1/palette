import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Switch,
  Button,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addPalette} from '../store/features/palettesSlice';
import {Color} from '../types';
import {COLORS} from '../data/colors';

export const Modal = ({navigation}: any) => {
  const [name, setName] = React.useState('');
  const [colors, setColors] = React.useState<Color[]>([]);
  const dispatch = useDispatch();

  const submitForm = () => {
    if (!name) {
      Alert.alert('Missing name!');
    }
    if (colors.length < 3) {
      Alert.alert('Require a least 3 colors!');
    }
    dispatch(addPalette({paletteName: name, colors}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name of the palette"
      />

      <FlatList
        data={COLORS}
        style={styles.container}
        renderItem={({item}) => {
          return (
            <View style={styles.color}>
              <Text>{item.colorName}</Text>
              <Switch
                onValueChange={add =>
                  add
                    ? setColors(p => [...p, item])
                    : setColors(colors.filter(x => x.hexCode !== item.hexCode))
                }
                value={!!colors.find(x => x.hexCode === item.hexCode)}
              />
            </View>
          );
        }}
      />
      <Button onPress={submitForm} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
