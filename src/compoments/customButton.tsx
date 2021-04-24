import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type CustomButtonProps = {
  label: string;
  colorCode: string;
  onPress: (val: string) => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  colorCode,
  onPress,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const isSignInBtn = label === 'Sign Up';
  return (
    <View>
      {isSignInBtn ? (
        <Text style={styles.txtUnder}>or, create new account ?</Text>
      ) : null}
      <TouchableOpacity
        onPress={() => onPress(label)}
        style={{
          height: 60,
          borderRadius: 10,
          marginVertical: 10,
          backgroundColor: colorCode,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 35,
        }}>
        <Text style={styles.customButtonTxt}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginHorizontal: 30,
  },
  // customInput: {
  //   //color: isDarkMode ? Colors.white : Colors.black,
  //   color: 'orange',
  //   borderWidth: 0.5,
  //   borderColor: '#D0D0D0',
  //   padding: 10,
  //   borderRadius: 5,
  //   marginBottom:10,
  // },
  customButtonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtUnder: {
    color: 'gray',
    alignSelf: 'center',
    top:6,
  },
});
export default CustomButton;
