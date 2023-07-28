import { Text, View } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/main/CustomButton";


const AddProject = ({ navigation }: any): JSX.Element => {
    const { largeTextColor } = getColors();
    return (
        <MainScreen options={{showHeader: false}}>
            <Text style={[globalStyles.pageTitle, { color: largeTextColor,marginTop: 24 }]}>Start a New Project</Text>
            <View>
                <CustomTextInput type="project name" placeholder="Project name" inputRule="maximum 30 characters" />
                <CustomTextInput type="project description" placeholder="Give a detailed description about your project" inputRule="Minimum 200 characters" />
                <CustomTextInput type="add member" placeholder="example@email.com" inputRule="" />
                <CustomButton title="Create Project" action={() => navigation.navigate('ProjectDetails')} />
            </View>
        </MainScreen>
    )
}
export default AddProject;