<template>
  <BuySellSection />
  <ChooseGTSection />
  <PartnerSection />
  <AskAndAnswer />
  <Transaction />
  <BannerImage />
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "default",
  });
// TODO: vuex
// import { useFiltersStore } from '~/store/filters'
// const filtersStore = useFiltersStore()
// eslint-disable-next-line no-console
// console.log(filtersStore)
</script>
