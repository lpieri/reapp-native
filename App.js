import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { TitleAtom, ProfilePictureAtom } from 'srcs/components/atoms'

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
			  <TitleAtom />
			  <ProfilePictureAtom />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
