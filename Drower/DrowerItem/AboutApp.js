import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import * as Font from "expo-font";

const AboutApp = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        kalpurush: require("../../assets/font/kalpurush.ttf"),
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
          <Text style={[styles.book_Writer_Desc, { fontFamily: "kalpurush" }]}>
            {`"Dopamine Detox" is a self-help book that aims to address technology addiction and its impact on mental health. The book is available in both Bangla and English versions, making it accessible to a wide range of readers.\n\nThe book provides practical strategies and techniques to break free from the addictive pull of technology, such as social media, video games, and excessive screen time. It offers step-by-step guidance on how to detox from the excessive release of dopamine, a neurotransmitter associated with reward and pleasure, which is often triggered by technology use. The book also highlights the negative effects of technology addiction on mental clarity, productivity, and overall well-being.\n\nThe app that accompanies the book offers additional features to support readers in their journey towards a healthier relationship with technology. It includes interactive exercises, meditation techniques, and mindfulness practices to help readers develop awareness and self-control over their technology use. The app also provides tracking tools to monitor screen time and offers reminders and notifications to help users stay on track with their detox goals.\n\nThe book and the accompanying app are designed to provide practical and actionable strategies for readers to regain control of their technology use, improve their mental clarity, and cultivate a happier and more balanced life. It is suitable for individuals who feel overwhelmed by technology, struggle with technology addiction, or simply want to create a healthier relationship with their devices to enhance their well-being.`}
            `
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

export default AboutApp;

const styles = StyleSheet.create({
  app_bg: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  book_Writer_Desc: {
    fontSize: 21,
    lineHeight: 30,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 40,
  },
});
