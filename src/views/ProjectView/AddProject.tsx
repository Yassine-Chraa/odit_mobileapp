import { Text, View, TouchableOpacity } from "react-native"
import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import CustomTextInput from "../../components/auth/CustomTextInput";
import CustomButton from "../../components/main/CustomButton";
import CustomIcon from '../../components/main/CustomIcon';
import useProjectController from '../../viewcontrollers/useProjectController';


const AddProject = ({ navigation }: any): JSX.Element => {
    const { largeTextColor, buttonBackgroundColor } = getColors();

    const { member,members,projectRequest, setProjectRequest, createProject,setMember,addMember,handleRemoveMember } = useProjectController()

    return (
        <MainScreen options={{ showHeader: false }}>
            <Text style={[globalStyles.pageTitle, { color: largeTextColor, marginTop: 24 }]}>Start a New Project</Text>
            <View>
                <CustomTextInput
                    type="project name"
                    placeholder="Project name"
                    inputRule="maximum 30 characters"
                    value={projectRequest.title}
                    setValue={(v) => setProjectRequest((prev) => {
                        return { ...prev, title: v }
                    })} />
                <CustomTextInput
                    type="project description"
                    placeholder="Give a detailed description about your project"
                    inputRule="Minimum 100 characters"
                    value={projectRequest.description}
                    setValue={(v) => setProjectRequest((prev) => {
                        return { ...prev, description: v }
                    })} />
                <CustomTextInput
                    type="add member"
                    placeholder="example@email.com"
                    icon='plus'
                    options={{ iconRole: "button" }}
                    buttonAction={addMember}
                    value={member}
                    setValue={setMember} />
                <View>
                    {members.map((member, index) => (
                        <View key={index} style={[globalStyles.memberItem, { backgroundColor: largeTextColor }]}>
                            <Text style={{ color: 'white' }}>{member}</Text>
                            <TouchableOpacity onPress={() => handleRemoveMember(index)} style={{ backgroundColor: buttonBackgroundColor, width: 24, height: 24, borderRadius: 12, justifyContent: "center", alignItems: 'center' }}>
                                <CustomIcon focused name="minus" size={16} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <CustomButton title="Create Project" action={createProject} />
            </View>
        </MainScreen>
    )
}
export default AddProject;