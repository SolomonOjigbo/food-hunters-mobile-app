import React from "react";
import { ImageSourcePropType } from "react-native";
import {
	Image,
	ImageStyle,
	StyleProp,
	TouchableOpacity,
	ViewStyle,
} from "react-native";

import { COLORS } from "../constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
	return (
		<TouchableOpacity style={containerStyle} onPress={onPress}>
			<Image
				source={icon}
				style={[
					{
						width: 30,
						height: 30,
						tintColor: COLORS.white,
					},
					iconStyle,
				]}
			/>
		</TouchableOpacity>
	);
};
export default IconButton;
