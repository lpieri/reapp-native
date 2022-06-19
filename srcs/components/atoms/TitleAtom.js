import React, { Component } from 'react';
import { Text } from 'react-native';

import fonts from '~/srcs/theme/fonts';

class TitleAtom extends Component {
	render () {
		return <Text style={{
				...fonts.styles.title,
				textAlign: 'center',
				color: 'gray'
			}}>
			Nomads Swipe
			</Text>;
	}
}

export default TitleAtom;