/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";

import CustomDrawer from "./CustomDrawer";

import {
	CartTab,
	FoodDetail,
	ForgotPassword,
	OnBoarding,
	Otp,
	Profile,
	SignIn,
	SignUp,
} from "../screens";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={"Home"}
		>
			<>
				<Stack.Screen name="Home" component={CustomDrawer} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="FoodDetail" component={FoodDetail} />
				<Stack.Screen name="MyCart" component={CartTab} />
				<Stack.Screen name="OnBoarding" component={OnBoarding} />
				<Stack.Screen name="SignIn" component={SignIn} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="Otp" component={Otp} />
			</>
		</Stack.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
