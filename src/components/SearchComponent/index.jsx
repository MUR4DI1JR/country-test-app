import React from 'react';
import {View, TextInput, Button} from "react-native";

const SearchComponent = ({changeCountry}) => {
    const [text, onChangeText] = React.useState('');

    const searchClick = () =>{
        changeCountry(text);
    }

    return (
        <View className="flex flex-row my-2 w-[95%] mx-auto justify-around">
            <TextInput
                className="border rounded w-[80%] px-2"
                placeholder="Country"
                onChangeText={onChangeText}
                value={text}
            />
            <View className="border rounded ml-2">
                <Button
                    onPress={searchClick}
                    title="Поиск"
                    color="#000"
                />
            </View>
        </View>
    );
};

export default SearchComponent;