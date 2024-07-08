<template>
    <div class="matchesContainer">
        <div class="leftSide">
            <h1>Take our quiz and let us recommend the best movies for you</h1>
            <div class="answers">
                <h3>What feeling best describes you right now?</h3>
                <label>
                    <input type="radio" name="q1" value="Happy" v-model="selectedEmoji" @change="onSelectionChange">
                    Happy
                </label>
                <label>
                    <input type="radio" name="q1" value="Sad" v-model="selectedEmoji" @change="onSelectionChange">
                    Sad
                </label>
                <label>
                    <input type="radio" name="q1" value="Excited" v-model="selectedEmoji" @change="onSelectionChange">
                    Excited
                </label>
                <label>
                    <input type="radio" name="q1" value="Bored" v-model="selectedEmoji" @change="onSelectionChange">
                    Bored
                </label>
            </div>

            <div class="answers">
                <h3>What feeling best describes you right now?</h3>
                <label>
                    <input type="radio" name="q1" value="Happy" v-model="selectedEmoji" @change="onSelectionChange">
                    Happy
                </label>
                <label>
                    <input type="radio" name="q1" value="Sad" v-model="selectedEmoji" @change="onSelectionChange">
                    Sad
                </label>
                <label>
                    <input type="radio" name="q1" value="Excited" v-model="selectedEmoji" @change="onSelectionChange">
                    Excited
                </label>
                <label>
                    <input type="radio" name="q1" value="Bored" v-model="selectedEmoji" @change="onSelectionChange">
                    Bored
                </label>
            </div>

            <div class="answers">
                <h3>What feeling best describes you right now?</h3>
                <label>
                    <input type="radio" name="q1" value="Happy" v-model="selectedEmoji" @change="onSelectionChange">
                    Happy
                </label>
                <label>
                    <input type="radio" name="q1" value="Sad" v-model="selectedEmoji" @change="onSelectionChange">
                    Sad
                </label>
                <label>
                    <input type="radio" name="q1" value="Excited" v-model="selectedEmoji" @change="onSelectionChange">
                    Excited
                </label>
                <label>
                    <input type="radio" name="q1" value="Bored" v-model="selectedEmoji" @change="onSelectionChange">
                    Bored
                </label>
            </div>

            <div class="answers">
                <h3>What feeling best describes you right now?</h3>
                <label>
                    <input type="radio" name="q1" value="Happy" v-model="selectedEmoji" @change="onSelectionChange">
                    Happy
                </label>
                <label>
                    <input type="radio" name="q1" value="Sad" v-model="selectedEmoji" @change="onSelectionChange">
                    Sad
                </label>
                <label>
                    <input type="radio" name="q1" value="Excited" v-model="selectedEmoji" @change="onSelectionChange">
                    Excited
                </label>
                <label>
                    <input type="radio" name="q1" value="Bored" v-model="selectedEmoji" @change="onSelectionChange">
                    Bored
                </label>
            </div>
            <button class="finish">
                <a href="/matches">Finish</a>
            </button>
        </div>
        <div class="rightSide">
            <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
        </div>
    </div>
    
  
</template>

<script>
export default {
    data() {
        return {
            selectedEmoji: ''
        };
    },
    methods: {
        onSelectionChange() {
            console.log('Selected emoji:', this.selectedEmoji);
            document.getElementById("list").classList.add("selected")
        }
    }
};
</script>

<style scoped>
 html, body {
        height: 100%;
        margin: 0;
        padding: 0;
   }

   .matchesContainer {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
   }

   .leftSide {
        height: 100%;
        width: 50%;
        display: block;
   }

   .rightSide {
        background: black;
        height: 100rem;
        width: 50%;
   }

   .matchWatchExpanded {
        width: 550px;
        margin-top: 320px;
        margin-left: 260px;
   }

    h3 {
        margin: 50px 20px 30px 10px;
    }

    .answers{
        display: inline-block;
    }
    label{
        margin-left: 20px;
    }
    .finish{
        margin: 70px;
        font-size:20px;
    }
</style>
