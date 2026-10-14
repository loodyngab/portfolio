import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ContactScreen from './src/screens/ContactScreen';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            }

            return (
              <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                <Ionicons name={iconName} size={22} color={color} />
              </View>
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Beranda',
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'Tentang',
          }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectsScreen}
          options={{
            tabBarLabel: 'Proyek',
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarLabel: 'Kontak',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: -2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 28,
    borderRadius: 14,
  },
  activeIconContainer: {
    backgroundColor: colors.primaryLight,
  },
});
