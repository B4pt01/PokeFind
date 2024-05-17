import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	item: {
		flexDirection: 'column',
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	image: {
		width: 50,
		height: 50,
		marginRight: 10
	},
	name: {
		fontSize: 18
	},
	type: {
		fontSize: 16
	},
	detail: {
		fontSize: 14
	}
});
