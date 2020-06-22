import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import RecentScreen from './screens/Recent';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRoute="Home"
				activeColor="#02ad94"
				inactiveColor="#dedede"
				style={{ backgroundColor: '#000' }}
				barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarLabel: '',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="home"
								color={color}
								size={28}
							/>
						)
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						tabBarLabel: '',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="camera-metering-spot"
								color={color}
								size={28}
							/>
						)
					}}
				/>
				<Tab.Screen
					name="Recents"
					component={RecentScreen}
					options={{
						tabBarLabel: '',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="account"
								color={color}
								size={28}
							/>
						)
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
