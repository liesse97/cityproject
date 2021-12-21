import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../style/global';


//change navigation props(any) to a more safer typescript

const Home = () => {
    const navigation = useNavigation();


    const cityHandler = () => {
        navigation.navigate('CitySearch');
    };
    const countryHandler = () => {
        navigation.navigate('CountrySearch');
    };
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titel}>City Pop</Text>

            <TouchableOpacity onPress={cityHandler} >
                <View style={globalStyles.button}>
                    <Text style={globalStyles.btnText}>SEARCH BY CITY</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={countryHandler} >
                <View style={globalStyles.button}>
                    <Text style={globalStyles.btnText}>SEARCH BY COUNTRY</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};
export default Home;