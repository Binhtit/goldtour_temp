<template>
  <div class="ask-and-answer tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px]">
    <BaseHeading class="tw-font-bold tw-text-grey900 tw-text-2xl tw-leading-10 mb-3"
      >Hỏi & Đáp</BaseHeading
    >
    <ClientOnly>
      <b-accordion class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
        <b-accordion-item
        v-for="(item, index) in QANDA"
        :key="index"
        class="tw-p-6"
        :title="item.title">
        <div class="tw-mt-[10px] tw-text-sm">
          <BaseText>
            {{ item.content }}
            <!-- <strong class="tw-cursor-pointer">tại đây</strong> -->
          </BaseText>
          <div v-if="item.subContent && item.subContent.length">
            <li v-for="(subItem, index) in item.subContent" :key="index" class="tw-ml-1">{{ subItem }}</li>
          </div>
        </div>
        </b-accordion-item>
      </b-accordion>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { QANDA } from '~/constants/common'
</script>

<style lang="scss" scoped>
  .ask-and-answer {
    .accordion {
      .accordion-item {
        border: 1px solid #dee2e6;
        border-radius: 0;
      }
    }
  }
</style>
