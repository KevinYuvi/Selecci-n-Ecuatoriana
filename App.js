import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function App() { 
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 1. Si 'mostrarSplash' es true, mostramos una pantalla de carga manual
  if (mostrarSplash) {
    return (
      <View style={globalStyles.splashContainer}>
        <Image
          source={require('./assets/icon.png')}
          style={globalStyles.splashLogo}
        />
        <StatusBar style="light" />
      </View>
    );
  }

  // 2. Cuando pasa el tiempo, se muestra tu app real
  return (
    <View style={globalStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyButton />
      <Imagen />
      <StatusBar style="auto" />
    </View>
  );
}

function MyButton() {
  return (
    <TouchableOpacity style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>Soy un botón</Text>
    </TouchableOpacity>
  );
}

function Imagen() {
  return (
    <Image
      source={{ uri: "https://www.futbolecuador.com/imagenes/images/thumb640/101b9139276d73fe8ca0730924b00e7c.png" }}
      style={globalStyles.image}
    />
  );
}
