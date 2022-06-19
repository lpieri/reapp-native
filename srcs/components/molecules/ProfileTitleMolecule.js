import React, { Component } from 'react';
import { View } from 'react-native';

import { TitleAtom, ProfilePictureAtom } from '~/srcs/components/atoms'
import Styles from '~/srcs/styles'


class ProfileTitleMolecule extends Component {
	render () {
		return (
		<View style={Styles.container}>
			<ProfilePictureAtom source={this.props.profilePictureSource}/>
			<TitleAtom />
		</View>
		);
	}
}

export default ProfileTitleMolecule;