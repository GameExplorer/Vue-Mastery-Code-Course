import { ref, computed, isRef, isReactive, reactive } from "vue";

export const useNumber = () => {
  let num = ref(0);

  const accounts = reactive({
    checking: 1337,
    savings: 2929,
  })

  console.log('isRef(num)', isRef(num));
  console.log('isReactive(num)', isReactive(accounts));

  function increment() {
    num.value++;
  }

  const double = computed(() => {
    return num.value * 2;
  });

  return { num, increment, double };
};
