import { Text, TouchableOpacity, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import AuthScreen from "../../components/auth/AuthScreen";
import userGoalsStyle from "../../style/authStyles/userGoalsStyles";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import CustomButton from "../../components/main/CustomButton";

const UserGoals = ({ navigation }: any): JSX.Element => {
    const headerBackground = require('../../assets/images/bg3.png');
    const { largeTextColor } = getColors();
    const [answer, setAnswer] = React.useState("");
  
  const answers = [
      {key:'1', value:'Exploring project management options'},
      {key:'2', value:'Enhancing team collaboration and communication'},
      {key:'3', value:'Enhancing team collaboration and communication'},
      {key:'4', value:'Enhancing team collaboration and communication'},
      {key:'5', value:'Facilitating teamwork and coordination within a team'},
  ]
    return (
        <AuthScreen image={headerBackground} style={[userGoalsStyle.display]}>
            <View style={userGoalsStyle.gap}>
                <Text style={[userGoalsStyle.title, { color: largeTextColor, maxWidth: 320 }]}>let us know why you're interested in using our app?</Text>
                <SelectList
                    setSelected={setAnswer}
                    data={answers}
                    placeholder="why you wanna use workSphere?"
                    boxStyles={userGoalsStyle.box}
                />
            </View>
            <CustomButton title="Continue" type="auth" action={() => navigation.navigate("AppUtilization")} />
        </AuthScreen>
    )
}
export default UserGoals;