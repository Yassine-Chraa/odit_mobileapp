import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getColors } from '../../style/theme/globalTheme';
import CustomIcon from '../main/CustomIcon';
import taskStyles from '../../style/taskStyles';
import { Divider } from '@rneui/themed';

interface TaskCardProps {
    navigation: any;
    task: {
        name: string,
        deadline: string
    },
}

const TaskCard: React.FC<TaskCardProps> = ({ navigation, task }) => {
    const { largeTextColor, secondaryTextColor, borderColor, surfaceColor } = getColors();
    return (
        <View style={[taskStyles.task]}>
            <Text style={[taskStyles.deadline, { color: secondaryTextColor }]}>{task.deadline}</Text>
            <View style={taskStyles.taskBody}>
                <Text style={[taskStyles.taskName, { color: largeTextColor }]}>{task.name}</Text>
                <TouchableOpacity style={{ elevation: 8 }} onPress={() => navigation.navigate("TaskDetails", { task })}>
                    <CustomIcon focused name='arrowRight' size={33} />
                </TouchableOpacity>
            </View>
            <Divider color={borderColor} width={1} />
        </View>
    );
};

export default TaskCard