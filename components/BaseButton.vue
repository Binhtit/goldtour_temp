<template>
  <button v-bind="$attrs">
    <slot v-for="(_, name) in $slots" :name="name" />
  </button>
</template>
