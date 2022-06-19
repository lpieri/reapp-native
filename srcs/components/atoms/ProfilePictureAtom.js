import React, { Component } from 'react';
import { Image } from 'react-native';

import Metrics from 'srcs/theme/metrics';

class ProfilePictureAtom extends Component {
	render () {
		return <Image
		style={{
			width: Metrics.screenWidth / 100,
			height: 50,
		}}
		source={require('srcs/assets/pp.png')}
		/>
	}
}

export default ProfilePictureAtom;