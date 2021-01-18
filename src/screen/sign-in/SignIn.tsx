import React, { useState } from 'react';
import { Alert, Text, View, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import { signInService } from '../../services/authen';

interface SignInProps {
  navigation: { navigate: (screenName: string) => void }
}

const SignIn = (props: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPress = async () => {
    const { data } = await signInService(email, password);
    if (data)
      return props.navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <View style={style.wrapper}>
        <Text style={style.label}>Sign In</Text>
        <TextInput style={style.input} textContentType="emailAddress" placeholder="email" onChangeText={text => setEmail(text)} />
        <TextInput style={style.input} secureTextEntry textContentType="password" placeholder="password" onChangeText={text => setPassword(text)} />
        <Button title="Sign in" onPress={handleSignInPress} />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
  label: {
    fontSize: 40
  },
  input: {
    height: 40,
    width: '50%',
    minWidth: 250,
    maxWidth: 400,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  }
});
