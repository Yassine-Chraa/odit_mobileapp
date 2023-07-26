import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, Modal } from 'react-native';
import { getColors, getFontSize } from '../../style/theme/globalTheme';
import CustomIcon from '../main/CustomIcon';
import taskStyles from '../../style/taskStyles';
import { Divider } from '@rneui/themed';
import AddButton from '../Project/AddButton';
import globalStyles from '../../style';
import CustomTextInput from '../auth/CustomTextInput';
import { range } from '../../helpers/customFunctions';
import useTaskController from '../../viewcontrollers/useTaskController';

interface TaskProps {
    navigation: any
    buttonFunction: () => any,
}

const TaskForm: React.FC<TaskProps> = ({ navigation, buttonFunction }) => {
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
                            return <CustomTextInput key={v} type="Assigned to" placeholder="example@gmail.com" buttonIcon={membersNumber == v ? "plus" : undefined} buttonAction={membersNumber == v ? addMoreMembers : undefined} style={{ marginBottom: 0 }} />
                        } else {
                            if (v <= membersNumber) {
                                return (
                                    <CustomTextInput key={v} placeholder="example@gmail.com" style={{ marginBottom: 0 }} buttonIcon={membersNumber == v && membersNumber < membersLimit ? "plus" : undefined} buttonAction={membersNumber == v ? addMoreMembers : undefined} />
                                )
                            }
                        }

                    })
                }
                <View style={{ marginTop: 32 }}><AddButton title="Create Task" action={buttonFunction} /></View>
            </View>
        </ScrollView>
    );
};

export default TaskForm