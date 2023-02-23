import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Logout from "../pages/Logout";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/>
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}