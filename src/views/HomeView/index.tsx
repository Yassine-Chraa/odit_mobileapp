import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";

const HomeView = (): JSX.Element => {
    return (
        <View>
             <MainScreen>
                <Text style={{ fontSize: 40, fontFamily: "Nunito-Bold", color: getColors().largeTextColor }}>Home Screen</Text>

             </MainScreen>
        </View>
    )
}
export default HomeView;