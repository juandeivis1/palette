import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColorPalette} from './screens/ColorPalette';
import {Home} from './screens/Home';
import {Modal} from './screens/Modal';
import {Provider} from 'react-redux';
import {store} from './store/store';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackScreen = (): JSX.Element => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Colors"
        component={ColorPalette}
        options={({route}: any) => ({title: route?.params?.paletteName})}
      />
    </MainStack.Navigator>
  );
};

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
          />
          <RootStack.Screen name="Modal" component={Modal} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
