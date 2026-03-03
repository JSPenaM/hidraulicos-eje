<script setup>
const servicios = [
  { text: 'Reparación de gatos botella en Pereira', icon: 'mdi-cog', loc: 'Pereira' },
  { text: 'Servicio técnico de prensas hidráulicas en Dosquebradas', icon: 'mdi-hammer', loc: 'Dosquebradas' },
  { text: 'Mantenimiento de porta power', icon: 'mdi-wrench' },
  { text: 'Reparación de gatos zorra', icon: 'mdi-truck' },
  { text: 'Reparación de grúas hidráulicas', icon: 'mdi-crane' },
  { text: 'Servicio técnico estibadores', icon: 'mdi-package-variant' },
  { text: 'Restauración de herramientas hidráulicas', icon: 'mdi-restore' },
]
</script>

<template>
  <section id="servicios" class="servicios-section">
    <v-container>
      <p class="section-label text-center mb-2">Qué hacemos</p>
      <h2 class="section-title text-h4 text-md-h3 text-center mb-10">
        Nuestros servicios
      </h2>
      <v-row>
        <v-col
          v-for="(srv, i) in servicios"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
        >
          <div class="servicio-card">
            <div class="servicio-icon-wrap">
              <v-icon :icon="srv.icon" size="32" class="servicio-icon" />
            </div>
            <p class="servicio-text">{{ srv.text }}</p>
            <span v-if="srv.loc" class="servicio-loc">{{ srv.loc }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.servicios-section {
  padding: 4.5rem 0 5rem;
  background: white;
  position: relative;
}

.servicios-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
}

.section-title {
  color: var(--color-primary) !important;
}

.servicio-card {
  height: 100%;
  padding: 1.75rem 1.5rem;
  background: white;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-top: 4px solid var(--color-secondary);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

.servicio-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(249, 168, 37, 0.3);
}

.servicio-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 71, 161, 0.08), rgba(13, 71, 161, 0.04));
  border-radius: 14px;
  margin-bottom: 1rem;
}

.servicio-icon {
  color: var(--color-primary) !important;
}

.servicio-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
  margin: 0 0 0.25rem;
}

.servicio-loc {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.03em;
}
</style>
