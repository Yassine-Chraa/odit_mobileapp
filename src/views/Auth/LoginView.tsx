import { Text } from "react-native"
import { getColors } from "../../style/theme/globalTheme";

const LoginView = (): JSX.Element => {
    return (
        <>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 36, color: getColors().largeTextColor }}>Login Screen</Text>
        </>
    )
}
export default LoginView;