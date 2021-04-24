import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  onChange,
  form,
} from 'react-native';
import TxtTitle from '../../compoments/txtTitle';
import CustomInput from '../../compoments/customInput';
import CustomButton from '../../compoments/customButton';
const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.root}>
          <View style={styles.container}>
            <Text style={{fontSize: 70, fontWeight: '800'}}>Logo</Text>
            <TxtTitle title={' join hihi Hello ht xin chao ht'} />
          </View>
          <View style={styles.inforContainer}>
            <CustomInput label={'Email'} placeholder={'Input your email'} action={'Login'} />
            <CustomInput
              label={'Password'}
              placeholder={'Input your password'}
              action={'Login'}
            />
          </View>
          <View style={styles.btnContainer}>
            <CustomButton
              label={'Login'}
              colorCode={'#F8B55D'}
              onPress={(val: string) => login(val)}
            />

            <CustomButton
              label={'Sign Up'}
              colorCode={'#E7421B'}
              onPress={(val: string) => signup(val)}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  inforContainer: {},
  btnContainer: {
    marginVertical: 30,
  },
});

export default SignUpScreen;
