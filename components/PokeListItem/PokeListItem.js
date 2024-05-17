import { Image, View } from 'react-native';
import { s } from './PokeListItem.style';
import { Txt } from '../Txt/Txt';

export function PokeListItem({ image, name, types, height, weight }) {
	return (
		<View style={s.item}>
			<Txt style={s.name}>{name?.fr}</Txt>
			<View>
				{types ? (
					types.map((type, index) => (
						<View key={index}>
							<Txt>{type.name}</Txt>
							{/* {type.image && <Image source={{ uri: type.image }} />} */}
						</View>
					))
				) : (
					<Txt>Types: Unknown</Txt>
				)}
			</View>
			{image ? <Image source={{ uri: image }} style={s.image} /> : <Txt>Image not available</Txt>}
			<Txt>Height: {height ? `${height} ` : 'Unknown'}</Txt>
			<Txt>Weight: {weight ? `${weight} ` : 'Unknown'}</Txt>
		</View>
	);
}
