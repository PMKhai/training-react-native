import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

interface DetailProps {
  navigation: { navigate: (screenName: string) => void }
}

const Detail = (props: DetailProps) => {
  return (
    <ScrollView>
      <View style={style.sectionOne}>
        <Text style={style.label}>Detail</Text>
        <Button title="Home" onPress={() => props.navigation.navigate('Home')} />
      </View>
    </ScrollView>
  );
};

export default Detail;

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
