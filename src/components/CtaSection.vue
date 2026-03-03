<script setup>
import { PHONE_LINK, WHATSAPP_LINK } from '../config/contact'
</script>

<template>
  <section class="cta-section">
    <div class="cta-bg pattern-industrial" />
    <v-container class="position-relative">
      <v-row justify="center">
        <v-col cols="12" md="9" lg="7" class="text-center">
          <h2 class="cta-title">
            ¿Necesitas reparar tu herramienta hidráulica hoy?
          </h2>
          <p class="cta-subtitle">
            Contáctanos por WhatsApp o llámanos. Atención rápida en Pereira y Dosquebradas.
          </p>
          <div class="cta-buttons">
            <v-btn
              :href="WHATSAPP_LINK"
              target="_blank"
              rel="noopener"
              size="x-large"
              color="accent"
              class="cta-btn cta-whatsapp font-weight-bold"
              prepend-icon="mdi-whatsapp"
              rounded="lg"
              elevation="0"
            >
              WhatsApp
            </v-btn>
            <v-btn
              :href="PHONE_LINK"
              size="x-large"
              color="primary"
              variant="outlined"
              class="cta-btn cta-outline font-weight-bold"
              prepend-icon="mdi-phone"
              rounded="lg"
              elevation="0"
            >
              Llamar
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="cta-icon" aria-hidden="true">
      <v-icon size="120" opacity="0.08">mdi-wrench</v-icon>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  padding: 4rem 0 4.5rem;
  background: linear-gradient(145deg, #0A3A7A 0%, #0D47A1 50%, #1565C0 100%);
  color: white;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: white;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.cta-btn {
  min-width: 200px;
  padding: 0.75rem 1.5rem !important;
  font-size: 1rem !important;
  text-transform: none;
  letter-spacing: 0.02em;
}

.cta-outline {
  border: 2px solid rgba(255, 255, 255, 0.9) !important;
  color: white !important;
}
.cta-outline:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  border-color: white !important;
  color: white !important;
}

.cta-icon {
  position: absolute;
  right: 5%;
  bottom: 50%;
  transform: translateY(50%);
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 600px) {
  .cta-buttons {
    flex-direction: column;
  }
  .cta-btn {
    width: 100%;
    min-width: unset;
  }
}
</style>
