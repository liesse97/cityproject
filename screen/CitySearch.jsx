import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../style/global';
import { FontAwesome } from '@expo/vector-icons';


function CitySearch({ navigation }) {

    const [cityData, setCityData] = useState([]);



    const onSearch = async (val) => {
        fetch(`http://api.geonames.org/searchJSON?q=${val}&username=weknowit&maxRows=5&style=LONG`)
            .then((response) => response.json())
            .then((json) => {
                setCityData(json.geonames);
                setLoading(false);
            });
    };


    useEffect(() => {
        onSearch();
    }, []);
    return (
        <View style={styles.container}>

            <Text style={globalStyles.titel}>SEARCH BY CITY</Text>


            <TextInput
                style={globalStyles.input}
                onChangeText={onSearch}
                placeholder="Enter a city"
                pointerEvents="none" />
            {cityData[0]?.name != cityData[0]?.countryName ?

                <TouchableOpacity
                    onPress={() => navigation.navigate('PopulationInfo', cityData[0])}


                >
                    <Text style={globalStyles.icon}>
                        <FontAwesome name="search" size={30} color="black" />
                    </Text>
                </TouchableOpacity>

                : <Text> City doesnt exist</Text>
            }

        </View>
    );
}

export default CitySearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,
    },

});

