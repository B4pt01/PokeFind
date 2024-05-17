import { Txt } from '../Txt/Txt';
import { View } from 'react-native';
import { Icon } from '../../components/Icon/Icon';
import arrowIcon from '../../assets/icon/iconArrow.png';

export function PageChoice({}) {
	return (
		<>
			<Txt style={{ color: 'red' }}>Pokemon</Txt>
			<View style={{ transform: [{ rotate: '180deg' }] }}>
				<Icon icon={arrowIcon}></Icon>
			</View>
		</>
	);
}
