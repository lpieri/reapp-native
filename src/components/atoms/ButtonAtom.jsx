import React, { Component } from 'react';
import { Pressable, Text, Switch } from 'react-native';

import fonts from './../../theme/fonts';

class ButtonAtom extends Component {

	onPress ()  {
		console.log("yeah")
	}

	render () {
		return (
		<Pressable onPress={this.onPress} style={{backgroundColor: 'blue', padding: 15, borderRadius:50}}>
			<Text style={{...fonts.styles.title, textAlign: 'center'}}>YEAH</Text>
		</Pressable>
		);
	}
}

export default ButtonAtom;