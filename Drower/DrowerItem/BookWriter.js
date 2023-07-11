import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import {
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import { useNavigation } from "@react-navigation/native";
// import appData from '../../Component/db/book_Data';

const BookWriter = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        kalpurush: require("../../assets/font/Philosopher-Regular.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/background_image_desc.png")}
      style={styles.app_bg}
    >
      {fontLoaded && (
        <ScrollView style={styles.book_Writer}>
          <Text style={[styles.book_Writer_name, { fontFamily: "kalpurush" }]}>
            Thibaut Meurisse
          </Text>
          <Text style={[styles.book_Writer_Desc, { fontFamily: "kalpurush" }]}>
            My name is Thibaut Meurisse and I'm from France but I've been living
            in Japan for over half a decade now. After studying Japanese at
            university, I left France to work for the Japanese government as an
            international relations coordinator. Now, I'm here in Tokyo studying
            for my MBA at Japan's leading university for economics. Chasing my
            dream took me thousands of miles from my hometown in France and
            required fluency in both English and Japanese. When I look back on
            my life, I had no way of predicting that I would be living in Japan,
            that I would be doing an MBA, or that I would be creating a website
            about personal development! I realize that it is the
            unpredictability of life that makes it more interesting. I hope you
            enjoy learning more about me as I share my life journey with you on
            this website. It is my hope that you will find inspiration in my
            story as you pursue your own goals.
          </Text>
          <BannerAd
            unitId='ca-app-pub-2105686220682378/3217935837'
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
              tagForChildDirectedTreatment: true, // Set child-directed targeting
            }}
          />
        </ScrollView>
      )}
    </ImageBackground>
  );
};

export default BookWriter;

const styles = StyleSheet.create({
  app_bg: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  book_Writer_name:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 15

  },
  book_Writer_Desc: {
    fontSize: 20,
    lineHeight: 33,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    opacity: 0.9,
  },
});
