import { TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import { s } from './Pokedex.style';
import { PageChoice } from '../../components/PageChoice/PageChoice';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { TyradexApi } from '../../API/tyradexApi';

export function Pokedex({}) {
	const [name, setName] = useState();
	async function fetchPokeinfo(name) {
		try {
			const Pokeinfo = await TyradexApi.fetchPokeinfo(name);
			setName(name);
			// console.log(name);
		} catch (e) {
			Alert.alert("Une erreur s'est produite !", e.message);
		}
	}
	return (
		<>
			<TouchableOpacity style={s.PageChoiceContainer}>
				<PageChoice />
			</TouchableOpacity>
			<Searchbar onSubmit={fetchPokeinfo} />
		</>
	);
}
