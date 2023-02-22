import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { CustomSwitch, FormInput, TextButton } from "../../components";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { utils } from "../../utils";
import AuthLayout from "./AuthLayout";

const SignIn = () => {
	const navigation = useNavigation();

	const [email, setEmail] = React.useState("");
	const [emailError, setEmailError] = React.useState("");

	const [password, setPassword] = React.useState("");
	const [showPass, setShowPass] = React.useState(false);

	const [saveMe, setSaveMe] = React.useState(false);

	const isEnableSignIn = () => {
		return email !== "" && password !== "" && emailError === "";
	};

	return (
		<AuthLayout
			title="Let's Sign You In"
			subtitle="Welcome back, you've been missed"
		>
			<View
				style={{
					flex: 1,
					marginTop: SIZES.padding * 2,
				}}
			>
				{/* Form Inputs */}
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

				<FormInput
					label="Password"
					secureTextEntry={!showPass}
					autoCompleteType="password"
					containerStyle={{
						marginTop: SIZES.radius,
					}}
					onChange={(value) => setPassword(value)}
					value={password}
					appendComponent={
						<TouchableOpacity
							style={{
								width: 40,
								alignItems: "flex-end",
								justifyContent: "center",
							}}
							onPress={() => setShowPass(!showPass)}
						>
							<Image
								source={showPass ? icons.eye_close : icons.eye}
								style={{
									height: 20,
									width: 20,
									tintColor: COLORS.gray,
								}}
							/>
						</TouchableOpacity>
					}
				/>

				{/* Save me & Forgot Password */}
				<View
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						justifyContent: "space-between",
					}}
				>
					<CustomSwitch
						value={saveMe}
						onChange={(value) => {
							setSaveMe(value);
						}}
					/>

					<TextButton
						label="Forgot Password?"
						buttonContainerStyle={{
							backgroundColor: null,
						}}
						labelStyle={{
							color: COLORS.gray,
							...FONTS.body4,
						}}
						onPress={() => navigation.navigate("ForgotPassword")}
					/>
				</View>

				{/* Sign In */}
				<TextButton
					label="Sign In"
					// disabled={isEnableSignIn() ? false : true}
					buttonContainerStyle={{
						height: 55,
						alignItems: "center",
						marginTop: SIZES.padding,
						borderRadius: SIZES.radius,
						backgroundColor: isEnableSignIn()
							? COLORS.primary
							: COLORS.transparentPrimary,
					}}
					onPress={() => {
						navigation.navigate("Home");
						console.log("Login Successfull");
					}}
					// onPress={() => onEmailAndPasswordLogin(email, password)}
				/>

				{/* Sign Up */}
				<View
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							color: COLORS.darkGray,
							...FONTS.body3,
						}}
					>
						Don't have an account?
					</Text>

					<TextButton
						label="Sign Up"
						buttonContainerStyle={{
							marginLeft: 3,
							backgroundColor: null,
						}}
						labelStyle={{
							color: COLORS.primary,
							...FONTS.h3,
						}}
						onPress={() => navigation.navigate("SignUp")}
					/>
				</View>
			</View>
		</AuthLayout>
	);
};

export default SignIn;
