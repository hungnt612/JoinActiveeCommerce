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

const TxtTitle: React.FC<{
  title: string;
}> = ({title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.txtContainer}>
      <Text
        style={styles.txtTitle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
  },
  txtContainer:{
    alignSelf:'center',
    marginVertical:10,
  },
  txtTitle:{
    //color: isDarkMode ? Colors.white : Colors.black,
    color:'orange',
  },
});
export default TxtTitle;
