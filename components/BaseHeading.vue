<template>
  <h5 v-bind="$attrs">
    <slot v-for="(_, name) in $slots" :name="name" />
  </h5>
</template>

<style lang="scss" scoped>
  h5 {
    text-transform: uppercase;
  }
</style>
