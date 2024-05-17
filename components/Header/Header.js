import { Logo } from '../Logo/Logo';
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { View } from 'react-native';
import { s } from './Header.style';

export function Header({}) {
	return (
		<>
			<View style={s.header}>
				<HeaderTitle />
				<Logo />
			</View>
		</>
	);
}
