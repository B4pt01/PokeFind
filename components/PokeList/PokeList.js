// import { PokeListItem } from '../PokeListItem/PokeListItem';
// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
// import { Txt } from '../Txt/Txt';
// import { useRoute } from '@react-navigation/native';
// import { s } from './PokeList.style';

// export const [pokemons, setPokemons] = useState([]);
// export function PokeList({}) {
// 	const { params } = useRoute();
// 	useEffect(() => {
// 		const fetchPokemons = async () => {
// 			const results = await Promise.all(
// 				params.names.map(async name => {
// 					const pokemon = await TyradexApi.fetchPokeinfo(name);
// 					return pokemon;
// 				})
// 			);
// 			setPokemons(results.filter(pokemon => pokemon !== null));
// 		};

// 		fetchPokemons();
// 	}, [params.names]);

// 	return (
// 		<View style={styles.list}>
// 			{pokemons.map((pokemon, index) => (
// 				<PokeListItem key={index} name={pokemon.nom.fr} types={pokemon.types} image={pokemon.sprites.regular} height={pokemon.height} weight={pokemon.weight} />
// 			))}
// 		</View>
// 	);
// }
// export { pokemon, setPokemons };
