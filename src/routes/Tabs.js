import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackScreen } from './HomeStack';
import { ProfileStackScreen } from './ProfileStack';
import { MapStackScreen } from './MapStack';
import { PostsStackScreen } from './PostsStack';
import { Icon } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: '#f5c511',//'rgb(41,34,97)',
                inactiveTintColor: 'red',
                labelStyle: {
                    fontSize: 16,
                    marginBottom: 3,
                    fontWeight: "bold"
                },

                adaptive: true
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'home'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'user'}
                            type="font-awesome-5"
                            size={50}
                            color={color}
                        />),
                }}
            />
            <Tab.Screen
                name="Posts"
                component={PostsStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'marker'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'map'}
                            type="font-awesome-5"
                            size={20}
                            color={color}
                        />),
                }}
            />
        </Tab.Navigator>
    );
}