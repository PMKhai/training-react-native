import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

interface HomeProps {
  navigation: { navigate: (screenName: string) => void }
}

const Home = (props: HomeProps) => {
  return (
    <ScrollView>
      <View style={style.sectionOne}>
        <Text style={style.label}>Home</Text>
        <Button title="Detail" onPress={() => props.navigation.navigate('Detail')} />
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  sectionOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
  label: {
    fontSize: 40
  }
});
