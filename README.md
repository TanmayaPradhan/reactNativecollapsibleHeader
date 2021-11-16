# React Native animated-collapsible-header
-------------------------------------------

Installation
-------------------------------------------
npm i @tanmaya_pradhan/animated-collapsible-header

Usage
-------------------------------------------
To use the collapsible header you must import AnimatedHeaderScreen

import AnimatedHeaderScreen from '@tanmaya_pradhan/animated-collapsible-header';

Declarative Usage
-------------------------------------------
```ruby
<AnimatedHeaderScreen headerLabel='Welcome' descLabel='React Native' headerStyle={{backgroundColor: '#024aad'}} />
```

![collapsible-header](https://user-images.githubusercontent.com/40633712/141827999-2e3ad009-2f3d-4218-8744-75347ef87993.gif)




Properties
-------------------------------------------

| Prop                  | Description                                                      | Default                                    |
| --------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| headerLabel           | Name the Header title                                            | ‘Welcome’                                  |
| headerLabelFontFamily | Font family of the Header title                                  | Default                                    |
| renderItem            | This is the list view which will be shown in FlatList renderItem | default list                               |
| listData              | This is the list data which will be shown in FlatList data       | Default                                    |
| descLabel             | Name the Description title                                       | 'React Native'                             |
| descLabelFontFamily   | Font family of the Description title                             | Default                                    |
| icon                  | Center icon                                                      | Default                                    |
| headerHeight          | Height of the Header after collapsing and expanding              | headerHeight = {large: 250, collapse: 120} |
| circleHeight          | Center icon height after collapsing and expanding                | circleHeight = {large: 150, collapse: 80}  |
| fontSize              | FontSize after collapsing and expanding                          | fontSize = {large: 30, collapse: 20}       |
| headerStyle           | Header background colour change                                  | headerStyle={backgroundColor: '#024aad'}   |
| onIconPress           | Center icon click                                                | Default                                    |



