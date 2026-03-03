<script setup>
const problemas = [
  { text: 'Gato botella que no levanta', icon: 'mdi-cog' },
  { text: 'Fugas de aceite', icon: 'mdi-oil' },
  { text: 'Pérdida de presión', icon: 'mdi-gauge-low' },
  { text: 'Prensa que no genera fuerza', icon: 'mdi-hammer' },
  { text: 'Estibador dañado', icon: 'mdi-package-variant-closed' },
]
</script>

<template>
  <section id="problemas" class="problemas-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="11">
          <p class="section-label text-center mb-2">Problemas que resolvemos</p>
          <h2 class="section-title text-h4 text-md-h3 text-center mb-10">
            ¿Tu herramienta hidráulica presenta fallas?
          </h2>
          <div class="problemas-grid">
            <div
              v-for="(item, i) in problemas"
              :key="i"
              class="problema-card"
            >
              <div class="problema-icon">
                <v-icon :icon="item.icon" size="28" />
              </div>
              <span class="problema-text">{{ item.text }}</span>
            </div>
          </div>
          <p class="problemas-cta text-center mt-8">
            Nos especializamos en diagnosticar y reparar estos problemas con rapidez.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.problemas-section {
  padding: 4.5rem 0 5rem;
  background: var(--color-bg);
  position: relative;
}

.problemas-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(13, 71, 161, 0.2), transparent);
}

.section-title {
  color: var(--color-primary) !important;
}

.problemas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.problema-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-accent);
  transition: transform var(--transition), box-shadow var(--transition);
}

.problema-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.problema-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(198, 40, 40, 0.1);
  color: var(--color-accent);
  border-radius: 10px;
}

.problema-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
}

.problemas-cta {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  max-width: 520px;
  margin: 0 auto;
}
</style>
