// Archivo: styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 45) / 2;

export const globalStyles = StyleSheet.create({
  // ==========================================
  // CONTENEDOR GENERAL (FONDO BLANCO DEPORTIVO)
  // ==========================================
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Blanco puro para máxima limpieza visual
    paddingTop: 60,
  },
  headerHome: {
    backgroundColor: '#034EA2', // AZUL de La Tri como bloque fuerte superior
    marginHorizontal: 15,
    marginBottom: 25,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFDD00', // AMARILLO enmarcando el encabezado
    shadowColor: '#034EA2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  tituloHome: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF', // Texto blanco sobre el bloque azul
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  lineaAmarilla: {
    width: 45,
    height: 4,
    backgroundColor: '#FFDD00', // AMARILLO central
    marginTop: 8,
    marginBottom: 12,
    borderRadius: 2,
  },
  subtituloHome: {
    fontSize: 13,
    color: '#E2ECF7', // Azul claro para el subtexto
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '600',
  },

  // ==========================================
  // ESTILOS DE LAS SECCIONES DEL GRID
  // ==========================================
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
    fontSize: 12,
    fontWeight: '900',
    color: '#034EA2', // AZUL para el nombre de la sección
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    backgroundColor: '#FFF9E6', // Cápsula AMARILLA muy suave de fondo
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFDD00',
  },
  seccionLinea: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#E2ECF7', // Línea AZUL sutil
    marginLeft: 10,
  },
  gridColumnas: {
    justifyContent: 'space-between',
  },

  // ==========================================
  // TARJETAS EN REJILLA (DETALLES MARCADOS)
  // ==========================================
  tarjeta: {
    backgroundColor: '#F9F6EE', // Tu color crema original pasa a las tarjetas para que resalten sobre el fondo blanco
    width: cardWidth,
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#E6E4DF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  tarjetaSeleccionada: {
    borderColor: '#ED1C24', // ROJO vibrante al pulsar la tarjeta
    borderWidth: 2.5,
    backgroundColor: '#FFF5F5', // Fondo con un sutil toque rojizo
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
    borderColor: '#FFDD00', // Borde AMARILLO en la foto
    backgroundColor: '#FFFFFF',
  },
  dorsalContenedor: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#ED1C24', // ROJO para el bloque del número (look de camiseta)
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F9F6EE',
  },
  dorsalTexto: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  nombreJugador: {
    fontSize: 14,
    fontWeight: '800',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 4,
  },
  posicionJugador: {
    fontSize: 11,
    fontWeight: '750',
    color: '#034EA2', // AZUL para la posición
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  puntosEcuador: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 4,
  },
  puntoAmarillo: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFDD00' },
  puntoAzul: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#034EA2' },
  puntoRojo: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ED1C24' },

  // ==========================================
  // ESTILOS DEL MODAL PERFIL (SÓLO BOTÓN INFERIOR)
  // ==========================================
  modalPantallaCompleta: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Consistente con el fondo blanco limpio
    paddingTop: 50,
  },
  modalHeader: {
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: '#FFDD00', // Separador AMARILLO
    backgroundColor: '#034EA2', // Header AZUL sin botones laterales
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  modalTituloHeader: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF', // Centrado e impecable
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  modalContenido: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  fotoGrande: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FFDD00', // Aro AMARILLO
    marginBottom: 15,
  },
  badgePosicion: {
    backgroundColor: '#034EA2', // Badge AZUL fuerte
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeTexto: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  nombreGrande: {
    fontSize: 28,
    fontWeight: '900',
    color: '#121212',
    textAlign: 'center',
  },
  lineaDetalle: {
    width: 40,
    height: 3,
    backgroundColor: '#ED1C24', // Detalle en ROJO
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 1.5,
  },

  // ==========================================
  // CONTENEDOR DE LA FICHA TÉCNICA
  // ==========================================
  fichaTecnicaContenedor: {
    width: '100%',
    backgroundColor: '#F9F6EE', // Crema suave para la tabla de datos
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E6E4DF',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 2,
  },
  fichaFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E4DF',
  },
  fichaFilaUltima: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 0,
  },
  fichaLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#034EA2', // Texto de etiquetas en AZUL
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fichaValor: {
    fontSize: 15,
    fontWeight: '700',
    color: '#121212',
  },

  // ==========================================
  // BOTÓN CERRAR ÚNICO (PARTE INFERIOR)
  // ==========================================
  botonCerrarModal: {
    backgroundColor: '#034EA2', // AZUL de La Tri
    width: '100%',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#034EA2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#FFDD00', // Toque final con borde AMARILLO
  },
  botonCerrarTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});