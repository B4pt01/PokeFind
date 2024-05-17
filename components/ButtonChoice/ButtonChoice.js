import { View, ImageBackground } from 'react-native';
import { Txt } from '../Txt/Txt';
import { s } from './ButtonChoice.style';

export function ButtonChoice({ page, backgroundButton }) {
	return (
		<View style={s.container}>
			<ImageBackground source={backgroundButton} resizeMode="cover" style={s.image}>
				<Txt style={s.text}>{page}</Txt>
			</ImageBackground>
		</View>
	);
}
