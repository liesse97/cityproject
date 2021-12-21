import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../style/global';

function CityInfo({ navigation, route }) {

    const text = route.params;

    const [data, setData] = useState([]);
    // console.log(data)
    // <const populationHandler = ({ navigation }) => {
    //     navigation.navigate('PopulationInfo');
    // };>

    const onSearch = async () => {
        fetch(`http://api.geonames.org/searchJSON?q=${text}&username=weknowit&maxRows=5&style=LONG`)
            .then((response) => response.json())
            .then((json) => {
                setData(json.geonames);
                setLoading(false);
            });
    };


    useEffect(() => {
        onSearch();
    }, []);

    return (
        <View style={globalStyles.container}>
            {/* <View style={styles.container}> */}
            <Text style={globalStyles.titel}>{data[0]?.name}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    < TouchableOpacity
                        onPress={() => navigation.navigate('PopulationInfo', item)}

                    >
                        <View style={globalStyles.button}>

                            <Text style={globalStyles.btnText}>{item.name}</Text>
                        </View>

                    </TouchableOpacity>
                )}

            />
        </View>
    );
}

export default CityInfo;

