import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Home } from './Pages/Home/Home';
import JuliusSansOneRegular from './assets/font/JuliusSansOne-Regular.ttf';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { s } from './App.style';
import { Header } from './components/Header/Header';

export default function App() {
	const [isFontLoaded] = useFonts({
		'JuliusSansOne-Regular': JuliusSansOneRegular
	});
	return isFontLoaded ? (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<SafeAreaProvider>
				<SafeAreaView style={s.container}>
					<Header style={s.header} />
					<Home />
				</SafeAreaView>
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	) : null;
}
