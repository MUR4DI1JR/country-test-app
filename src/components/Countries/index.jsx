import React from 'react';
import {View, SafeAreaView, Text, Image, FlatList, RefreshControl, RefreshControlComponent, Button} from "react-native";
import {TouchableOpacity} from "nativewind/dist/preflight";
import {useDispatch} from "react-redux";
import {Toast} from "toastify-react-native";

const Countries = ({data, isLoading, fetchCountries, navigation}) => {
    const dispatch = useDispatch();

    const addFavourites = (item) =>{
        dispatch({type: 'ADD_COUNTRY', payload: item});
        Toast.success('Added!');
    }

    return (
        <SafeAreaView className="h-[600px]">
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCountries} />}
                data={data}
                renderItem={({item}) => {
                    return (
                        <React.Fragment key={item.ccn3}>
                            <TouchableOpacity onPress={() => navigation.navigate('Country', {name: item.name.common})}>
                                <View className="flex flex-row w-[95%] h-[120px] mx-auto my-2 items-center">
                                    <View className="flex justify-center items-center">
                                        <Image
                                            className="w-[80%] h-[70%] mx-[0px] my-[0px]"
                                            source={{uri: item.flags.png}}
                                            resizeMode="contain"
                                        />
                                        <View className="rounded bg-blue-300">
                                            <Button
                                                onPress={() => addFavourites(item)}
                                                title="В избранное"
                                                color="#fff"
                                            />
                                        </View>
                                    </View>
                                    <View className="ml-[30px]">
                                        <Text
                                            className="capitalize">название: {item.name.nativeName.rus ? item.name.nativeName.rus.common : item.name.common}</Text>
                                        <Text className="capitalize">столица: {item.capital}</Text>
                                        <Text className="capitalize">население: {item.population}</Text>
                                        <Text className="capitalize">площадь: {item.area}</Text>
                                        <Text className="capitalize">код
                                            страны: {item.postalCode ? item.postalCode.format : null}</Text>
                                        <Text className="capitalize">языки: {Object.values(item.languages).join(" , ")}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    )
                }}
            />
        </SafeAreaView>
    );
};

export default Countries;