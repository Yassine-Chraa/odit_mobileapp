import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Image } from "@rneui/themed";
import globalStyles from "../../style";
import CustomIcon from "./CustomIcon";
interface IMainScreenOptions {
    showHeader: boolean
}
interface MainScreenProps {
    navigation?: any;
    options?: IMainScreenOptions,
    children: Array<JSX.Element> | JSX.Element
}
const defaultOptions: IMainScreenOptions = {
    showHeader: true
}

const MainScreen: React.FC<MainScreenProps> = ({ children, navigation, options = defaultOptions }) => {
    return (
        <ScrollView style={globalStyles.mainScreen} showsVerticalScrollIndicator={false}>
            {options?.showHeader ? (
                <View style={globalStyles.header}>
                    <Image style={globalStyles.logo} source={require('../../assets/images/logo.png')} />
                    <Image style={globalStyles.profile} source={require('../../assets/images/profile.png')} />
                </View>
            ) : (
                <TouchableOpacity
                    style={{ paddingHorizontal: 8, marginTop: 4 }}
                    onPress={() => navigation.goBack()}
                >
                    <CustomIcon focused={false} name="arrowLeft" />
                </TouchableOpacity>
            )}
            <View style={{ paddingHorizontal: 8 }}>
                {children}
            </View>
        </ScrollView>
    )
}
export default MainScreen;