import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles } from '../style/global';

function CityInfo({ navigation, route }) {

    const text = route.params;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log(data)
    // <const populationHandler = ({ navigation }) => {
    //     navigation.navigate('PopulationInfo');
    // };>

    const onSearch = async () => {
        fetch(`http://api.geonames.org/searchJSON?q=${text}&username=weknowit&maxRows=10&style=LONG`)
            .then((response) => response.json())
            .then((json) => {
                setData(json.geonames);
                setLoading(true);

            });

    };


    useEffect(() => {
        onSearch();
    }, []);

    return (
        <View style={globalStyles.container}>


            {data[0]?.name !== data[0]?.countryName ?

                <Text style={globalStyles.titel}> Country {data[0]?.name} doesn't exist</Text>
                :


                <>
                    <Text style={globalStyles.titel}>{data[0]?.name}</Text>

                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.key}
                        // extraData={ }

                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PopulationInfo', item)}

                            >
                                <ScrollView>

                                    <View style={globalStyles.button}>

                                        <Text style={globalStyles.btnText}>{item.name}</Text>
                                    </View>
                                </ScrollView>


                            </TouchableOpacity>
                        )}

                    />

                </>


            }




        </View>
    );
}

export default CityInfo;

