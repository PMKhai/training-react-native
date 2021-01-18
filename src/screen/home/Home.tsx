import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

interface HomeProps {
  navigation: { navigate: (screenName: string) => void }
}

const Home = (props: HomeProps) => {
  return (
    <ScrollView>
      <View style={style.wrapper}>
        <Text style={style.label}>Home</Text>
        <Text>ID: 11111</Text>
        <Text>First Name: Nguyễn Văn Tí</Text>
        <Button title="Log out" onPress={() => props.navigation.navigate('SignIn')} />
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
  label: {
    fontSize: 40
  }
});
