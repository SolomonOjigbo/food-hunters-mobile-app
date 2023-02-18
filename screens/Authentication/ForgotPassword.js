import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Image, View } from "react-native";

import { FormInput, TextButton } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import { utils } from "../../utils";
import AuthLayout from "./AuthLayout";

const ForgotPassword = () => {
	const navigation = useNavigation();

	const [email, setEmail] = React.useState("");
	const [emailError, setEmailError] = React.useState("");

	function isEnableSendEmail() {
		return email !== "" && emailError === "";
	}

	return (
		<AuthLayout
			title="Password Recovery"
			subtitle="Please enter your email address to recover your password"
			titleContainerStyle={{
				marginTop: SIZES.padding * 2,
			}}
		>
			{/* Form Input */}
			<View
				style={{
					flex: 1,
					marginTop: SIZES.padding * 2,
				}}
			>
				<FormInput
					label="Email"
					keyboardType="email-address"
					autoCompleteType="email"
					onChange={(value) => {
						utils.validateEmail(value, setEmailError);
						setEmail(value);
					}}
					value={email}
					errorMsg={emailError}
					appendComponent={
						<View
							style={{
								justifyContent: "center",
							}}
						>
							<Image
								source={
									email === "" || (email !== "" && emailError === "")
										? icons.correct
										: icons.cancel
								}
								style={{
									height: 20,
									width: 20,
									tintColor:
										email === ""
											? COLORS.gray
											: email !== "" && emailError === ""
											? COLORS.green
											: COLORS.red,
								}}
							/>
						</View>
					}
				/>
			</View>

			{/* Button */}
			<TextButton
				label="Send Email"
				disabled={isEnableSendEmail() ? false : true}
				buttonContainerStyle={{
					height: 55,
					alignItems: "center",
					marginTop: SIZES.padding,
					borderRadius: SIZES.radius,
					backgroundColor: isEnableSendEmail()
						? COLORS.primary
						: COLORS.lightGray1,
				}}
				onPress={() => {
					console.log("Password Reset Completed");
					navigation.goBack();
				}}
			/>
		</AuthLayout>
	);
};

export default ForgotPassword;
