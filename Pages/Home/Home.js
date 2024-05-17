import { View, TouchableOpacity } from 'react-native';
import { Txt } from '../../components/Txt/Txt';
import { HomeText } from '../../components/HomeText/HomeText';
import { s } from './Home.style';
import { SearchIcon } from '../../components/SearchIcon/SearchIcon';
import { ButtonChoice } from '../../components/ButtonChoice/ButtonChoice';
import pokeButton from '../../assets/Backgrounds/PokemonButtonBackground.png';
import trainerButton from '../../assets/Backgrounds/TrainerButtonBackground.png';
import { useNavigation } from '@react-navigation/native';

export function Home({}) {
	const nav = useNavigation();
	function goToPokedex() {
		nav.navigate('Pokedex');
	}
	function goToTrainer() {
		nav.navigate('Trainer');
	}
	return (
		<>
			<View style={s.container}>
				<HomeText />
				<SearchIcon />
			</View>
			<View>
				<TouchableOpacity onPress={goToPokedex}>
					<ButtonChoice page="Pokemon" backgroundButton={pokeButton} />
				</TouchableOpacity>
				<TouchableOpacity onPress={goToTrainer}>
					<ButtonChoice page="Trainer" backgroundButton={trainerButton} />
				</TouchableOpacity>
			</View>
		</>
	);
}
