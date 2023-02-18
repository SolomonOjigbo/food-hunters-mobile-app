import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { FormInput, TextButton, TextIconButton } from "../../components";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { utils } from "../../utils";
import AuthLayout from "./AuthLayout";

const SignUp = () => {
	const navigation = useNavigation();

	const [displayName, setDisplayName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [showPass, setShowPass] = React.useState(false);
	const [emailError, setEmailError] = React.useState("");
	const [displayNameError, setDisplayNameError] = React.useState("");
	const [passwordError, setPasswordError] = React.useState("");

	const isEnableSignUp = () => {
		return (
			displayName !== "" &&
			email !== "" &&
			password !== "" &&
			displayNameError === "" &&
			emailError === "" &&
			passwordError === ""
		);
	};

	return (
		<AuthLayout
			title="Getting Started"
			subtitle="Create an account to continue!"
			titleContainerStyle={{
				marginTop: SIZES.radius,
			}}
		>
			{/* Form Input And Sign UP */}

			<View
				style={{
					flex: 1,
					marginTop: SIZES.padding,
				}}
			>
				<FormInput
					label="Display name"
					onChange={(value) => {
						setDisplayName(value);
					}}
					value={displayName}
					errorMsg={displayNameError}
					appendComponent={
						<View
							style={{
								justifyContent: "center",
							}}
						>
							<Image
								source={
									displayName === "" ||
									(displayName !== "" && displayNameError === "")
										? icons.correct
										: icons.cancel
								}
								style={{
									height: 20,
									width: 20,
									tintColor:
										displayName === ""
											? COLORS.gray
											: displayName !== "" && displayNameError === ""
											? COLORS.green
											: COLORS.red,
								}}
							/>
						</View>
					}
				/>

				<FormInput
					label="Email"
					keyboardType="email-address"
					autoCompleteType="email"
					containerStyle={{
						marginTop: SIZES.radius,
					}}
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
					onChange={(value) => {
						utils.validatePassword(value, setPasswordError);
						setPassword(value);
					}}
					value={password}
					errorMsg={passwordError}
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

				{/* Sign Up & Sign In */}
				<TextButton
					label="Sign Up"
					disabled={isEnableSignUp() ? false : true}
					buttonContainerStyle={{
						height: 55,
						alignItems: "center",
						marginTop: SIZES.padding,
						borderRadius: SIZES.radius,
						backgroundColor: isEnableSignUp()
							? COLORS.primary
							: COLORS.transparentPrimary,
					}}
					onPress={() => navigation.navigate("Otp")}
					// onPress={() => onEmailAndPasswordSignup(displayName, email, password)}
				/>

				<View
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						justifyContent: "center",
					}}
				>
					<Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
						Already have an account?
					</Text>
					<TextButton
						label="Sign In"
						buttonContainerStyle={{
							marginLeft: 3,
							backgroundColor: null,
						}}
						labelStyle={{
							color: COLORS.primary,
							...FONTS.h3,
						}}
						onPress={() => navigation.goBack()}
					/>
				</View>
			</View>
		</AuthLayout>
	);
};

export default SignUp;
