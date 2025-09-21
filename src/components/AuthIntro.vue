<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const selectedCard = ref(0)
const cardContainer = ref<HTMLDivElement | null>(null)

const cards = [1, 2, 3]

const handleScroll = () => {
  if (!cardContainer.value) return

  const container = cardContainer.value
  const scrollLeft = container.scrollLeft
  const containerWidth = container.offsetWidth

  const cards = Array.from(container.children) as HTMLElement[]
  let closestIndex = 0
  let smallestDistance = Infinity

  cards.forEach((card, index) => {
    const cardLeft = card.offsetLeft
    const cardWidth = card.offsetWidth
    const cardCenter = cardLeft + cardWidth / 2
    const scrollCenter = scrollLeft + containerWidth / 2
    const distance = Math.abs(cardCenter - scrollCenter)

    if (distance < smallestDistance) {
      smallestDistance = distance
      closestIndex = index
    }
  })

  if (selectedCard.value !== closestIndex) {
    selectedCard.value = closestIndex
  }
}

let scrollTimeout: number | undefined

const debouncedHandleScroll = () => {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(handleScroll, 100)
}

onMounted(() => {
  cardContainer.value?.addEventListener('scroll', debouncedHandleScroll)
})

onUnmounted(() => {
  cardContainer.value?.removeEventListener('scroll', debouncedHandleScroll)
})

watch(selectedCard, (newVal) => {
  if (cardContainer.value) {
    const cardElement = cardContainer.value.children[newVal] as HTMLElement
    cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
})
</script>

<template>
  <div class="flex flex-col items-center z-10">
    <div class="md:mx-[40px] md:mt-[70px] lg:mx-[79px] lg:mt-[114px]">
      <div class="rounded-full size-[49px] bg-neutral relative invisible md:visible mb-[40px]">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">A</p>
      </div>
      <p class="text-base-100 font-semibold text-[15px] mb-1 uppercase">Accaunt.io</p>
      <h3 class="text-base-100 font-medium text-[35px] lg:text-[40px] text-balance">
        Manage multiple accounts in one place!
      </h3>
    </div>

    <div
      ref="cardContainer"
      class="flex w-full snap-x snap-mandatory gap-12 overflow-x-auto mt-[106px] pb-8 px-[calc(50%-143.5px)] no-scrollbar"
    >
      <div
        v-for="(_, index) in cards"
        :key="index"
        class="snap-center shrink-0 w-[287px] h-[220px] bg-card-background rounded-[10px] shadow-[10px_10px_0_0_rgba(0,0,0,0.15)]"
      ></div>
    </div>
    <div class="flex gap-[10px] mt-4">
      <div v-for="(_, index) in cards" :key="index">
        <input
          type="radio"
          :id="'card-radio-' + index"
          :value="index"
          v-model="selectedCard"
          class="hidden"
        />
        <label
          :for="'card-radio-' + index"
          class="size-3 rounded-full cursor-pointer block"
          :class="selectedCard === index ? 'bg-card-background w-[30px]' : 'bg-card-background/50'"
        ></label>
      </div>
    </div>
    <div
      class="flex items-center gap-[11px] uppercase text-base-100 text-xs font-semibold left-[68px] bottom-[53px] absolute"
    >
      <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
      <div class="rounded-full size-1 bg-base-100"></div>
      <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
