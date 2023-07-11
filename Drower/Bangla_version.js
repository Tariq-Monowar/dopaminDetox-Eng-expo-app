import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Font from 'expo-font';
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  RewardedAd,
  MaxAdContentRating,
} from "react-native-google-mobile-ads";

import bookDataList from '../Component/db/BookDataEnglish'

const Home = () => {
  const navigation = useNavigation()
  const [bookData, setBookData] = useState(bookDataList)

  const [fontLoaded, setFontLoaded] = useState(false);

  const adUnitId = "ca-app-pub-2105686220682378/1754428899";
  const rewardedAd = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
    maxAdContentRating: MaxAdContentRating.G,
    tagForChildDirectedTreatment: true, // Set child-directed targeting
  });


  const handleTouchableOpacityPress = async (id,title,selector, desc) => {
    try {
      await rewardedAd.load();
      await rewardedAd.show();
      navigation.navigate("DetalseData", {
        id,title,selector, desc
      });
    } catch (error) {
      console.log("Rewarded ad error:", error);
      navigation.navigate("DetalseData", {
        id,title,selector, desc
      });
    }
  };


  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'solimanLifi': require('../assets/font/Domine-Regular.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  

  return (
    <ImageBackground 
      source={require('../assets/background_image.png')}
      style={styles.app_bg}
    >
      <ScrollView>     
        <View style={styles.Container}> 
          {bookData.map((chapter)=>{
            const {id,title,selector, desc} = chapter
            return (
              <TouchableOpacity 
                key={id}
                style={styles.chapterName}
                onPress={() =>
                  handleTouchableOpacityPress(
                    id,title,selector, desc
                  )
                }
              >
                <Text style={[
                  styles.chapterText,
                  fontLoaded && { fontFamily: 'solimanLifi' }
                ]}>{selector}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <Text style={styles.grs}></Text>
        <BannerAd
            unitId='ca-app-pub-2105686220682378/3217935837'
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
              tagForChildDirectedTreatment: true, // Set child-directed targeting
            }}
          />
      </ScrollView>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%"
  },
  Container:{
    width: "100%",
    marginTop: 15
  },
  chapterName: {
    backgroundColor: "#476f78",
    borderRadius: 10,
    margin: 10,
  },
  chapterText:{
    fontSize: 20,
    padding: 10,
    color: "#fff",
    lineHeight: 30
  },
  grs:{
    marginVertical: 10
  }
})

