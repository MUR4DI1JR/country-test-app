import {ActivityIndicator, Text, View} from "react-native";

const Loader = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large"/>
            <Text className="mt-2">Loading ...</Text>
        </View>
    );
};

export default Loader;