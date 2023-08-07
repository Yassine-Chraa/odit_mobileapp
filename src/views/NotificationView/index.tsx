import { getColors } from "../../style/theme/globalTheme";
import MainScreen from "../../components/main/MainScreen";
import { View, Text, Button, ScrollView } from 'react-native';
import { useState } from "react";
import { Invite } from "../../types/IInvite";
import { fakeInvites } from "../../data/invites";
import globalStyles from "../../style";
import NotificationItem from "../../components/Notification/NotificationItem";
import notificationStyles from "../../style/notificationStyles";
import CustomButton from "../../components/main/CustomButton";
import NotifitcationButton from "../../components/Notification/NotificationButton";


const NotifcationView = (): JSX.Element => {
   const [selectedFilter, setSelectedFilter] = useState<'all' | 'invites' | 'tasks'>('all');
  const [notifications, setNotifications] = useState<Invite[]>(fakeInvites);
      const { largeTextColor, secondaryTextColor,surfaceColor } = getColors();


  const handleFilterChange = (filter: 'all' | 'invites' | 'tasks') => {
    setSelectedFilter(filter);
    if (filter === 'invites') {
      setNotifications(fakeInvites);
    } else if (filter === 'tasks') {
      setNotifications([]); 
    } else {
      setNotifications([...fakeInvites, ...[]]);
    }
  };
    return (
        <MainScreen>
        <View>

      <View style={[notificationStyles.notifContainer,{backgroundColor:surfaceColor}]}>
        <NotifitcationButton
            title="View All"
            active={selectedFilter === 'all'}
            action={() => handleFilterChange('all')} />
        <NotifitcationButton
            title="Invites"
            active={selectedFilter === 'invites'}
            action={() => handleFilterChange('invites')} /> 
        <NotifitcationButton
              title="Tasks"
            active={selectedFilter === 'tasks'}
              action={() => handleFilterChange('tasks')} />
      </View>
      <View style={notificationStyles.notifs}>
        {
          notifications.map((item)=> <NotificationItem key={item.id} notification={item}/>)
        }
  </View>
       
    </View>
        </MainScreen>
    )
}


export default NotifcationView;