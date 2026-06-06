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

  if (mostrarSplash) {
    return (
      <View style={{ flex: 1, backgroundColor: '#003DA5', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          width: 280,
          height: 280,
          borderRadius: 140,
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 5,
          borderColor: '#FFCC00',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 8
        }}>
          <Image
            source={{ uri: "https://www.futbolecuador.com/imagenes/images/thumb640/101b9139276d73fe8ca0730924b00e7c.png" }}
            style={{ width: 230, height: 230, resizeMode: 'contain' }}
          />
        </View>

        <Text style={{ color: '#FFCC00', marginTop: 22, fontSize: 22, fontWeight: '900', letterSpacing: 1 }}>
          Ecuador - La Tri
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