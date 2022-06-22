import React, { Component } from 'react';
import { View } from 'react-native';

import { TitleAtom, ProfilePictureAtom } from './../atoms'
import styles from './../../styles'


class ProfileTitleMolecule extends Component {
	render () {
		return (
		<View style={styles.container}>
			<ProfilePictureAtom source={this.props.profilePictureSource}/>
			<TitleAtom />
		</View>
		);
	}
}

export default ProfileTitleMolecule;