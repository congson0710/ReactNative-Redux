import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums');
  }
  render() {
    return (
      <View>
        <Text>Album list!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
