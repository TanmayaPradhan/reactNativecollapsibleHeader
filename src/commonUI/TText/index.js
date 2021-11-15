import React from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import PropTypes from 'prop-types';

const TText = ({
  children,
  e_small,
  small,
  medium,
  large,
  fontSize,
  style,
  fontFamily,
  ...props
}) => {
  const getfontFamily = (font_family) => {
    return {
      fontFamily: font_family,
    };
  };

  const getFontSize = (size) => {
    let font_size;
    switch (size) {
      case 'e_small':
        font_size = 10;
        break;
      case 'small':
        font_size = 12;
        break;
      case 'medium':
        font_size = 14;
        break;
      case 'large':
        font_size = 16;
        break;
      default:
        font_size = size;
        break;
    }
    return {
      fontSize: font_size,
    };
  };
  return (
    <Animated.Text
      style={[
        styles.font,
        e_small && getFontSize('e_small'),
        small && getFontSize('small'),
        medium && getFontSize('medium'),
        large && getFontSize('large'),
        fontSize && getFontSize(fontSize),
        style && style,
        fontFamily && getfontFamily(fontFamily),
      ]}
      {...props}>
      {children}
    </Animated.Text>
  );
};
TText.propTypes = {
  fontFamily: PropTypes.oneOf([
    'Festive-Regular',
    'Oswald-Bold',
    'Oswald-ExtraLight',
    'Oswald-Light',
    'Oswald-Medium',
    'Oswald-Regular',
    'Oswald-SemiBold',
    'Oswald-VariableFont_wght',
    'RobotoCondensed-Bold',
    'RobotoCondensed-Italic',
    'RobotoCondensed-Light',
    'RobotoCondensed-Regular',
  ]),
};
const styles = StyleSheet.create({
  font: {
    color: '#254131',
    fontFamily: 'RobotoCondensed-Regular',
  },
});

export default TText;
