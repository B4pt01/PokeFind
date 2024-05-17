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
				Pokeinfo: { pokedex_id, generation, category, name, sprites, types, stats, evolution, height, weight }
			} = data;
			return { pokedex_id, generation, category, name, sprites, types, stats, evolution, height, weight };
		} catch (e) {
			Alert.alert("Une erreur s'est produite !", e.message);
		}
	}
}
