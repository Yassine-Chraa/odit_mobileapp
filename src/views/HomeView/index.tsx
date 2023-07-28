import { Text, View, FlatList, Dimensions, TouchableOpacity, ScrollView } from "react-native"
import { getColors, getFontSize } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import globalStyles from "../../style";
import NavigateTo from "../../components/Project/navigateTo";
import CustomIcon from "../../components/main/CustomIcon";
import homeStyles from "../../style/homeStyles";
import { Image } from "@rneui/themed";
import { projects } from "../../data/projects";
import taskStyles from "../../style/taskStyles";

const HomeView = ({ navigation }: any): JSX.Element => {
    const { largeTextColor, surfaceColor, secondaryTextColor } = getColors();
    const width = Dimensions.get('screen').width;
    const tasks = [
        { projectName: "Project1", name: "task2", deadline: "07/01/2023" },
        { projectName: "Project2", name: "task2", deadline: "07/01/2023" },
    ]

    return (
        <MainScreen options={{
            disableScrollView: false,
            showHeader: true
        }}>
            <View style={[globalStyles.sectionHeader, { marginTop: 16 }]}>
                <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>Your Projects</Text>
                <NavigateTo action={() => navigation.navigate('projectMemebers')} />
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexDirection: 'row', columnGap: 12, paddingRight: 6 }}
                data={[1, 2, 3]}
                renderItem={({ item }) => {
                    if (item == 1) {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("AddProject")}
                                activeOpacity={0.4}
                                style={[globalStyles.card, homeStyles.addCard, { backgroundColor: surfaceColor }]}>
                                <CustomIcon focused name="plus" size={40} />
                                <Text style={[homeStyles.addCardTitle, { color: largeTextColor, }]}>Add New Project</Text>
                            </TouchableOpacity>
                        )
                    } else {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ProjectDetails")}
                                activeOpacity={0.6}
                                style={[globalStyles.card, { backgroundColor: surfaceColor, padding: 0, alignItems: 'center' }]}>
                                <Image source={projects[0].picture} style={{ width: width / 3, height: 172 }} />
                                <View style={homeStyles.overlay}>
                                    <Text style={homeStyles.overlayText}>islamic center cms</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }} />

            <View style={[globalStyles.sectionHeader, { marginTop: 16 }]}>
                <Text style={[globalStyles.sectionTitle, { color: largeTextColor }]}>your tasks</Text>
                <NavigateTo action={() => navigation.navigate('Tasks')} />
            </View>
            <View style={{ marginBottom: 24 }}>
                {
                    tasks.map((item, index) => {
                        return (
                            <View key={index} style={[globalStyles.card, { backgroundColor: surfaceColor, elevation: 4, marginTop: 24, marginBottom: 0 }]}>
                                <View style={globalStyles.row}>
                                    <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: getFontSize('h4'), color: secondaryTextColor }}>To do</Text>
                                    <Text style={[taskStyles.deadline, { color: secondaryTextColor }]}>{item.deadline}</Text>
                                </View>
                                <Text style={[taskStyles.deadline, { color: largeTextColor, marginTop: 16 }]}>{item.projectName}</Text>

                                <View style={[taskStyles.taskBody, { marginBottom: 0, marginTop: 4 }]}>
                                    <Text style={[taskStyles.taskName, { color: largeTextColor }]}>{item.name}</Text>
                                    <TouchableOpacity style={{ elevation: 8 }} onPress={() => navigation.navigate("TaskDetails", { item })}>
                                        <CustomIcon focused name='arrowRight' size={33} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </MainScreen>
    )
}
export default HomeView;