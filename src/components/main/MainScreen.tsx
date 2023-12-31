import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Image } from "@rneui/themed";
import globalStyles from "../../style";
import CustomIcon from "./CustomIcon";
import { useNavigation } from "@react-navigation/native";
import { getColors } from "../../style/theme/globalTheme";
interface IMainScreenOptions {
    showHeader?: boolean;
    disableScrollView?: boolean;
    title?: string;
    picture?: string;
}
interface MainScreenProps {
    options?: IMainScreenOptions,
    backPath?: string | false
    children: Array<JSX.Element> | JSX.Element,
}
const defaultOptions: IMainScreenOptions = {
    showHeader: true,
    disableScrollView: false,
}

const MainScreen: React.FC<MainScreenProps> = ({ children, options = defaultOptions, backPath = false }) => {
    const navigation: any = useNavigation();
    const { largeTextColor } = getColors();

    if (options.disableScrollView) {
        return (
            <View style={[globalStyles.mainScreen]}>
                {options?.showHeader ? (
                    <View style={globalStyles.header}>
                        <Image style={globalStyles.logo} source={require('../../assets/images/logo.png')} />
                        <Image style={globalStyles.profile} source={{uri: options.picture}} />
                    </View>
                ) : (
                    <View style={[globalStyles.header, { marginTop: 4 }]}>
                        <TouchableOpacity
                            style={{ paddingHorizontal: 8, marginTop: 4, position: 'absolute' }}
                            onPress={() => {
                                if (backPath) navigation.navigate(backPath)
                                else navigation.goBack()
                            }}
                        >
                            <CustomIcon name="arrowLeft" />
                        </TouchableOpacity>
                        <Text style={[globalStyles.headerTitle, { color: largeTextColor }]}>{options.title}</Text>
                    </View>
                )
                }
                <View style={{ paddingHorizontal: 8 }}>
                    {children}
                </View>
            </View >
        )
    } else {
        return (
            <ScrollView style={globalStyles.mainScreen} showsVerticalScrollIndicator={false}>
                {options?.showHeader ? (
                    <View style={globalStyles.header}>
                        <Image style={globalStyles.logo} source={require('../../assets/images/logo.png')} />
                        <Image style={globalStyles.profile} source={{uri: options.picture}} />
                    </View>
                ) : (
                    <View style={[globalStyles.header, { marginTop: 4 }]}>
                        <TouchableOpacity
                            style={{ paddingHorizontal: 8, marginTop: 4, position: 'absolute' }}
                            onPress={() => {
                                if (backPath) navigation.navigate(backPath)
                                else navigation.goBack()
                            }}
                        >
                            <CustomIcon name="arrowLeft" />
                        </TouchableOpacity>
                        <Text style={[globalStyles.headerTitle, { color: largeTextColor }]}>{options.title}</Text>
                    </View>
                )}
                <View style={{ paddingHorizontal: 8 }}>
                    {children}
                </View>
            </ScrollView>
        )
    }
}
export default MainScreen;