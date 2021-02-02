import React from 'react';
import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';

import {COLORS, FONTS, SIZES, icons, data} from '../../constants';

const HomeMyBooks = () => {
  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
        }}
        onPress={() =>
          navigation.navigate('BookDetail', {
            book: item,
          })
        }>
        {/* Book Cover */}
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{
            width: 180,
            height: 250,
            borderRadius: 20,
          }}
        />

        {/* Book Info */}
        <View
          style={{
            marginTop: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={icons.clock_icon}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
            {item.lastRead}
          </Text>

          <Image
            source={icons.page_icon}
            style={{
              marginLeft: SIZES.radius,
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
            {item.completion}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>

        <TouchableOpacity onPress={() => console.log('See More')}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray,
              alignSelf: 'flex-start',
              textDecorationLine: 'underline',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Books */}
      <View style={{flex: 1, marginTop: SIZES.padding}}>
        <FlatList
          data={data.myBooksData}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeMyBooks;
