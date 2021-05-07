<template>
  <div>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :item="goal" anotherProp="..."></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { goals: ['Finish the course', 'Learn Vue'] }
  }
}
</script>
