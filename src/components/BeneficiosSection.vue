<script setup>
const beneficios = [
  { text: 'Servicio a domicilio en Pereira y Dosquebradas', icon: 'mdi-truck-delivery' },
  { text: 'Atención rápida', icon: 'mdi-clock-fast' },
  { text: 'Diagnóstico profesional', icon: 'mdi-magnify' },
  { text: 'Técnico especializado', icon: 'mdi-account-hard-hat' },
]
</script>

<template>
  <section id="beneficios" class="beneficios-section">
    <div class="beneficios-bg pattern-industrial" />
    <v-container class="position-relative">
      <p class="section-label section-label-light text-center mb-2">Por qué elegirnos</p>
      <h2 class="section-title text-h4 text-md-h3 text-center mb-10 text-white">
        Beneficios
      </h2>
      <v-row>
        <v-col
          v-for="(b, i) in beneficios"
          :key="i"
          cols="12"
          sm="6"
          md="3"
        >
          <div class="beneficio-card">
            <div class="beneficio-icon-wrap">
              <v-icon :icon="b.icon" size="36" class="beneficio-icon" />
            </div>
            <p class="beneficio-text">{{ b.text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.beneficios-section {
  position: relative;
  padding: 4.5rem 0 5rem;
  background: linear-gradient(145deg, #0A3A7A 0%, #0D47A1 45%, #1565C0 100%);
  overflow: hidden;
}

.beneficios-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.section-label-light {
  color: rgba(249, 168, 37, 0.95) !important;
}

.beneficio-card {
  height: 100%;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.98);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  border-top: 4px solid var(--color-secondary);
  transition: transform var(--transition), box-shadow var(--transition);
}

.beneficio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.beneficio-icon-wrap {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F9A825, #F57F17);
  color: white;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(249, 168, 37, 0.4);
}

.beneficio-icon {
  color: white !important;
}

.beneficio-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
  margin: 0;
}
</style>
