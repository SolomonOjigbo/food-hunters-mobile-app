import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

// Custom components
import { MainLayout } from "../screens";

// extras
import { COLORS } from "../constants";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
	const [progress, setProgress] = useState(new Animated.Value(0));

	const scale = Animated.interpolateNode(progress, {
		inputRange: [0, 1],
		outputRange: [1, 0.8],
	});

	const borderRadius = Animated.interpolateNode(progress, {
		inputRange: [0, 1],
		outputRange: [0, 26],
	});

	const animatedStyle = { borderRadius, transform: [{ scale }] };

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.primary,
			}}
		>
			<Drawer.Navigator
				drawerType="slide"
				overlayColor="transparent"
				drawerStyle={{
					flex: 1,
					width: "65%",
					paddingRight: 20,
					backgroundColor: "transparent",
				}}
				sceneContainerStyle={{
					backgroundColor: "transparent",
				}}
				initialRouteName="MainLayout"
				drawerContent={(props) => {
					setTimeout(() => {
						setProgress(props.progress);
					}, 0);

					return (
						<CustomDrawerContent
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
							navigation={props.navigation}
						/>
					);
				}}
			>
				<Drawer.Screen name="MainLayout">
					{(props) => (
						<MainLayout {...props} drawerAnimationStyle={animatedStyle} />
					)}
				</Drawer.Screen>
			</Drawer.Navigator>
		</View>
	);
};
function mapStateToProps(state) {
	return {
		selectedTab: state.tabReducer.selectedTab,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setSelectedTab: (selectedTab) => {
			return dispatch(setSelectedTab(selectedTab));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
