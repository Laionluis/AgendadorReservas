import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Background from "../components/Background";
import { Navigation } from "../types";
import { theme } from "../core/theme";
import { FIREBASE_CONFIG } from "../core/config";
import { initializeApp } from "firebase/app";

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(FIREBASE_CONFIG)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

type Props = {
  navigation: Navigation;
};

const AuthLoadingScreen = ({ navigation }: Props) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("Dashboard");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);
