import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";

const HomeView = (): JSX.Element => {
    return (
        <View>
            <Text style={{ fontSize: 40, fontFamily: "Nunito-Bold", color: getColors().largeTextColor }}>Notification Screen</Text>
        </View>
    )
}
export default HomeView;