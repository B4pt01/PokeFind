import { View, TouchableOpacity } from 'react-native';
import searchicon from '../../assets/icon/iconSearch.png';
import { HomeText } from '../../components/HomeText/HomeText';
import { s } from './Home.style';
import { SearchIcon } from '../../components/Icon/Icon';
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
				<Icon icon={searchicon} />
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
