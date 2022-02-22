import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";

import signUpImg from '../../../assets/signUpImg.png'

import { styles } from './styles';

export default function SignIn() {
  const [mailText, onChangeMailText] = React.useState("E-mail");
  const [passwordText, onChangepasswordText] = React.useState("Senha");

  return (
    <>
      <StatusBar style="light" translucent />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={signUpImg} style={styles.signUpImg} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeMailText}
              value={mailText}
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangepasswordText}
              value={passwordText}
            />

            <TouchableOpacity
              style={styles.buttonForm}
              onPress={() => Alert.alert('Você poderá realizar login em breve.')}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.recoveryPassword}>Esqueci minha senha</Text>
            <Text style={styles.recoveryPassword}> ou</Text>


            <TouchableOpacity
              style={styles.buttonFormSignUp}
              onPress={() => Alert.alert('Você poderá cadastar-se em breve.')}>
              <Text style={styles.buttonText}>Cadastra-se</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
