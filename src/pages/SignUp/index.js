import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";

export default function SignUp() {
  return (
    <>
      <StatusBar style="light" translucent />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000",
  },

  container: {
    flex: 1,
    backgroundColor: '#F0F0F5'
  }

});