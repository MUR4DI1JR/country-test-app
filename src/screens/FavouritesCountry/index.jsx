import React from 'react';
import {View} from "react-native";
import {useSelector} from "react-redux";
import Countries from "../../components/Countries";

const FavouritesCountry = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const country = useSelector(state => state.country.country)


    return (
        <View>
            <Countries
                data={country ? country : []}
                isLoading={isLoading}
                navigation={navigation}
            />
        </View>
    );
};

export default FavouritesCountry;