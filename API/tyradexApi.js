import { Alert } from 'react-native';

export class TyradexApi {
	static async fetchPokeinfo(name) {
		try {
			const response = await fetch(`https://tyradex.tech/api/v1/pokemon/${name}`);
			if (!response.ok) {
				throw new Error('erreur de réseau');
			}
			const data = await response.json();
			const {
				Pokeinfo: { name, generation, category, sprites, types, stats, evolution, height, weight }
			} = data;
			console.log(data);
			return {
				name: name,
				pokedex_id: pokedex_id,
				generation: generation,
				category: category,
				sprites: sprites,
				types: types,
				stats: stats,
				evolution: evolution,
				height: height,
				weight: weight
			};
		} catch (e) {
			Alert.alert("Une erreur s'est produite !", e.message);
		}
	}
}
