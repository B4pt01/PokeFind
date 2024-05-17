import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 65,
		marginBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		shadowRadius: 4,
		elevation: 5
	}
});
