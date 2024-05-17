import { Image, View } from 'react-native';
import { Txt } from '../../components/Txt/Txt';
import { HomeText } from '../../components/HomeText/HomeText';
import { s } from './Home.style';
import { SearchIcon } from '../../components/SearchIcon/SearchIcon';
import { ButtonChoice } from '../../components/ButtonChoice/ButtonChoice';

export function Home({}) {
	return (
		<>
			<View style={s.container}>
				<HomeText />
				<SearchIcon />
			</View>
			<ButtonChoice page="Pokemon" />
			<ButtonChoice page="Trainer" />
		</>
	);
}
