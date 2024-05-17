import { Alert } from 'react-native';

export class TyradexApi {
	static async fetchPokeinfo(name) {
		try {
			const response = await fetch(`https://tyradex.tech/api/v1/pokemon/${name}`);
			if (!response.ok) {
				throw new Error('Erreur de réseau');
			}
			return await response.json();
			// const data = await response.json();
			// const { name, pokedex_id, generation, category, sprites, types, stats, evolution, height, weight } = data;

			// return {
			// 	name,
			// 	pokedex_id,
			// 	generation,
			// 	category,
			// 	sprites,
			// 	types,
			// 	stats,
			// 	evolution,
			// 	height,
			// 	weight
			// };
		} catch (e) {
			Alert.alert("Une erreur s'est produite !", e.message);
		}
	}
}
