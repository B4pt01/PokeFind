import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Home } from './Pages/Home/Home';
import JuliusSansOneRegular from './assets/font/JuliusSansOne-Regular.ttf';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { s } from './App.style';
import { Header } from './components/Header/Header';
import { Pokedex } from './Pages/Pokedex/Pokedex';
// import { PokeInfo } from './Pages/PokeInfo/PokeInfo';
import { Trainer } from './Pages/Trainer/Trainer';

export default function App() {
	const [isFontLoaded] = useFonts({
		'JuliusSansOne-Regular': JuliusSansOneRegular
	});
	const Stack = createNativeStackNavigator();

	return isFontLoaded ? (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<SafeAreaProvider>
				<SafeAreaView style={s.container}>
					<Header style={s.header} />
					<NavigationContainer>
						<Stack.Navigator screenOptions={{ animation: 'fade', headerShown: false }} initialRouteName="Home">
							<Stack.Screen name="Home" component={Home} />
							<Stack.Screen name="Pokedex" component={Pokedex} />
							{/* <Stack.Screen name="PokeInfo" component={PokeInfo} /> */}
							<Stack.Screen name="Trainer" component={Trainer} />
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaView>
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	) : null;
}
