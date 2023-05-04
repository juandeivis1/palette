import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Preview} from '../components/Preview';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {setPalettes} from '../store/features/palettesSlice';
import {useGetPalettesQuery} from '../store/services/palettes';

export const Home = ({navigation}: any) => {
  const palettes = useSelector((state: RootState) => state.palettes.value);
  const dispatch = useDispatch();
  const {data} = useGetPalettesQuery();

  React.useEffect(() => {
    if (data?.length) {
      dispatch(setPalettes(data));
    }
  }, [data, dispatch]);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={palettes}
          keyExtractor={({paletteName}) => paletteName}
          renderItem={({item: {paletteName, colors}}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Colors', {paletteName, colors})
              }>
              <Preview key={paletteName} name={paletteName} palette={colors} />
            </TouchableOpacity>
          )}
          ListHeaderComponent={
            <TouchableOpacity
              style={styles.center}
              onPress={() => navigation.navigate('Modal')}>
              <Text style={styles.addPalette}>Add Palette</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  addPalette: {
    fontSize: 18,
    fontWeight: '700',
    padding: 5,
  },
});
