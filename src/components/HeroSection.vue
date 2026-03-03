<script setup>
import { PHONE_LINK, WHATSAPP_LINK } from '../config/contact'
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-bg pattern-industrial" />
    <div class="hero-accent" />
    <v-container class="hero-content">
      <v-row justify="center" align="center">
        <v-col cols="12" md="11" lg="10" class="text-center">
          <div class="hero-badge mb-4">
            <v-icon size="18" class="mr-1">mdi-map-marker</v-icon>
            <span>Pereira · Dosquebradas · Servicio a domicilio</span>
          </div>
          <h1 class="hero-title">
            Hidráulicos del Eje
          </h1>
          <p class="hero-subtitle">
            Reparación de gatos y prensas hidráulicas en Pereira y Dosquebradas. Servicio técnico especializado con atención rápida y servicio a domicilio.
          </p>
          <div class="hero-cta">
            <v-btn
              :href="PHONE_LINK"
              size="x-large"
              color="primary"
              class="cta-btn cta-primary font-weight-bold"
              prepend-icon="mdi-phone"
              rounded="lg"
              elevation="0"
            >
              Llamar ahora
            </v-btn>
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
          </div>
          <p class="hero-trust mt-6">
            Técnico especializado · Steven León · Respuesta rápida
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div class="hero-icon-watermark" aria-hidden="true">
      <v-icon size="280" opacity="0.06">mdi-cog</v-icon>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 4rem 0 5rem;
  background: linear-gradient(135deg, #0A3A7A 0%, #0D47A1 50%, #1565C0 100%);
  color: white;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to top, rgba(249, 168, 37, 0.12), transparent);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 5vw, 2.75rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: white;
  margin: 0 0 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.95);
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.5;
}

.hero-cta {
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

.hero-trust {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.hero-icon-watermark {
  position: absolute;
  right: -40px;
  bottom: 10%;
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 960px) {
  .hero-section {
    min-height: 75vh;
    padding: 3rem 0 4rem;
  }
  .hero-icon-watermark {
    right: -80px;
    opacity: 0.04;
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: 70vh;
    padding: 2.5rem 0 3.5rem;
  }
  .hero-cta {
    flex-direction: column;
  }
  .cta-btn {
    width: 100%;
    min-width: unset;
  }
}
</style>
