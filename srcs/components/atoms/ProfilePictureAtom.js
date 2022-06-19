import React, { Component } from 'react';
import { Image } from 'react-native';

import Metrics from '~/srcs/theme/metrics';

class ProfilePictureAtom extends Component {
	render () {
		return <Image
			 style={{
				 borderRadius: 50,
				 width: Metrics.screenWidth / 5,
				 height: Metrics.screenWidth / 5,
				}}
			 source={this.props.source}
			/>;
	}
}

export default ProfilePictureAtom;