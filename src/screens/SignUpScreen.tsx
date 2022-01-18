import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Colors, Layout } from '../constants/Theme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackNavigatorAuth } from '../navigator/RootStackNavigator';
import { Icon } from 'react-native-elements';

interface Props
  extends StackScreenProps<RootStackNavigatorAuth, 'SignUpScreen'> {}

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPasswordText, setShowPassword] = useState(true);
  const [showPasswordConfirmText, setShowPasswordConfirm] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.card}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImage}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={showPasswordText}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => {
                setShowPassword(!showPasswordText);
              }}
            >
              <Icon name={showPasswordText ? 'visibility-off' : 'visibility'} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={showPasswordConfirmText}
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => {
                setShowPasswordConfirm(!showPasswordConfirmText);
              }}
            >
              <Icon name={showPasswordText ? 'visibility-off' : 'visibility'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.buttonText}>Ya tengo una cuenta!</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
            >
              <Text style={styles.signUpText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Layout.width,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Layout.width - 40,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginHorizontal: 20,
    marginVertical: Layout.height / 20,
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoImage: {
    width: 60,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 80,
  },
  form: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: Layout.width / 1.4,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  button: {
    backgroundColor: Colors.primaryRed,
    borderColor: Colors.primaryRed,
    height: 40,
    width: Layout.width / 1.4,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginVertical: 30,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  signUpText: {
    color: Colors.primaryRed,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  showPassword: {
    position: 'absolute',
    right: 20,
    top: 25,
    color: 'black',
  },
});

export default SignUpScreen;
