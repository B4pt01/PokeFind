import { Image, View } from 'react-native';
import Pokefind from '../../assets/PokefindLogo.png';
import { s } from './Logo.style';

export function Logo({}) {
	return <Image style={s.Logo} source={Pokefind} />;
}
