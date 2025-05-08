import { Tabs } from 'expo-router';
import { StyleSheet, View, ViewStyle } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#d62828',
        tabBarInactiveTintColor: "#1d2d44",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={28} style={styles.tabBarIcon}/>,
        }}
      />
      <Tabs.Screen
        name="shifts"
        options={{
          title: "Shifts",
          tabBarIcon: ({ color }) => <FontAwesome name="table" color={color} size={28} style={styles.tabBarIcon}/>,
        }}
      />
      <Tabs.Screen
        name="newShift"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View style={getTabBarIconCenteredPosition(focused)}>
              <FontAwesome name="plus" color={color} size={28} style={styles.tabBarIconWhite}/>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color }) => <FontAwesome name="calendar-o" color={color} size={28} style={styles.tabBarIcon}/>,

        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <FontAwesome name="gear" color={color} size={28} style={styles.tabBarIcon}/>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -5,
  },
  tabBarIconWhite: {
    marginBottom: -5,
    color: "white",
  },
});


const getTabBarIconCenteredPosition = (focused: boolean): ViewStyle => ({
  backgroundColor: focused ? "#d62828" : "#1d2d44",
  width: 60,
  height: 60,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 5,
});

