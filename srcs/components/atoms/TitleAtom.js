
import React, { Component } from 'react';
import { Text } from 'react-native';

import fonts from '../../theme/fonts'

class TitleAtom extends Component {
	render () {
		return <Text style={{ fontSize: fonts.size.font20 }}>Re-App Native</Text>;
	}
}

export default TitleAtom;