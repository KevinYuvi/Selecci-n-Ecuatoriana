import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { globalStyles } from './src/styles/styles';
import HomeScreen from './src/screens/HomeScreen';
import ProfileModal from './src/screens/ProfileModal';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // 1. Render de la pantalla de carga (Splash)
  if (mostrarSplash) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: "https://www.futbolecuador.com/imagenes/images/thumb640/101b9139276d73fe8ca0730924b00e7c.png" }}
          style={{ width: 340, height: 340, resizeMode: 'contain' }}
        />
        <Text style={{ color: 'white', marginTop: 15, fontSize: 15, fontWeight: 'bold', letterSpacing: 4 }}>
          LA TRI ATHLETIC
        </Text>
        <StatusBar style="light" />
      </View>
    );
  }

  const manejarSeleccion = (jugador) => {
    setJugadorSeleccionado(jugador);
    setModalVisible(true);
  };

  return (
    <View style={[globalStyles.container, { paddingBottom: 20 }]}>

      <HomeScreen onSeleccionarJugador={manejarSeleccion} />

      <ProfileModal
        visible={modalVisible}
        jugador={jugadorSeleccionado}
        onClose={() => setModalVisible(false)}
      />

      <StatusBar style="dark" />
    </View>
  );
}