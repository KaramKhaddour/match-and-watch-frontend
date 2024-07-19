<template>
  <div class="quizContainer">
    <h1>Match +</h1>
    <div class="display-container">
      <p class="question">{{ currentQuestion.question }}</p>
      <div class="options-container">
        <div v-if="currentQuestion.options.length">
          <div v-for="(option, index) in currentQuestion.options" :key="index" class="optionDes">
            <input type="radio" :id="'option' + index" name="option" :value="option" v-model="selectedOption" @change="nextQuestion">
            <label :for="'option' + index" class="optionLabel">{{ option }}</label>
          </div>
        </div>
        <div v-else>
          <input type="text" v-model="userInput" placeholder="Write whatever you want" class="inputText">
        </div>
      </div>
      <div class="button-container">
        <button v-if="currentQuestionIndex > 0" @click="previousQuestion" class="previous-button">
          Previous
        </button>
        <button @click="nextQuestion" :class="{ 'finish-button': isLastQuestion }">
          {{ isLastQuestion ? 'Finish' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      currentQuestionIndex: 0,
      selectedOption: '',
      userInput: '',
      quizArray: [
        { id: "0", question: "Do you want to start new session or join current one?", options: ["new", "join"] },
        { id: "1", question: "How do you feel now?", options: ["Scared", "Sad", "Happy", "Excited", "Frustrated", "Angry", "Tense", "Nostalgic"] },
        { id: "2", question: "What kind of show do you want to see?", options: ["Movie", "Series", "Anime", "Cartoon"] },
        { id: "3", question: "What show genre do you want to watch?", options: ['crime', 'history', 'reality', 'family', 'documentation', 'romance', 'comedy', 'european', 'sport', 'drama', 'thriller'] },
        { id: "4", question: "What are the avilable platforms for you?", options: ["HBO Max", "Netflix", "Amazon Prime", "Disney+", "Paramount"] },
        { id: "5", question: "What is the pregeeref release year for you?", options: ["After 2010", "After 1990", "After 1970", "Before 1970"] },
        { id: "6", question: "You can choose the age resriction for our recommendation", options: ["Okay for all", "PG-13", "R", "Adults only"] },
        { id: "5", question: "What is the preferred period of the show?", options: ["Between 1 and 1.5 hours", "Between 1.5 and 2 hours", "Between 2 and 3 hours", "Over 3 hours"] },
        { id: "6", question: "Write whatever you want", options: [] },
      ],
    };
  },
  computed: {
    currentQuestion() {
      return this.quizArray[this.currentQuestionIndex];
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.quizArray.length - 1;
    },
  },
  methods: {
    nextQuestion() {
      if (!this.isLastQuestion) {
        this.currentQuestionIndex++;
        this.selectedOption = '';
      } else {
        window.location.href = '/matches';
      }
    },
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
  },
};
</script>


<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.quizContainer {
  height: 110vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 80px;
}

.display-container {
  background-image: linear-gradient(black, #3c1e6b);
  padding: 20px;
  width: 75%;
  height: 800px;
  border-radius: 0.6em;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.question {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
}

.optionDes {
  border: solid 1px white;
  margin: 10px;
  height: 50px;
  width: 200px;
  align-content: center;
  border-radius: 5px;
  background: rgb(66, 58, 66);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

input[type="radio"] {
  display: none;
}

.optionLabel {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 50px;
}

input[type="radio"]:checked + .optionLabel {
  background-color: #33185f;
}

.inputText {
  height: 50px;
  width: 500px;
  border: solid rgb(51, 44, 3) 1px;
  background: rgb(66, 58, 66);
  color: white;
  padding: 10px;
}

.button-container {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  cursor: pointer;
}

button {
  width: 100px;
  height: 40px;
  background-image: radial-gradient(rgb(37, 7, 56) 70%, rgb(95, 16, 148));
  border: solid rgb(51, 44, 3) 1px;
  color: white;
}

.finish-button {
  background-color: #f00;
}

.previous-button {
  background-color: #007bff;
}
</style>
