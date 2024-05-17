import { TouchableOpacity, View, Alert } from 'react-native';
import { Txt } from '../../components/Txt/Txt';
import { useState } from 'react';
import { s } from './Pokedex.style';
import { PageChoice } from '../../components/PageChoice/PageChoice';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { PokeListItem } from '../../components/PokeListItem/PokeListItem';
import { TyradexApi } from '../../API/tyradexApi';

export function Pokedex({}) {
	const [pokemons, setPokemons] = useState([]);

	async function fetchPokeinfo(name) {
		try {
			const pokeinfo = await TyradexApi.fetchPokeinfo(name);
			setPokemons([pokeinfo]); // Mettre à jour l'état avec les données récupérées
			console.log(pokeinfo);
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
			<View>
				{pokemons.length > 0 ? (
					pokemons.map((pokemon, index) => (
						<PokeListItem key={index} name={pokemon.name} types={pokemon.types} image={pokemon.sprites?.regular} height={pokemon.height} weight={pokemon.weight} />
					))
				) : (
					<Txt>No Pokémon data available.</Txt>
				)}
			</View>
		</>
	);
	// return (
	// 	<>
	// 		<TouchableOpacity style={s.PageChoiceContainer}>
	// 			<PageChoice />
	// 		</TouchableOpacity>
	// 		<Searchbar onSubmit={fetchPokeinfo} />
	// 		<View>
	// 			<PokeListItem />
	// 		</View>
	// 	</>
	// );
}
