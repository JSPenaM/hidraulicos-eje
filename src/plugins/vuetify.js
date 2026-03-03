import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// Paleta industrial: azul oscuro, amarillo industrial, rojo herramienta
const industrialTheme = {
  dark: false,
  colors: {
    primary: '#0D47A1',      // Azul oscuro industrial
    secondary: '#F9A825',    // Amarillo industrial
    accent: '#C62828',       // Rojo herramienta
    background: '#FAFAFA',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-variant': '#E3E3E3',
    'on-surface-variant': '#424242',
    outline: '#757575',
    'outline-variant': '#BDBDBD',
    error: '#B00020',
    'on-error': '#FFFFFF',
    'on-primary': '#FFFFFF',
    'on-secondary': '#212121',
    'on-accent': '#FFFFFF',
    'on-background': '#212121',
    'on-surface': '#212121',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'industrial',
    themes: {
      industrial: industrialTheme,
    },
  },
})
