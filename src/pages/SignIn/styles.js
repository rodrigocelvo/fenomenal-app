import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000",
  },

  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  signUpImg: {
    backgroundColor: '#F0F0F5',
    width: '100%',
    height: 350,
  },

  input: {
    width: '100%',
    height: 60,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 20,
    color: '#969CB2',
    fontSize: 16,
  },

  buttonForm: {
    padding: 20,
    backgroundColor: '#00C9FF',
    borderRadius: 5,
    width: '100%'
  },

  buttonFormSignUp: {
    padding: 20,
    backgroundColor: '#FF872C',
    borderRadius: 5,
    width: '100%'
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  }, 

  recoveryPassword: {
    marginVertical: 20,
    color: '#696969'
  }
});
