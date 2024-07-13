<template>
    <div class="quizContainer">
      <h1>Match +</h1>
      <div class="display-container">
        <p class="question">{{ currentQuestion.question }}</p>
        <div v-if="currentQuestion.options.length">
          <div v-for="(option, index) in currentQuestion.options" :key="index" class="optionDes">
            <input type="radio" :id="'option' + index" name="option" :value="option" v-model="selectedOption">
            <label :for="'option' + index"  class="optionLabel">{{ option }}</label>
          </div>
        </div>
        <div v-else>
          <input type="text" v-model="userInput" placeholder="Write whatever you want" class="inputText">
        </div>
        <button @click="nextQuestion" :class="{ 'finish-button': isLastQuestion }">
          {{ isLastQuestion ? 'Finish' : 'Next' }}
        </button>
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
          { id: "0", question: "How do you feel now?", options: ["Sad", "Happy", "Excited", "Relaxed"] },
          { id: "1", question: "What kind of show do you want to see?", options: ["Movie", "Series", "Anime", "Cartoon"] },
          { id: "2", question: "What show genre do you want to watch?", options: ["Action", "Reality", "Romantic", "Comedy"] },
          { id: "3", question: "What is the preferred period of the show?", options: ["Between 1 and 1.5 hours", "Between 1.5 and 2 hours", "Between 2 and 3 hours", "Over 3 hours"] },
          { id: "4", question: "Write whatever you want", options: [] },
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
    height: 150vh;
    width: 100%;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(black, #8C45FF);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1 {
    text-align: center;
    padding-top: 60px;
    font-size: 80px;
  }
  
  .display-container {
    background-image: linear-gradient(#3c1e6b, black);
    padding: 20px;
    width: 80%;
    max-width: 600px;
    border-radius: 0.6em;
    margin-top: 20px;
  }
  
  button{
    margin-top: 20px;
    width: 100px;
    height: 40px;
    background-image: radial-gradient(rgb(37, 7, 56) 70%, rgb(95, 16, 148));
    border: solid rgb(51, 44, 3) 1px;
    color: white;
    margin-left: 450px;
  }
  .optionDes{
    border: solid 1px white;
    margin: 20px;
    height: 50px;
    align-content: center;
    border-radius: 5px;
    background: 3D3D3D;
    color: white;
    text-align: center;
  }
    input[type="radio"] {
    display: none;
    }

    .optionLabel {
    display: block;
    padding: 10px;
    cursor: pointer;
    }

    input[type="radio"]:checked + .optionLabel {
    background-color: #33185f;
    }
    .inputText{
        height: 50px;
        width: 500px;
        border: solid rgb(51, 44, 3) 1px;
        background-color: #33185f;
        color: white;
        padding: 10px;
    }
  </style>
  