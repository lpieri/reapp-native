import React, { Component } from 'react';
import { View } from 'react-native';

import { TitleAtom, ProfilePictureAtom } from '~/srcs/components/atoms'
import Styles from '~/srcs/styles'


class TitleMolecule extends Component {
	render () {
		return (
		<View style={Styles.container}>
			<ProfilePictureAtom />
			<TitleAtom />
		</View>
		);
	}
}

export default TitleMolecule;