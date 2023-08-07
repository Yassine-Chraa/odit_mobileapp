import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, Modal } from 'react-native';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import CustomTextInput from '../auth/CustomTextInput';
import { range } from '../../helpers/customFunctions';
import useTaskController from '../../viewcontrollers/useTaskController';
import CustomButton from '../main/CustomButton';

interface TaskProps {
    buttonFunction: () => any,
}

const TaskForm: React.FC<TaskProps> = ({ buttonFunction }) => {
    const { largeTextColor, backgroundColor } = getColors();
    const { membersLimit, membersNumber, addMoreMembers } = useTaskController();
    return (
        <ScrollView
            style={[globalStyles.modalContent, { backgroundColor }]}
            showsVerticalScrollIndicator={false}
        >
            <View style={globalStyles.swipeButton}></View>
            <View style={[globalStyles.mainScreen]}>
                <Text style={[globalStyles.pageTitle, { color: largeTextColor }]}>Create New Task</Text>
                <CustomTextInput type="task name" placeholder="Task Name" inputRule="maximum 30 characters" />
                <CustomTextInput type="task description" placeholder="Give a description about task" />
                {
                    range(membersLimit).map((v) => {
                        if (v == 1) {
                            return <CustomTextInput key={v} type="Assigned to" placeholder="example@gmail.com" icon={membersNumber == v ? "plus" : undefined} buttonAction={membersNumber == v ? addMoreMembers : undefined} style={{ marginBottom: 0 }} options={{ iconRole: "button" }} />
                        } else {
                            if (v <= membersNumber) {
                                return (
                                    <CustomTextInput key={v} placeholder="example@gmail.com" style={{ marginBottom: 0 }} icon={membersNumber == v && membersNumber < membersLimit ? "plus" : undefined} buttonAction={membersNumber == v ? addMoreMembers : undefined} options={{ iconRole: "button" }} />
                                )
                            }
                        }

                    })
                }
                <View style={{ marginTop: 32 }}><CustomButton title="Create Task" action={buttonFunction} /></View>
            </View>
        </ScrollView>
    );
};

export default TaskForm