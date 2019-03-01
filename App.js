/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { Button, ThemeProvider, ListItem } from 'react-native-elements';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const theme = {
  Button: {
    buttonStyle: {
      backgroundColor: 'red'
    },
    titleStyle: {
      color: 'white',
    },
  },
};

class CustomList extends React.Component {
  render() {
    console.log(this.props.item);
    //const { item } = this.Props;
    return (
      <ListItem
        leftAvatar={{ source: { uri: this.props.item.avatar_url } }}
        {...this.props}
      />
    );
  }
}
const MyApp = () => {
  keyExtractor = (item, index) => index;
  renderItem = ({ item }) => (
    <CustomList
      title={item.name}
      subtitle={item.subtitle}
      item={item}
      leftAvatar={{ source: { uri: item.avatar_url } }}
    />
  )
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <Button title="Hey!" />
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    </ThemeProvider>
  );
};

export default class App extends Component<Props> {
  render() {
    return (
      <MyApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
