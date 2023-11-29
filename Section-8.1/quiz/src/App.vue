<template>
  <div class="ctr">
    <Transition name="fade" mode="out-in">
      <Questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
      />
      <!-- v-if checks if we answered questions, we pass down the question array -->

      <Results v-else :results="results" :totalCorrect="totalCorrect" />
      <!-- if we answered the question show the results -->
    </Transition>
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
      v-if="questionsAnswered === questions.length"
    >
      Reset
    </button>
    <!-- reset button -->
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Questions,
    Results,
  },
  data() {
    return {
      questionsAnswered: 0, // we haven't answered any questions yet
      totalCorrect: 0, // we haven't answered any questions correctly yet
      questions: [
        {
          q: "What is 2 + 2?",
          answers: [
            {
              text: "4",
              is_correct: true,
            },
            {
              text: "3",
              is_correct: false,
            },
            {
              text: "Fish",
              is_correct: false,
            },
            {
              text: "5",
              is_correct: false,
            },
          ],
        },
        {
          q: 'How many letters are in the word "Banana"?',
          answers: [
            {
              text: "5",
              is_correct: false,
            },
            {
              text: "7",
              is_correct: false,
            },
            {
              text: "6",
              is_correct: true,
            },
            {
              text: "12",
              is_correct: false,
            },
          ],
        },
        {
          q: "Find the missing letter: C_ke",
          answers: [
            {
              text: "e",
              is_correct: false,
            },
            {
              text: "a",
              is_correct: true,
            },
            {
              text: "i",
              is_correct: false,
            },
          ],
        },
      ],
      results: [
        {
          min: 0,
          max: 2,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!",
        },
        {
          min: 3,
          max: 3,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!",
        },
      ],
    };
  },
  methods: {
    questionAnswered(is_correct) {
      if (is_correct) {
        this.totalCorrect++; // if the answer is correct, increment the totalCorrect
      }

      this.questionsAnswered++; // increment the questionsAnswered
    },
    reset() {
      this.questionsAnswered = 0; // reset the questionsAnswered
      this.totalCorrect = 0; // reset the totalCorrect
    },
  },
};
</script>