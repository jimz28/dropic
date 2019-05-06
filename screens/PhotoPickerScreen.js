import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';

export default class PhotoPickerScreen extends Component {
  static navigationOptions = {
    title: 'Camera Roll',
  };

  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: [],
    };

    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });

    console.log(current);
    console.log(this.state.selected);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images has been selected
          </Text>
        </View>
        <CameraRollPicker
          groupTypes='SavedPhotos'
          maximum={3}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={4}
          imageMargin={1}
          callback={this.getSelectedImages} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 0,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
});
