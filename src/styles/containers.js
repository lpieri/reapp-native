import { StyleSheet } from 'react-native'

const containers = StyleSheet.create({
	container: {
		flex: 1,
		padding: 21,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	sectionTitle: {
	  fontSize: 24,
	  fontWeight: '600',
	},
	sectionDescription: {
	  marginTop: 8,
	  fontSize: 18,
	  fontWeight: '400',
	},
	highlight: {
	  fontWeight: '700',
	},
  });

export default containers;