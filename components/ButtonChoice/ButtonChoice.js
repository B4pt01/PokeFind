import { View, Button } from 'react-native';
import { Txt } from '../Txt/Txt';
import { s } from './ButtonChoice.style';

export function ButtonChoice({ page }) {
	// function goToPokedex() {
	// 	nav.navigate('Pokedex');
	// }
	return (
		<>
			<View onPress={() => navigation.push('Details')}>
				<Txt>{page}</Txt>
			</View>
		</>
	);
}
