import { Alert, BackHandler, View } from "react-native";
import { Input, Text, Button } from "native-base";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';

const URL = 'http://192.168.0.109:8080/api/register'

const PaginaWebView = () => {

    // Escuchar el evento de hardware "back" para controlar la navegación en la WebView
  useEffect(() => {
    const handleBackPress = () => {
      if (webViewRef.current && webViewRef.current.canGoBack) {
        // Si la WebView puede retroceder, retrocede en la WebView
        webViewRef.current.goBack();
        return true; // Evitar la navegación de React Navigation
      }
      return false; // Permitir la navegación de React Navigation
    };
    
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove();
    };
  }, []);

  // Ref para la WebView
  const webViewRef = useRef(null);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: "100%" }}>
                <WebView
                    source={{ uri: 'http://3.128.112.25//' }}
                    onLoad={console.log('cargada')}
                />
            </View>
        </View>
    );
}

export default PaginaWebView;