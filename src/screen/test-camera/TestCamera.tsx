import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Camera } from '../../component';

class TestCamera extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <Camera />
        </SafeAreaView>
      </>
    );
  }
};

export default TestCamera;
