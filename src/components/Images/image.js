import React from 'react';
import {Image} from 'react-native';
import styles from './image.styles';
const ImageBox = props => {
  return (
    <Image
      source={{
        uri: props.linkk,
      }}
      style={styles.cards}
    />
  );
};

export default ImageBox;
