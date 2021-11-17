import React from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {
  styles,
  textViewHeight,
  windowWidth,
  // headerBottomRadius,
} from './styles';
import Svg, {Path} from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

const svg_margin_left = 5;
const svg_margin_top = 5;
const svg_margin_bottom = 5;
const svg_margin_right = 5;

/**
 * @description SUPPOSE X-POSITION IS SOMETHING AND AFTER TRANSITION WE ARE SETTING THE FINAL RIGHT VALUE TO 0, THAT MEANS NO CHANGE IN X-POSITION.
 * ANY VALUE IS SET TO TRANSITION RIGHT VALUE, THAT MEANS AFTER TRANSITION X POSITION WILL SHIFT THAT POSITION FROM CURRENT POSTION
 * SUPPOSE CURRENT POSITION IS AT X= 60, WE ARE SETTING TRANSITION VALUE TO 70, I.E AFTER TRANSITION IT WILL SHIFT TO MARGINLEFT 70 CURRENT CURRENT POSITION.
 *
 * SIMILARLY FOR Y-POSITION. IF WE ARE SETTING 0 TO THE FINAL TRANSITION VALUE MEANS NO CHANGE WITH THE POSITION
 */
const AnimatedHeader = ({
  headerHeight = {large: 250, collapse: 120},
  circleHeight = {large: 150, collapse: 80},
  fontSize = {large: 30, collapse: 20},
  welcomeText = 'Welcome',
  nameText = 'React Native',
  scrollY,
  inputRange,
  img,
  onLogoPress,
  isAnimatable,
  headerLabelFontFamily,
  descLabelFontFamily,
  headerStyle = {backgroundColor: '#024aad'},
  borderSvgColor,
  headerBottomRadius,
}) => {
  const [headerLogo_x_position, setHeaderLogo_x_position] = React.useState(0);
  const headerLogo_y_position =
    headerHeight?.collapse - textViewHeight - circleHeight?.collapse;
  const [welcomeText_x_position, setwelcomeText_x_position] = React.useState(0);
  const [welcomeText_y_position, setWelcomeText_y_position] = React.useState(0);
  const [nameText_x_position, setnameText_x_position] = React.useState(0);
  const nameText_y_position = headerHeight?.collapse - textViewHeight;
  const animatedPathLength = React.useRef(new Animated.Value(0)).current;
  const [pathLength, setPathLength] = React.useState(0);
  const pathRef = React.useRef(null);
  React.useEffect(() => {
    animatedPathLength.setValue(pathLength);
    func_startSvgAnimation();
  }, [pathLength]);
  const func_startSvgAnimation = () => {
    Animated.timing(animatedPathLength, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };
  /**
   * @description : Header Height Animation
   */
  const headerHeightAnim = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      headerHeight?.large,
      headerHeight?.large,
      headerHeight?.large - 50,
      headerHeight?.collapse,
    ],
    extrapolate: 'clamp',
  });

  /**
   * @description : Header Logo Animation
   */
  const headerLogoAnim = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      circleHeight?.large,
      circleHeight?.large,
      circleHeight?.large - 10,
      circleHeight?.collapse,
    ],
    extrapolate: 'clamp',
  });
  /**
   * @description: Header Logo radius animation
   */
  const headerLogoRadiusAnim = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      circleHeight?.large / 2,
      circleHeight?.large / 2,
      (circleHeight?.large - 10) / 2,
      circleHeight?.collapse / 2,
    ],
    extrapolate: 'clamp',
  });
  /**
   * @description: Header Logo position transition in X-axis
   */
  const headerLogo_x_transition_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      0,
      headerLogo_x_position,
      headerLogo_x_position,
      headerLogo_x_position,
    ],
    extrapolate: 'clamp',
  });
  /**
   * @description: Header Logo position transition in Y-axis
   */
  const headerLogo_y_transition_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      0,
      headerLogo_y_position,
      -headerLogo_y_position + 100,
      -headerLogo_y_position -
        circleHeight?.collapse / 2 +
        headerHeight?.collapse / 2, //TO CENTER ALLIGN THE TEXT WE NEED TO SUBTRACT THE FONT SIZE
    ],
    extrapolateRight: 'clamp',
  });
  /**
   * @description : Header Logo UI
   */
  const func_renderCenterLogo = () => {
    return (
      <AnimatedButton
        onPress={onLogoPress}
        onLayout={event => {
          const {x, y, height, width} = event?.nativeEvent?.layout;
          headerLogo_x_position === 0 && setHeaderLogo_x_position(x);
        }}
        style={[
          styles.centerLogoWrapper,
          {
            height: isAnimatable ? headerLogoAnim : circleHeight?.large,
            width: isAnimatable ? headerLogoAnim : circleHeight?.large,
            borderRadius: isAnimatable
              ? headerLogoRadiusAnim
              : circleHeight?.large / 2,
          },
          isAnimatable && {
            transform: [
              {
                translateX: headerLogo_x_transition_animation,
              },
              {
                translateY: headerLogo_y_transition_animation,
              },
            ],
          },
        ]}>
        <Animated.Image
          resizeMode="contain"
          source={img}
          style={styles.centerLogo}
        />
      </AnimatedButton>
    );
  };

  /**
   * @description: Welcome text fontsize and position transition in X-axis
   */
  const welcomeText_fontsize_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      fontSize?.large,
      fontSize?.large,
      fontSize?.large,
      fontSize?.collapse,
    ],
    extrapolateRight: 'clamp',
  });
  const welcomeText_x_transition_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [0, welcomeText_x_position, welcomeText_x_position, 0],
    extrapolateRight: 'clamp',
  });
  const welcomeText_y_transition_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [0, 0, 0, 0],
    extrapolateRight: 'clamp',
  });
  const func_renderWelcomeText = () => {
    return (
      <Animated.View
        onLayout={event => {
          const {x, y, height, width} = event?.nativeEvent?.layout;
          welcomeText_x_position === 0 && setwelcomeText_x_position(x);
        }}
        style={[
          styles.welcomeTextWrapper,
          isAnimatable && {
            transform: [
              {translateX: welcomeText_x_transition_animation},
              {translateY: welcomeText_y_transition_animation},
            ],
          },
        ]}>
        <Animated.Text
          style={[
            styles.text,
            {
              fontSize: welcomeText_fontsize_animation,
              fontFamily: headerLabelFontFamily ?? 'Arial',
            },
          ]}>
          {welcomeText}
        </Animated.Text>
      </Animated.View>
    );
  };

  const nameText_x_transition_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      0,
      nameText_x_position,
      nameText_x_position,
      -nameText_x_position + 20,
    ],
    extrapolateRight: 'clamp',
  });
  const nameText_y_transition_animation = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [
      0,
      -nameText_y_position,
      -nameText_y_position,
      -nameText_y_position + headerHeight?.collapse / 2 - textViewHeight / 2,
    ],
    extrapolateRight: 'clamp',
  });
  const func_renderNameText = () => {
    return (
      <Animated.View
        onLayout={event => {
          // NOTE: This calculation required to set the left boundary of this view.
          // Otherwise it will got out side of the screen

          const {x, y, height, width} = event?.nativeEvent?.layout;
          nameText_x_position === 0 && setnameText_x_position(x);
        }}
        style={[
          styles.nameTextWrapper,
          isAnimatable && {
            transform: [
              {translateX: nameText_x_transition_animation},
              {translateY: nameText_y_transition_animation},
            ],
          },
        ]}>
        <Animated.Text
          style={[
            styles.textName,
            {
              fontSize: welcomeText_fontsize_animation,
              fontFamily: descLabelFontFamily ?? 'Arial',
            },
          ]}>
          {nameText}
        </Animated.Text>
      </Animated.View>
    );
  };

  const x1 = svg_margin_left;
  const y1 = svg_margin_top;
  const x2 = svg_margin_left;
  const y2 = headerHeight?.large;
  const x3 = windowWidth;
  const y3 = headerHeight?.large;
  const x4 = windowWidth;
  const y4 = svg_margin_top;
  const y2_collapse = headerHeight?.collapse;

  let largePath = `M${x1},${y1} ${x2},${y2 - headerBottomRadius - 10} C${x1} ${
    y2 - headerBottomRadius
  } ${x1} ${y2 - 5} ${x2 + headerBottomRadius} ${y2 - 5} L${
    x3 - headerBottomRadius - 10
  } ${y2 - 5} C${x3 - headerBottomRadius} ${y2 - 5} ${x3 - 10} ${y2 - 5} ${
    x3 - 5
  } ${y2 - headerBottomRadius} L${x4 - 5} ${y4} Z`;

  const valueForHideX1 = -100;
  const valueForHideY1 = -100;
  const valueForHideY2 = y2 + 100;
  let hidePath = `M${valueForHideX1},${valueForHideY1} ${valueForHideX1},${valueForHideY2} C${valueForHideX1} ${valueForHideY2} ${valueForHideX1} ${valueForHideY2} ${valueForHideX1} ${valueForHideY2} L${
    x3 + 100
  } ${valueForHideY2} C${x3 - headerBottomRadius} ${valueForHideY2} ${
    x3 + 100
  } ${valueForHideY2} ${x3 + 100} ${valueForHideY2} L${
    x4 + 100
  } ${valueForHideY1} Z`;

  let collapsePath = `M${x1},${y1} ${x2},${
    y2_collapse - headerBottomRadius - 10
  } C${x1} ${y2_collapse - headerBottomRadius} ${x1} ${y2_collapse - 5} ${
    x2 + headerBottomRadius
  } ${y2_collapse - 5} L${x3 - headerBottomRadius - 10} ${y2_collapse - 5} C${
    x3 - headerBottomRadius
  } ${y2_collapse - 5} ${x3 - 10} ${y2_collapse - 5} ${x3 - 5} ${
    y2_collapse - headerBottomRadius
  } L${x4 - 5} ${y4} Z`;

  const getAnimatedPath = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [largePath, hidePath, hidePath, collapsePath],
    extrapolate: 'clamp',
  });
  const func_renderSvg = () => {
    return (
      <View style={styles.svgWrapper}>
        <AnimatedSvg style={styles.svgContainer}>
          <AnimatedPath
            ref={pathRef}
            onLayout={() => setPathLength(pathRef?.current?.getTotalLength())}
            strokeDasharray={pathLength}
            strokeDashoffset={animatedPathLength}
            d={getAnimatedPath}
            stroke={borderSvgColor}
            strokeWidth={4}
            strokeLinecap="round"
          />
        </AnimatedSvg>
      </View>
    );
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: isAnimatable ? headerHeightAnim : headerHeight?.large,
          borderBottomLeftRadius: headerBottomRadius,
          borderBottomRightRadius: headerBottomRadius,
        },
        headerStyle?.backgroundColor && {
          backgroundColor: headerStyle?.backgroundColor,
        },
        ,
      ]}>
      {func_renderSvg()}
      {func_renderWelcomeText()}
      {func_renderCenterLogo()}
      {func_renderNameText()}
    </Animated.View>
  );
};

export default AnimatedHeader;
