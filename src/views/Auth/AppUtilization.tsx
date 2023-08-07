import { Text, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import userGoalsStyle from "../../style/authStyles/userGoalsStyles";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";
import CustomButton from "../../components/main/CustomButton";

const AppUtilization = ({ navigation }: any): JSX.Element => {
    //const dispatch = useDispatch()
    //const test = () => dispatch<any>(switchDarkMode());
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor } = getColors();
    const [answer, setAnswer] = React.useState("");
  
    const { signup } = UseAuthViewController();
  const answers = [
      {key:'1', value:'You’re part of an already existing project'},
      {key:'2', value:'Manage your own project'},
  ]
    return (
        <AuthScreen image={headerBackground} style={[userGoalsStyle.display]}>
            <View style={userGoalsStyle.gap}>
                <View style={userGoalsStyle.appUtil}>
                    <Text style={[userGoalsStyle.title, { color: largeTextColor, maxWidth: 320 }]}>how will you use </Text>
                    {/* <Image resizeMode="contain" source={logo} style={[authStyles.authPoster]} /> */}
                </View>
                <SelectList
                    setSelected={setAnswer}
                    data={answers}
                    placeholder="why you wanna use OdIT?"
                    boxStyles={userGoalsStyle.box}
                />
            </View>
            <CustomButton title="Continue" type="auth" action={signup} />
        </AuthScreen>
    )
}
export default AppUtilization;