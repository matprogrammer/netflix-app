import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors, Layout } from '../constants/Theme';
import { RootStackNavigatorAuth } from '../navigator/RootStackNavigator';

interface Props
  extends StackScreenProps<RootStackNavigatorAuth, 'SignInScreen'> {}

const SignInScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordText, setShowPassword] = useState(true);

  const signIn = () => {
    if (email !== '' && password !== '') {
      navigation.push('InitialScreen');
    }
    return false;
  };

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
            placeholder="Correo"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <View>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
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
              <Text>
                <Icon
                  name={showPasswordText ? 'visibility-off' : 'visibility'}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              signIn();
            }}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <Text style={styles.buttonText}>No tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}
            >
              <Text style={styles.signUpText}>Crear cuenta</Text>
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

export default SignInScreen;
