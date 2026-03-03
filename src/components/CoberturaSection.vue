<template>
  <section id="cobertura" class="cobertura-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <p class="section-label text-center mb-2">Dónde atendemos</p>
          <h2 class="section-title text-h4 text-md-h3 text-center mb-8">
            Zona de cobertura
          </h2>
          <div class="cobertura-card">
            <div class="cobertura-icon-wrap">
              <v-icon icon="mdi-map-marker-radius" size="40" class="cobertura-icon" />
            </div>
            <p class="cobertura-text">
              Prestamos servicio técnico de herramientas hidráulicas en
              <strong>Pereira</strong>, <strong>Dosquebradas</strong> y alrededores.
            </p>
            <div class="cobertura-address">
              <v-icon size="20">mdi-storefront</v-icon>
              <span>Ubicación: Calle 16 #4-46, Pereira.</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.cobertura-section {
  padding: 4.5rem 0 5rem;
  background: var(--color-bg);
  position: relative;
}

.cobertura-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(13, 71, 161, 0.15), transparent);
}

.section-title {
  color: var(--color-primary) !important;
}

.cobertura-card {
  padding: 2.5rem 2rem;
  background: white;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(13, 71, 161, 0.12);
  border-left: 5px solid var(--color-primary);
  box-shadow: var(--shadow-md);
  text-align: center;
}

.cobertura-icon-wrap {
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 71, 161, 0.1), rgba(13, 71, 161, 0.05));
  border-radius: 18px;
}

.cobertura-icon {
  color: var(--color-primary) !important;
}

.cobertura-text {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0 0 1.25rem;
}

.cobertura-text strong {
  color: var(--color-primary);
}

.cobertura-address {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--color-bg);
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.cobertura-address .v-icon {
  color: var(--color-primary);
}
</style>
