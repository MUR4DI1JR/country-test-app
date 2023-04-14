import {View, Text, TouchableOpacity} from 'react-native';

const Header = ({clickRegion}) => {
    const countries = ['asia', 'europe', 'africa', 'america', 'oceania'];

    return (
        <View className="bg-gray-500 w-[100%] mx-auto py-4">
            <View className="flex flex-row justify-around">
                {
                    countries.map((item, i) => {
                        return (
                            <View key={i} className="border border-solid border-white px-4 py-2 rounded">
                                <TouchableOpacity onPress={() => clickRegion(item)}>
                                    <Text className="text-white uppercase text-[12px]">
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

export default Header;