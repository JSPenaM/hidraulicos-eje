<script setup>
import HeroSection from './components/HeroSection.vue'
import ProblemasSection from './components/ProblemasSection.vue'
import ServiciosSection from './components/ServiciosSection.vue'
import BeneficiosSection from './components/BeneficiosSection.vue'
import CoberturaSection from './components/CoberturaSection.vue'
import CtaSection from './components/CtaSection.vue'
import WhatsAppFab from './components/WhatsAppFab.vue'
</script>

<template>
  <v-app>
    <v-main class="app-main">
      <HeroSection />
      <ProblemasSection />
      <CtaSection />
      <ServiciosSection />
      <BeneficiosSection />
      <CtaSection />
      <CoberturaSection />
      <CtaSection />
    </v-main>
    <WhatsAppFab />
  </v-app>
</template>

<style>
.app-main {
  font-family: var(--font-body);
}
</style>
