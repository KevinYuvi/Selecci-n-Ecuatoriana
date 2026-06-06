// Archivo: App.js
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native';
import { globalStyles } from './styles';
import { listaJugadores } from './jugadores';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (mostrarSplash) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: "https://www.futbolecuador.com/imagenes/images/thumb640/101b9139276d73fe8ca0730924b00e7c.png" }}
          style={{ width: 240, height: 240, resizeMode: 'contain' }}
        />
        <Text style={{ color: 'white', marginTop: 15, fontSize: 15, fontWeight: 'bold', letterSpacing: 4 }}>
          LA TRI ATHLETIC
        </Text>
        <StatusBar style="light" />
      </View>
    );
  }

  const abrirDetalle = (jugador) => {
    setJugadorSeleccionado(jugador);
    setModalVisible(true);
  };

  const categorias = ['Porteros', 'Defensores', 'Mediocampistas', 'Delanteros'];

  return (
    <View style={[globalStyles.container, { paddingBottom: 20 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Cabecera Principal */}
        <View style={globalStyles.headerHome}>
          <Text style={globalStyles.tituloHome}>Convocados</Text>
          <View style={globalStyles.lineaAmarilla} />
          <Text style={globalStyles.subtituloHome}>
            Te presentamos la nómina oficial de La Tri para los próximos encuentros internacionales.
          </Text>
        </View>

        {/* Listas Dinámicas por Posición */}
        {categorias.map((categoria) => {
          const jugadoresFiltrados = listaJugadores.filter(j => j.categoria === categoria);

          if (jugadoresFiltrados.length === 0) return null;

          return (
            <View key={categoria} style={globalStyles.seccionContenedor}>
              <View style={globalStyles.seccionHeader}>
                <Text style={globalStyles.seccionTitulo}>{categoria}</Text>
                <View style={globalStyles.seccionLinea} />
              </View>

              <FlatList
                data={jugadoresFiltrados}
                numColumns={2}
                columnWrapperStyle={globalStyles.gridColumnas}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={globalStyles.tarjeta} // <-- Quitamos la condición del borde dorado
                    onPress={() => abrirDetalle(item)}
                  >
                    <View style={globalStyles.avatarContenedor}>
                      <Image source={{ uri: item.foto }} style={globalStyles.fotoJugador} />
                      <View style={globalStyles.dorsalContenedor}>
                        <Text style={globalStyles.dorsalTexto}>{item.dorsal}</Text>
                      </View>
                    </View>
                    <Text style={globalStyles.nombreJugador}>{item.nombre}</Text>
                    <Text style={globalStyles.posicionJugador}>{item.posicion}</Text>

                    {/* Borramos por completo el bloque de los puntos amarillo, azul y rojo */}
                  </TouchableOpacity>
                )}
              />
            </View>
          );
        })}
      </ScrollView>

      {/* MODAL DETALLE CON DATOS TOTALMENTE RELEVANTES */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={globalStyles.modalPantallaCompleta}>
          {/* Header del Perfil */}
          <View style={globalStyles.modalHeader}>
            <TouchableOpacity style={globalStyles.botonRegresar} onPress={() => setModalVisible(false)}>
              <Text style={{ color: '#7A7511', fontWeight: 'bold', fontSize: 16 }}>←</Text>
            </TouchableOpacity>
            <Text style={globalStyles.modalTituloHeader}>PERFIL DE JUGADOR</Text>
            <View style={{ width: 20 }} />
          </View>

          {/* Ficha Técnica Estilizada */}
          {jugadorSeleccionado && (
            <View style={globalStyles.modalContenido}>
              <Image source={{ uri: jugadorSeleccionado.foto }} style={globalStyles.fotoGrande} />

              <View style={globalStyles.badgePosicion}>
                <Text style={globalStyles.badgeTexto}>{jugadorSeleccionado.tag}</Text>
              </View>

              <Text style={globalStyles.nombreGrande}>{jugadorSeleccionado.nombre}</Text>
              <View style={globalStyles.lineaDetalle} />

              {/* Estructura Limpia de Filas Informativas */}
              <View style={globalStyles.fichaTecnicaContenedor}>
                <View style={globalStyles.fichaFila}>
                  <Text style={globalStyles.fichaLabel}>Club Actual</Text>
                  <Text style={globalStyles.fichaValor}>{jugadorSeleccionado.club}</Text>
                </View>

                <View style={globalStyles.fichaFila}>
                  <Text style={globalStyles.fichaLabel}>Edad</Text>
                  <Text style={globalStyles.fichaValor}>{jugadorSeleccionado.edad}</Text>
                </View>

                <View style={globalStyles.fichaFila}>
                  <Text style={globalStyles.fichaLabel}>Estatura</Text>
                  <Text style={globalStyles.fichaValor}>{jugadorSeleccionado.estatura}</Text>
                </View>

                <View style={globalStyles.fichaFila}>
                  <Text style={globalStyles.fichaLabel}>Peso</Text>
                  <Text style={globalStyles.fichaValor}>{jugadorSeleccionado.peso}</Text>
                </View>

                <View style={globalStyles.fichaFilaUltima}>
                  <Text style={globalStyles.fichaLabel}>Nacionalidad</Text>
                  <Text style={globalStyles.fichaValor}>{jugadorSeleccionado.nacionalidad}</Text>
                </View>
              </View>

              {/* Botón para regresar al Home */}
              <TouchableOpacity
                style={globalStyles.botonCerrarModal}
                onPress={() => setModalVisible(false)}
                activeOpacity={0.8}
              >
                <Text style={globalStyles.botonCerrarTexto}>Volver a la Lista</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>

      <StatusBar style="dark" />
    </View>
  );
}