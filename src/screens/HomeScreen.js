// Archivo: src/screens/HomeScreen.js
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/styles';
import { listaJugadores } from '../data/jugadores';

export default function HomeScreen({ onSeleccionarJugador }) {
  const categorias = ['Porteros', 'Defensores', 'Mediocampistas', 'Delanteros'];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Cabecera Principal */}
      <View style={globalStyles.headerHome}>
        <Text style={globalStyles.tituloHome}>Convocados</Text>
        <View style={globalStyles.lineaAmarilla} />
        <Text style={globalStyles.subtituloHome}>
          La nómina oficial de La Tri para los próximos encuentros internacionales.
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
                <TouchableOpacity style={globalStyles.tarjeta} onPress={() => onSeleccionarJugador(item)}>
                  <View style={globalStyles.avatarContenedor}>
                    <Image source={{ uri: item.foto }} style={globalStyles.fotoJugador} />
                    <View style={globalStyles.dorsalContenedor}>
                      <Text style={globalStyles.dorsalTexto}>{item.dorsal}</Text>
                    </View>
                  </View>
                  <Text style={globalStyles.nombreJugador}>{item.nombre}</Text>
                  <Text style={globalStyles.posicionJugador}>{item.posicion}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}