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
import TxtTitle from "../../compoments/txtTitle";
import CustomInput from "../../compoments/customInput";
import CustomButton from "../../compoments/customButton";
const Loginscreen = () => {
  return(
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{fontSize:70, fontWeight:"800",}}>Logo</Text>
        <TxtTitle title={'Hello ht xin chao ht'}/>
      </View>
      <View style={styles.inforContainer}>
        <CustomInput label={'Email'} placeholder={'Input your email'}/>
        <CustomInput label={'Password'} placeholder={'Input your password'}/>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton label={'Login'} colorCode={'#F8B55D'} onPress={(val: string) => login(val)}/>
          <Text>or, create new account ?</Text>
        <CustomButton label={'Sign Up'} colorCode={'#F8B55D'} onPress={(val: string) => signup(val)}/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
  },
  container:{
    marginVertical:20,
    alignItems:"center",
  },
  inforContainer:{},
  btnContainer:{
    marginHorizontal:35,
  },
});

export default Loginscreen;
