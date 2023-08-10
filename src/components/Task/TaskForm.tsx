import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import CustomTextInput from '../auth/CustomTextInput';
import CustomButton from '../main/CustomButton';
import useTaskController from '../../viewcontrollers/useTaskController';
import CustomIcon from '../main/CustomIcon';

interface TaskProps {
    buttonFunction: () => any,
}

const TaskForm: React.FC<TaskProps> = ({ buttonFunction }) => {
    const { largeTextColor, backgroundColor, buttonBackgroundColor } = getColors();
    const { taskRequest, members, member, addMember, setMember, setTaskRequest, handleRemoveMember, createTask } = useTaskController()
    return (
        <ScrollView
            style={[globalStyles.modalContent, { backgroundColor }]}
            showsVerticalScrollIndicator={false}
        >
            <View style={globalStyles.swipeButton}></View>
            <View style={[globalStyles.mainScreen]}>
                <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Create New Task</Text>
                <CustomTextInput
                    type="task name"
                    placeholder="Task Name"
                    inputRule="maximum 30 characters"
                    value={taskRequest.name}
                    setValue={(v) => setTaskRequest((prev) => {
                        return { ...prev, name: v }
                    })} />
                <CustomTextInput
                    type="task description"
                    placeholder="Give a description about task"
                    value={taskRequest.name}
                    setValue={(v) => setTaskRequest((prev) => {
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
                <View style={{ marginTop: 32 }}><CustomButton title="Create Task" action={buttonFunction} /></View>
            </View>
        </ScrollView>
    );
};

export default TaskForm