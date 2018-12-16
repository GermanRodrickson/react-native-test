import React, {Component} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyledText>Open up App.js to start working on your app!</StyledText>
      </View>
    );
  }
}

const StyledText = styled.Text`
  color: palevioletred;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
