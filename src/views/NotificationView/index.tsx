import { Text } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";

const NotifcationView = (): JSX.Element => {
    return (
        <MainScreen>
            <Text style={{ fontSize: 40, fontFamily: "Nunito-Bold", color: getColors().largeTextColor }}></Text>
        </MainScreen>
    )
}
export default NotifcationView;