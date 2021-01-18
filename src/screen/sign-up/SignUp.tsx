import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';

const SignUp = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
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
        <Text style={style.label}>Sign Up</Text>
        <Button title="Click me!" onPress={createTwoButtonAlert} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
