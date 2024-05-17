import search from '../../assets/icon/iconSearch.png';
import { Image } from 'react-native';
import { s } from './SearchIcon.style';

export function SearchIcon({}) {
	return <Image style={s.img} source={search} />;
}
