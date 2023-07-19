import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import { Image } from "@rneui/themed";
import globalStyles from "../../style";

const MainScreen = ({children}:any): JSX.Element => {
    return (
        <View style={globalStyles.mainScreen}>
            <View style={globalStyles.header}>
                <Image style={globalStyles.logo} source={require('../../assets/images/logo.png')}/>
                <Image style={globalStyles.profile} source={require('../../assets/images/profile.png')}/>
            </View>
            {children}
        </View>
    )
}
export default MainScreen;