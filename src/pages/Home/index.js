import React from 'react';
import {
  StatusBar, SafeAreaView, ScrollView, Text, View, Image, ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import Logo from '../../../assets/logo.svg';
import BackgroundImg from '../../../assets/background-img.jpeg';

import FriendsImg from '../../../assets/friends-img.svg';

import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>

          <View style={styles.container}>

            <ImageBackground
              source={BackgroundImg}
              style={styles.backgroundImg}
              blurRadius={30}
            >

              <LinearGradient
                colors={['#00C9FF', '#CC00FF']}
                start={[0.1, 0.1]}
                end={[1, 1]}
                location={[0.25, 0.4, 1]}
                style={styles.linearGradient}
              >

                <View style={styles.content}>

                  <View style={styles.header}>
                    <Logo width={64} height={64} fill="#fff" />
                    <Feather name="menu" size={50} color="#000" />
                  </View>

                  <Text style={styles.infoText}>Uma pequena ajuda salva vidas.</Text>

                  <View style={styles.grid}>
                    <FriendsImg width={300} height={300} />
                  </View>

                  <Text style={styles.infoText}>Doe e torne a vida de um pet mais feliz.</Text>

                  <View style={styles.button}>
                    <RectButton style={styles.buttonIcon} onPress={() => navigation.navigate('SignIn')}>
                      <Feather name="arrow-right" size={24} color="#000" />
                    </RectButton>
                  </View>

                </View>
              </LinearGradient>
            </ImageBackground>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}
