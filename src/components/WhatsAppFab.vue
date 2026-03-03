<script setup>
import { WHATSAPP_LINK } from '../config/contact'
</script>

<template>
  <a
    :href="WHATSAPP_LINK"
    target="_blank"
    rel="noopener"
    class="whatsapp-fab"
    aria-label="Contactar por WhatsApp"
  >
    <v-icon size="28" color="white">mdi-whatsapp</v-icon>
    <span class="whatsapp-fab-label">WhatsApp</span>
  </a>
</template>

<style scoped>
.whatsapp-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem 0 0.6rem;
  height: 56px;
  border-radius: 999px;
  background: #25D366;
  color: white;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
  z-index: 1000;
  transition: transform var(--transition), box-shadow var(--transition);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.whatsapp-fab:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55);
  color: white;
}

.whatsapp-fab-label {
  display: none;
}

@media (min-width: 600px) {
  .whatsapp-fab-label {
    display: inline;
  }
}

@media (max-width: 599px) {
  .whatsapp-fab {
    width: 56px;
    padding: 0;
    justify-content: center;
    bottom: 20px;
    right: 20px;
  }
}
</style>
