import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInputWithIcon from "../../components/auth/ConstomTextInputWithIcon";
import CustomTextInput from "../../components/auth/CustomTextInput";
import AddButton from "../../components/Project/AddButton";


const AddView = ({ navigation }: any): JSX.Element => {
    const { largeTextColor, secondaryTextColor } = getColors();
    return (
        <MainScreen>
            <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Start a New Project</Text>
            <View>
                <CustomTextInput type="project name" placeholder="Project name" inputRule="maximum 30 characters" />
                <CustomTextInput type="project description" placeholder="Give a detailed description about your project" inputRule="Minimum 200 characters" />
                <CustomTextInput type="add member" placeholder="example@email.com" inputRule="" />
                <AddButton title="Create Project" action={() => navigation.navigate('allProjects')} />
            </View>
        </MainScreen>
    )
}
export default AddView;