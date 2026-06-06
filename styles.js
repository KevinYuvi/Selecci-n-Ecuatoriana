// Archivo: styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 45) / 2;

export const globalStyles = StyleSheet.create({
  // Contenedor General (Pantalla de Inicio)
  container: {
    flex: 1,
    backgroundColor: '#F9F6EE', 
    paddingTop: 60,
  },
  headerHome: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  tituloHome: {
    fontSize: 26,
    fontWeight: '900',
    color: '#121212',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  lineaAmarilla: {
    width: 35,
    height: 4,
    backgroundColor: '#FFDD00',
    marginTop: 6,
    marginBottom: 12,
  },
  subtituloHome: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },

  // Estilos de las Secciones del Grid
  seccionContenedor: {
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  seccionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  seccionTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#034EA2', 
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginRight: 10,
  },
  seccionLinea: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  gridColumnas: {
    justifyContent: 'space-between',
  },

  // Tarjetas en Rejilla (Grid)
  tarjeta: {
    backgroundColor: '#F0EFEA', 
    width: cardWidth,
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E6E4DF',
  },
  tarjetaSeleccionada: {
    borderColor: '#7A7511', 
    borderWidth: 2,
  },
  avatarContenedor: {
    position: 'relative',
    marginBottom: 12,
  },
  fotoJugador: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFDD00', 
  },
  dorsalContenedor: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#034EA2',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  dorsalTexto: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  nombreJugador: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 4,
  },
  posicionJugador: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#034EA2',
    textTransform: 'uppercase',
  },
  puntosEcuador: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 4,
  },
  puntoAmarillo: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFDD00' },
  puntoAzul: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#034EA2' },
  puntoRojo: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ED1C24' },

  // Estilos del Modal Perfil Mejorado (Ficha Técnica Limpia)
  modalPantallaCompleta: {
    flex: 1,
    backgroundColor: '#F9F6EE',
    paddingTop: 50,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E4DF',
  },
  botonRegresar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#7A7511',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTituloHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7A7511',
    letterSpacing: 0.5,
  },
  modalContenido: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 35,
  },
  fotoGrande: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#FFDD00',
    marginBottom: 15,
  },
  badgePosicion: {
    backgroundColor: '#E2ECF7',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeTexto: {
    color: '#034EA2',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  nombreGrande: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
  },
  lineaDetalle: {
    width: 40,
    height: 3,
    backgroundColor: '#FFDD00',
    marginTop: 12,
    marginBottom: 25,
  },

  // Contenedor de la Nueva Tabla de Información Relevante
  fichaTecnicaContenedor: {
    width: '100%',
    backgroundColor: '#F0EFEA',
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E6E4DF',
    marginBottom: 35,
  },
  fichaFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E4DF',
  },
  fichaFilaUltima: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 0, // Sin línea en el último elemento
  },
  fichaLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666666',
    textTransform: 'uppercase',
  },
  fichaValor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#121212',
  },

  // Botón Cerrar
  botonCerrarModal: {
    backgroundColor: '#034EA2',
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonCerrarTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});