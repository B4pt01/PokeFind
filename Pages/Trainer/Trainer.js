import { View } from 'react-native';
import { Txt } from '../../components/Txt/Txt';
import { s } from './Trainer.style';

export function Trainer({}) {
	return (
		<>
			<View style={s.container}>
				<Txt style={s.text}>Axe d'amelioration</Txt>
			</View>
		</>
	);
}
