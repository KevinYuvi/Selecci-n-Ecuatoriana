import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/styles';
import { listaJugadores } from '../data/jugadores';

export default function HomeScreen({ onSeleccionarJugador }) {
    const categorias = ['Porteros', 'Defensas', 'Mediocampistas', 'Delanteros'];
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={globalStyles.headerEquipo}>
                <Image
                    source={{ uri: "https://www.futbolecuador.com/imagenes/images/thumb640/101b9139276d73fe8ca0730924b00e7c.png" }}
                    style={globalStyles.logoEquipo}
                />

                <View style={globalStyles.infoEquipo}>
                    <Text style={globalStyles.tituloEquipo}>Selección Ecuatoriana de Fútbol</Text>
                    <View style={globalStyles.lineaAmarillaEquipo} />
                    <Text style={globalStyles.subtituloEquipo}>
                        Ecuador - La Tri
                    </Text>
                </View>
            </View>

            <View style={globalStyles.seccionContenedor}>
                <View style={globalStyles.seccionHeader}>
                    <Text style={globalStyles.seccionTitulo}>Datos del equipo</Text>
                    <View style={globalStyles.seccionLinea} />
                </View>

                <View style={globalStyles.fichaTecnicaContenedor}>
                    <View style={globalStyles.fichaFila}>
                        <Text style={globalStyles.fichaLabel}>Confederación</Text>
                        <Text style={globalStyles.fichaValor}>CONMEBOL</Text>
                    </View>

                    <View style={globalStyles.fichaFila}>
                        <Text style={globalStyles.fichaLabel}>Entrenador</Text>
                        <Text style={globalStyles.fichaValor}>Sebastián Beccacece</Text>
                    </View>

                    <View style={globalStyles.fichaFilaUltima}>
                        <Text style={globalStyles.fichaLabel}>Estadio</Text>
                        <Text style={globalStyles.fichaValor}>Estadio Rodrigo Paz Delgado</Text>
                    </View>
                </View>
            </View>

            <View style={globalStyles.headerHome}>
                <Text style={globalStyles.tituloHome}>Jugadores</Text>
                <View style={globalStyles.lineaAmarilla} />
                <Text style={globalStyles.subtituloHome}>
                    La nómina oficial de La Tri para los próximos encuentros del mundial.
                </Text>
            </View>

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