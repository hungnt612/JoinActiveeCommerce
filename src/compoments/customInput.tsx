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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type CustomInputProps = {
  label: string;
  placeholder: string;
  action: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  action,
}) => {
  const isEmail = label === 'Email';
  const isPassword = label === 'Password';
  return (
    <View style={styles.container}>
      <Text style={styles.customInputTitle}>{label}</Text>
      <TextInput
        style={styles.customInput}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
      {isEmail ? (
        <Text style={styles.txtUnder}>or, {action} with phone number</Text>
      ) : null}
      {isPassword ? (
        <Text style={styles.txtUnder}>Forgot Password ?</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginHorizontal: 35,
  },
  customInput: {
    //color: isDarkMode ? Colors.white : Colors.black,
    color: '#E7421B',
    borderWidth: 0.5,
    borderColor: '#D0D0D0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  customInputTitle: {
    color: '#E7421B',
    fontWeight: 'bold',
  },
  txtUnder: {
    textAlign: 'right',
    color: '#E7421B',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
});
export default CustomInput;
