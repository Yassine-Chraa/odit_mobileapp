import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";

const AddView = (): JSX.Element => {
    return (
        <View>
            <Text style={{ fontSize: 40, fontFamily: "Nunito-Bold", color: getColors().largeTextColor }}>Home Screen</Text>
        </View>
    )
}
export default AddView;