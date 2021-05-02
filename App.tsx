import {StackNavigator} from 'react-navigation'
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Loginsceen, Registerscreen} from "./src/defineName";
import RegisterScreen from "./src/screen/registerScreen";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1, backgroundStyle}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RegisterScreen></RegisterScreen>
    </SafeAreaView>
  );
};

// const App = StackNavigator({
//     Loginsceen:{
//       screen: Loginsceen,
//       navigationOptions:{
//         headerTitle: 'Loginsceen'
//       },
//     }
// });


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
