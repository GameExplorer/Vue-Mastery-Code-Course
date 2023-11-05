<template>
    <div class="result">
        <div class="title"> {{  results[resultsIndex].title }}</div>
        <div class="desc">
            [[ results[resultsIndex].desc ]]
        </div>
    </div>
</template>

<script>
export default {
    props: ["results", "totalCorrect"],
    computed: {
        resultIndex() {
            let index = 0;

            // loop through the results
            this.results.forEach((e,i) => {
                if(e.min <= this.totalCorrect && e.max >= this.totalCorrect) { // if the totalCorrect is between the min and max of the result
                    index = i;
                }
            })
            return index;
        },
    },
}
</script>