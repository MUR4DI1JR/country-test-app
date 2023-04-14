import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../Home";
import Country from "../Country";
import FavouritesCountry from "../FavouritesCountry";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Country" component={Country}/>
                <Stack.Screen name="Favourites" component={FavouritesCountry}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;