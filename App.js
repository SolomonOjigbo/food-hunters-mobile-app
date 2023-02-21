import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<AppNavigator />
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
