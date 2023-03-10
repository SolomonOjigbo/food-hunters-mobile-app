import React from "react";
import { ScrollView, Text, View } from "react-native";

import { CardItem, TextButton } from "../../components";
import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { ICard } from "../../constants/types";
import { RootStackScreenProps } from "../../types";

const MyCard = ({ navigation }) => {
	const [selectedCard, setSelectedCard] = React.useState();

	function renderHeader() {
		return (
			<Header
				title="MY CARDS"
				containerStyle={{
					height: 50,
					marginHorizontal: SIZES.padding,
					marginTop: 40,
				}}
				leftComponent={
					<IconButton
						icon={icons.back}
						containerStyle={{
							width: 40,
							height: 40,
							justifyContent: "center",
							alignItems: "center",
							borderWidth: 1,
							borderRadius: SIZES.radius,
							borderColor: COLORS.gray2,
						}}
						iconStyle={{
							width: 28,
							height: 20,
							tintColor: COLORS.gray2,
						}}
						onPress={() => navigation.goBack()}
					/>
				}
				rightComponent={<View style={{ width: 40 }} />}
			/>
		);
	}

	function renderMyCards() {
		return (
			<View>
				{dummyData.myCards.map((item, index) => {
					return (
						<CardItem
							key={`MyCard-${item.productId}`}
							item={item}
							isSelected={
								`${selectedCard?.key}-${selectedCard?.productId}` ===
								`MyCard-${item.productId}`
							}
							onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
						/>
					);
				})}
			</View>
		);
	}

	function renderAddNewCard() {
		return (
			<View
				style={{
					marginTop: SIZES.padding,
				}}
			>
				<Text style={{ ...FONTS.h3 }}>Add new card</Text>

				{dummyData.allCards.map((item, index) => {
					return (
						<CardItem
							key={`NewCard-${item.productId}`}
							item={item}
							isSelected={
								`${selectedCard?.key}-${selectedCard?.productId}` ===
								`NewCard-${item.productId}`
							}
							onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
						/>
					);
				})}
			</View>
		);
	}

	function renderFooter() {
		return (
			<View
				style={{
					paddingTop: SIZES.radius,
					paddingBottom: SIZES.padding,
					paddingHorizontal: SIZES.padding,
				}}
			>
				<TextButton
					disabled={selectedCard == null}
					buttonContainerStyle={{
						height: 60,
						borderRadius: SIZES.radius,
						backgroundColor:
							selectedCard == null ? COLORS.gray : COLORS.primary,
					}}
					label={selectedCard?.key === "NewCard" ? "Add" : "Place your Order"}
					onPress={() => {
						if (selectedCard?.key === "NewCard") {
							navigation.navigate("AddCard", {
								selectedCard: selectedCard,
							});
						} else {
							navigation.navigate("Checkout", {
								selectedCard: selectedCard,
							});
						}
					}}
				/>
			</View>
		);
	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
			}}
		>
			{/* Header */}
			{renderHeader()}

			{/* Cards */}
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					marginTop: SIZES.radius,
					paddingHorizontal: SIZES.padding,
					paddingBottom: SIZES.radius,
				}}
			>
				{/* My Cards */}
				{renderMyCards()}

				{/* Add New Card */}
				{renderAddNewCard()}
			</ScrollView>

			{/* Footer */}
			{renderFooter()}
		</View>
	);
};

export default MyCard;
