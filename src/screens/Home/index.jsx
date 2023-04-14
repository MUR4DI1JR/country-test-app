import React from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import Countries from "../../components/Countries";
import axios from "../../../axios";
import Header from "../../components/Header";
import SearchComponent from "../../components/SearchComponent";
import Loader from "../../components/Loader";

export default function Home({navigation}) {
    const [region, setRegion] = React.useState('europe');
    const [isLoading, setIsLoading] = React.useState(false);
    const [countries, setCountries] = React.useState([]);
    const [country, setCountry] =React.useState('');

    const fetchCountries = () => {
        setIsLoading(true);
        axios
            .get(`/region/${region}`)
            .then(({data}) => {
                setCountries(data);
            })
            .catch(e =>{
                console.log(e);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    React.useEffect(() => {
        fetchCountries()
    }, [region]);

    const filterCountry = countries.filter(item => item.name.common.toLowerCase() === country.toLowerCase())

    if (isLoading) {
        return <Loader/>
    }

    return (
        <View>
            <Header clickRegion={(region) => setRegion(region)}/>
            <SearchComponent changeCountry={(country) => setCountry(country)}/>
            <Countries
                data={country === "" ? countries : filterCountry}
                isLoading={isLoading}
                fetchCountries={() => fetchCountries()}
                navigation={navigation}
            />
            <View className="w-[40%] bg-green-500 rounded fixed">
                <Button
                    onPress={() => navigation.navigate('Favourites')}
                    title="В избранное"
                    color="#fff"
                />
            </View>
        </View>
    );
}
