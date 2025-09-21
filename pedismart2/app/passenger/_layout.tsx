import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function PassengerLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#7F8C8D',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E8E8E8',
          paddingBottom: 25, // Increased for Android navigation buttons
          paddingTop: 5,
          height: 80, // Increased height to accommodate extra padding
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Find Ride',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'My Rides',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="manual-booking"
        options={{
          title: 'Manual Booking',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hand-paper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
