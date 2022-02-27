import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000000',
  },

  header: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  container: {
    flex: 1,
  },

  content: {
    padding: 20,
  },

  infoText: {
    fontSize: 48,
    color: '#fff',
  },

  grid: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  friendsImg: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonIcon: {
    backgroundColor: '#00C9FF',
    height: 80,
    width: 80,
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImg: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',

  },

  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
