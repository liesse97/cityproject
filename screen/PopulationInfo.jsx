import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../style/global';



function PopulationInfo({ route }) {

    const city = route.params.name;
    const population = route.params.population;



    // const [populationdata, setPopulationData] = useState({});
    console.log(population)
    console.log(city)


    // const onSearch = async () => {
    //     fetch(`http://api.geonames.org/searchJSON?q=${city}&username=weknowit&maxRows=5&style=LONG`)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setPopulationData(json.geonames);
    //             setLoading(false);
    //         });
    // };


    // useEffect(() => {
    //     onSearch();
    // }, []);
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titel}>{city}</Text>
            <View style={styles.card}>
                <Text >
                    population
                </Text>
                <Text style={styles.titel}>
                    {population}
                </Text>
            </View>

        </View>
    );
}

export default PopulationInfo;

const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        alignItems: 'center',
        elevation: 3,
        backgroundColor: '#fefefe',
    },
    titel: {
        textAlign: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
    },
});

