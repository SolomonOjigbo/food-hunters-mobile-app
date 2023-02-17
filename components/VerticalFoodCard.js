import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
	const foodItem = item;

	return (
		<TouchableOpacity
			style={[
				{
					width: 200,
					padding: SIZES.radius,
					alignItems: "center",
					borderRadius: SIZES.radius,
					backgroundColor: COLORS.lightGray2,
				},
				containerStyle,
			]}
			onPress={onPress}
		>
			{/* Calories and Favourite */}
			<View style={{ flexDirection: "row" }}>
				{/* Calories */}
				<View style={{ flex: 1, flexDirection: "row" }}>
					<Image
						source={icons.calories}
						style={{
							width: 30,
							height: 30,
						}}
					/>
					<Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
						{foodItem.calories} Calories
					</Text>
				</View>

				{/* Favourite */}
				<TouchableOpacity onPress={() => likeHandler()}>
					<Image
						source={icons.love}
						style={{
							width: 20,
							height: 20,
							// tintColor: isLiked ? COLORS.primary : COLORS.gray,
						}}
					/>
				</TouchableOpacity>
			</View>

			{/* Image */}
			<View
				style={{
					height: 150,
					width: 150,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={foodItem.image}
					style={{
						height: "100%",
						width: "100%",
					}}
				/>
			</View>

			{/* Info */}
			<View
				style={{
					alignItems: "center",
					marginTop: -20,
				}}
			>
				<Text style={{ ...FONTS.h3 }}>{foodItem.name}</Text>
				<Text
					style={{
						color: COLORS.darkGray2,
						textAlign: "center",
						...FONTS.body5,
					}}
				>
					{foodItem.description}
				</Text>
				<Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>
					${foodItem.price}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default VerticalFoodCard;
