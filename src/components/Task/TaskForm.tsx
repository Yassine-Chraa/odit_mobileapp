import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getColors } from '../../style/theme/globalTheme';
import globalStyles from '../../style';
import CustomTextInput from '../auth/CustomTextInput';
import CustomButton from '../main/CustomButton';
import useTaskController from '../../viewcontrollers/useTaskController';
import CustomIcon from '../main/CustomIcon';
import DatePicker from 'react-native-date-picker';
import profileStyles from '../../style/profileStyles';
import { Picker } from '@react-native-picker/picker';
import { ISection } from '../../types/ISection';

interface TaskProps {
    sections: ISection[];
    roomId: number;
    setShowForm: (v: boolean) => any
}

const TaskForm: React.FC<TaskProps> = ({ sections, roomId, setShowForm }) => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const { largeTextColor, backgroundColor, buttonBackgroundColor } = getColors();
    const { taskRequest, members, member, sectionId, addMember, setMember, setTaskRequest, handleRemoveMember, createTask, setSectionId } = useTaskController()
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
                    value={taskRequest.description}
                    setValue={(v) => setTaskRequest((prev) => {
                        return { ...prev, description: v }
                    })} />
                <View>
                    <Text style={[globalStyles.textInputLable, { color: largeTextColor }]}>Section Name</Text>
                    <Picker
                        style={{ marginLeft: -16, marginRight: -16 }}
                        selectedValue={sectionId}
                        onValueChange={setSectionId}>
                        <Picker.Item
                            key={""}
                            style={profileStyles.mediumText}
                            label="Select Section" value="" />
                        {sections.map((section) => {
                            return (
                                <Picker.Item
                                    key={section._id}
                                    style={profileStyles.mediumText}
                                    label={section.name} value={section._id} />
                            )
                        })}
                    </Picker>
                </View>
                <CustomTextInput
                    type="add member"
                    placeholder="example@email.com"
                    icon='plus'
                    options={{ iconRole: "button" }}
                    buttonAction={addMember}
                    value={member}
                    setValue={setMember} />
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }} onPress={() => setOpen1(true)}>
                            <Text style={[profileStyles.mediumText, { color: largeTextColor }]}>Start Date</Text>
                            <CustomIcon name='date' />
                        </TouchableOpacity>
                        <Text>{taskRequest.startDate?.toLocaleDateString()}</Text>
                        <DatePicker
                            mode='date'
                            modal
                            open={open1}
                            date={taskRequest.startDate || new Date()}
                            onConfirm={(date) => {
                                setOpen1(false)
                                setTaskRequest((prev) => {
                                    return { ...prev, startDate: date }
                                })
                            }}
                            onCancel={() => {
                                setOpen1(false)
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 32 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }} onPress={() => setOpen2(true)}>
                            <Text style={[profileStyles.mediumText, { color: largeTextColor }]}>Deadline</Text>
                            <CustomIcon name='date' />
                        </TouchableOpacity>
                        <Text>{taskRequest.deadline?.toLocaleDateString()}</Text>
                        <DatePicker
                            mode='date'
                            modal
                            open={open2}
                            date={taskRequest.deadline || new Date()}
                            onConfirm={(date) => {
                                setOpen2(false)
                                setTaskRequest((prev) => {
                                    return { ...prev, deadline: date }
                                })
                            }}
                            onCancel={() => {
                                setOpen2(false)
                            }}
                        />
                    </View>
                </View>

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
                <View style={{ marginTop: 32 }}><CustomButton title="Create Task" action={async () => {
                    await createTask(roomId)
                    setShowForm(false)
                }} /></View>
            </View>
        </ScrollView>
    );
};

export default TaskForm