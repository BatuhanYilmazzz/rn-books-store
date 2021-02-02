import React from 'react';
import {Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {data, COLORS, FONTS, SIZES} from '../../constants';
import HomeCategoryData from '../HomeCategoryData';

const HomeCategoryHeader = ({selectedCategory, changeCategory}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1, marginRight: SIZES.padding}}
        onPress={() => changeCategory(item.id)}>
        {selectedCategory == item.id && (
          <Text style={{...FONTS.h2, color: COLORS.white}}>
            {item.categoryName}
          </Text>
        )}
        {selectedCategory != item.id && (
          <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
            {item.categoryName}
          </Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, paddingLeft: SIZES.padding}}>
      <FlatList
        data={data.categoriesData}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        ListFooterComponent={<HomeCategoryData />}
      />
    </View>
  );
};

export default HomeCategoryHeader;
