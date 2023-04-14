import React from 'react';
import {View, Text, Image} from "react-native";
import axios from "../../../axios";
import Loader from "../../components/Loader";

const Country = ({route}) => {
    const [isCountry, setIsCountry] = React.useState([]);
    const {name} = route.params

    React.useEffect(() => {
        axios
            .get(`/name/${name}`)
            .then(res => setIsCountry(res.data))
            .catch((e) => console.log(e))
    }, [name]);


    if (!isCountry){
        return <Loader/>
    }

    return (
        <View className="flex flex-row w-[95%] justify-around h-[120px] mx-auto items-center">
            {
                isCountry.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <View className="mr-[30px]">
                                <Text
                                    className="capitalize">название: {item.name.nativeName.rus ? item.name.nativeName.rus.common : item.name.common}</Text>
                                <Text className="capitalize">столица: {item.capital}</Text>
                                <Text className="capitalize">население: {item.population}</Text>
                                <Text className="capitalize">площадь: {item.area}</Text>
                                <Text className="capitalize">код
                                    страны: {item.postalCode ? item.postalCode.format : null}</Text>
                                <Text className="capitalize">языки: {Object.values(item.languages).join(" , ")}</Text>
                            </View>
                            <Image
                                className="w-[30%] h-[100%]"
                                source={{uri: item.flags.png}}
                                resizeMode="contain"
                            />
                        </React.Fragment>
                    )
                })
            }
        </View>
    );
};

export default Country;