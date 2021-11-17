import React from 'react';
import {SafeAreaView, View, FlatList, Animated} from 'react-native';
import {styles, cardHeight, cardMargin} from './styles';
import iconLogo from '../commonUI/imgs/icon_logo.png';
import AnimatedHeader from '../commonUI/animatedHeader';

const AnimatedHeaderScreen = ({
  headerLabel,
  headerLabelFontFamily,
  renderItem,
  listData,
  descLabel,
  descLabelFontFamily,
  icon = iconLogo,
  headerHeight = {large: 250, collapse: 120},
  circleHeight = {large: 150, collapse: 80},
  fontSize = {large: 30, collapse: 20},
  headerStyle = {backgroundColor: '#024aad'},
  onIconPress,
  borderSvgColor = '#D9FAFB',
  headerBottomRadius = 50,
}) => {
  const [inputRange, setInputRange] = React.useState([]);
  const [isAnimatable, setIsAnimatable] = React.useState(false);
  const data = listData ?? Array.from({length: 10});
  const scrollY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    func_getInterpolationInputRange();
  }, []);

  const func_getInterpolationInputRange = () => {
    let animationHeight = cardHeight * 2;
    let range = Array.from({length: 3}).map((item) => {
      animationHeight = animationHeight / 2;
      return animationHeight;
    });
    range.push(0);
    let input_range = range.reverse();
    setInputRange(input_range);
  };

  const get_renderItem = ({item, index}) =>
    renderItem ? (
      renderItem(item, index)
    ) : (
      <View style={styles.renderItemContainer}>
        <View style={[styles.row, styles.shadow]} />
      </View>
    );

  const func_onContentSizeChange = (width, height) => {
    let animatable = height > (cardHeight + cardMargin * 2) * 5;
    setIsAnimatable(animatable);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {inputRange?.length > 0 && (
          <AnimatedHeader
            onLogoPress={onIconPress}
            headerHeight={headerHeight}
            circleHeight={circleHeight}
            fontSize={fontSize}
            headerLabelFontFamily={headerLabelFontFamily}
            descLabelFontFamily={descLabelFontFamily}
            scrollY={scrollY}
            inputRange={inputRange}
            img={icon}
            welcomeText={headerLabel}
            nameText={descLabel}
            isAnimatable={isAnimatable}
            headerStyle={headerStyle}
            borderSvgColor={borderSvgColor}
            headerBottomRadius={headerBottomRadius}
          />
        )}
        <FlatList
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrollY}}},
          ])}
          data={data}
          renderItem={get_renderItem}
          keyExtractor={(item, index) => `${index} key`}
          onContentSizeChange={func_onContentSizeChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default AnimatedHeaderScreen;
