import { Image } from 'react-native';
import { s } from './Icon.style';

export function Icon({ icon }) {
	return <Image style={s.img} source={icon} />;
}
