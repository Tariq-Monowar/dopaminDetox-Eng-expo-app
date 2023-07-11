import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

import {
  BannerAd,
  BannerAdSize
} from "react-native-google-mobile-ads";

const DetalseData = ({ route }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        kalpurush: require("../assets/font/kalpurush.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/background_image_desc.png")}
      style={styles.app_bg}
    >
      {fontLoaded && (
        <ScrollView>
          <Text style={[styles.chapterInsidText, { fontFamily: "kalpurush" }]}>
            {route.params.desc}
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

export default DetalseData;

const styles = StyleSheet.create({
  app_bg: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  chapterInsidText: {
    fontSize: 20,
    marginTop: 27,
    lineHeight:28,
    paddingHorizontal: 10,
  },
});
