// Archivo: src/screens/ProfileModal.js
import React from 'react';
import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function ProfileModal({ visible, jugador, onClose }) {
  if (!jugador) return null;

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={globalStyles.modalPantallaCompleta}>
        {/* Header del Perfil */}
        <View style={globalStyles.modalHeader}>
          <Text style={globalStyles.modalTituloHeader}>PERFIL DE JUGADOR</Text>
          <View style={{ width: 20 }} />
        </View>

        {/* Contenido de la Ficha Técnica */}
        <View style={globalStyles.modalContenido}>
          <Image source={{ uri: jugador.foto }} style={globalStyles.fotoGrande} />
          
          <View style={globalStyles.badgePosicion}>
            <Text style={globalStyles.badgeTexto}>{jugador.tag}</Text>
          </View>

          <Text style={globalStyles.nombreGrande}>{jugador.nombre}</Text>
          <View style={globalStyles.lineaDetalle} />
          
          <View style={globalStyles.fichaTecnicaContenedor}>
            <View style={globalStyles.fichaFila}>
              <Text style={globalStyles.fichaLabel}>Club Actual</Text>
              <Text style={globalStyles.fichaValor}>{jugador.club}</Text>
            </View>

            <View style={globalStyles.fichaFila}>
              <Text style={globalStyles.fichaLabel}>Edad</Text>
              <Text style={globalStyles.fichaValor}>{jugador.edad}</Text>
            </View>

            <View style={globalStyles.fichaFila}>
              <Text style={globalStyles.fichaLabel}>Estatura</Text>
              <Text style={globalStyles.fichaValor}>{jugador.estatura}</Text>
            </View>

            <View style={globalStyles.fichaFila}>
              <Text style={globalStyles.fichaLabel}>Peso</Text>
              <Text style={globalStyles.fichaValor}>{jugador.peso}</Text>
            </View>

            <View style={globalStyles.fichaFilaUltima}>
              <Text style={globalStyles.fichaLabel}>Nacionalidad</Text>
              <Text style={globalStyles.fichaValor}>{jugador.nacionalidad}</Text>
            </View>
          </View>

          <TouchableOpacity style={globalStyles.botonCerrarModal} onPress={onClose} activeOpacity={0.8}>
            <Text style={globalStyles.botonCerrarTexto}>Volver a la Lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}