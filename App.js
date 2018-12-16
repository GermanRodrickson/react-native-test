import React, {Component} from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: palevioletred;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <StyledText>Open up App.js to start working on your app!</StyledText>
      </Wrapper>
    );
  }
}

