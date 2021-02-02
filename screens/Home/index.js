import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {HomeButtonSection, HomeHeader, HomeMyBooks} from '../../components';
import HomeCategoryData from '../../components/HomeCategoryData';
import HomeCategoryHeader from '../../components/HomeCategoryHeader';
import {data, SIZES} from '../../constants';
import Styles from './styles';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <HomeHeader profile={data.profileData} />
        <HomeButtonSection />
      </View>
      <ScrollView>
        <View>
          <HomeMyBooks />
        </View>
        <View style={{marginTop: SIZES.padding}}>
          <View>
            <HomeCategoryHeader
              selectedCategory={selectedCategory}
              changeCategory={(id) => setSelectedCategory(id)}
            />
          </View>
          <View>
            <HomeCategoryData selectedCategory={selectedCategory} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
