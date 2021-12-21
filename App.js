// import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, Text, StyleSheet } from 'react-native';
import CityInfo from './screen/CityInfo';
import CitySearch from './screen/CitySearch';
import Home from './screen/Home';
import PopulationInfo from './screen/PopulationInfo';
import CountrySearch from './screen/CountrySearch';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// do interface with the urldata

const Stack = createNativeStackNavigator();


const App = () => {

  return (

    <View style={styles.container} >
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="CitySearch" component={CitySearch} />

          <Stack.Screen name="CountrySearch" component={CountrySearch} />
          <Stack.Screen name="CityInfo" component={CityInfo} />
          <Stack.Screen name="PopulationInfo" component={PopulationInfo} />

        </Stack.Navigator>
      </NavigationContainer>

      {/* loading ? {
        <ActivityIndicator />
      }: */}
      {/* <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          < Text style={styles.titel}>
            {item?.countryName}
            {item.population}
            {item.name}

          </Text>
        )}
      /> */}
      {/* <Home /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});

