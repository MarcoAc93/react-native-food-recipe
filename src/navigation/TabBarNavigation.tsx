import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components/TabIcon";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        backgroundColor: COLORS.white,
        borderTopColor: 'transparent',
        height: 80,
      }
    }}
  >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />
      }}
    />
    <Tab.Screen
      name='Search'
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} />
      }}
    />
    <Tab.Screen
      name='Bookmars'
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.bookmark} />
      }}
    />
    <Tab.Screen
      name='Settings'
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.settings} />
      }}
    />
  </Tab.Navigator>
);
