/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AvoidSoftInputView} from 'react-native-avoid-softinput';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('List')} title="go to list" />
    </View>
  );
}

function ListScreen() {
  return (
    <View style={{flex: 1}}>
      <AvoidSoftInputView style={{flex: 1}} avoidOffset={16}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({item}) => (
            <View style={{backgroundColor: 'blue'}}>
              <Text>{item}</Text>
            </View>
          )}
          inverted
        />
        <View>
          <TextInput placeholder="Enter text" />
        </View>
      </AvoidSoftInputView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
