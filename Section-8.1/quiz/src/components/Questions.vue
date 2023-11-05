<template>
<div class="questions-ctr">
        <div class="progress">
            <div class="bar" :style="{ width: `${(questionsAnswered / questions.length) * 100}%`}"></div>
            <div class="status">{{ questionsAnswered }} out of {{ questions.length }} questions answered</div>
        </div>
        <TransitionGroup name="fade">
            <div class="single-question" v-for="(question, qi) in questions" :key="question.q" v-show="questionsAnswered === qi"> <!-- loop through the questions :key binds attribute
            question so nothing strange happens, qi = question index-->
                <div class="question"> {{  question.q }}</div>
                <div class="answers">
                    <div class="answer" v-for="answer in question.answers" :key="answer.text"
                    @click.prevent="selectAnswer(answer.is_correct)">
                        {{ answer.text }}</div> <!-- loop through the answers -->
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    props: ["questions", "questionsAnswered"], // we'll pass in the questions from App.vue
    emits: ['question-answered'], // we'll emit this event to the parent   
    methods: {
        selectAnswer(is_correct) {
            this.$emit('question-answered', is_correct) // emit the event to the parent
        }
    }
}
</script>