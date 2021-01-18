import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';

const SignIn = () => {
  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <ScrollView>
      <View style={style.sectionOne}>
        <Text style={style.label}>Sign In</Text>
        <Button title="Click me!" onPress={createThreeButtonAlert} />
      </View>
    </ScrollView>
  );
};

export default SignIn;

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
