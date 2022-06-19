import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
  CheckBox
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { ProfileTitleMolecule } from '~/srcs/components/molecules'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
			  <ProfileTitleMolecule profilePictureSource={require("~/srcs/assets/pp.png")}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
