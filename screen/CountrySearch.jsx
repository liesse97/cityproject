import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../style/global';
import { FontAwesome } from '@expo/vector-icons';


const CountrySearch = ({ navigation }) => {

    // const [country, setCountry] = useState<string>('');
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    const [text, setText] = useState('');


    //if name and countryname are equal

    const countrySearch = (val) => {
        setText(val);
    }


    // const onSearch = async (val) => {
    //     // console.log(val);

    //     const res = await fetch(`http://api.geonames.org/searchJSON?q=${val}&username=weknowit&maxRows=5&style=LONG`);
    //     const books = await res.json();
    //     setData(books.geonames);

    // };
    // // useEffect(() => {
    // //     onSearch();
    // // }, []);



    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titel}>SEARCH BY COUNTRY</Text>



            <TextInput
                style={globalStyles.input}
                placeholder="Enter a country"
                pointerEvents="none"
                onChangeText={countrySearch}
            />


            < TouchableOpacity
                onPress={() => navigation.navigate('CityInfo', text)}

            >
                <Text style={globalStyles.icon}>
                    <FontAwesome name="search" size={30} color="black" />
                </Text>
            </TouchableOpacity>


        </View >
    );
}

export default CountrySearch;
