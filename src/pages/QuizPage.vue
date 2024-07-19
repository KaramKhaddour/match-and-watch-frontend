<template>

    <div class="quizContainer" >
      <div class="content-container" :style="{opacity: showForm ? '1' : '0', transform: showForm ? 'translateY(0)' : 'translateY(100px)' }">
          <h1 class="quiz-title Raleway">Match +</h1>
          <div class="display-container flex flex-column justify-content-center align-items-center">
            <div class="flex flex-column justify-content-center question-header">
              <p class="question-number Inter mb-3">Question {{ (currentQuestionIndex + 1) }} of {{ quizArray.length }} </p>
              <p class="question Raleway mb-3">{{ currentQuestion.question }}</p>

            </div>
            <div v-if="currentQuestion.options.length" class="questions-container">
              <div v-for="(option, index) in currentQuestion.options" :key="index" :class="['Raleway','optionDes',{ 'selected-option': isSelected(option)}]">
                <input type="radio" :id="'option' + index" name="option" :value="option" v-model="selectedOption" class="Raleway optionDes">
                <label :for="'option' + index"  class="optionLabel">{{ option }}</label>
              </div>
            </div>
            <div v-else>
              <textarea type="text" v-model="userInput" rows="6" placeholder="Write whatever you want" class="inputText write-container">
                </textarea>
            </div>
            <div class="buttons">
              <button v-if="currentQuestionIndex > 0"  @click="previousQuestion" class="button Raleway previous-btn" >
              Previous
              </button>
              <button @click="nextQuestion" class="button Raleway next-btn" :class="{ 'finish-button': isLastQuestion }">
              {{ isLastQuestion ? 'Finish' : 'Next' }}
              </button>
            </div>

          </div>

      </div>


      <div class="blur-circle"></div>
      <div class="blur-circle"></div>
      <div class="films-container"></div>

    </div>

    <!-- <div class="black-box"></div> -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false,
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
      }
    },
    created(){
            setTimeout(() => {
                this.showForm = true;
            }, 300)
    },
    methods: {
      nextQuestion() {
        if (!this.isLastQuestion) {
          this.currentQuestionIndex++;
          this.selectedOption = '';
        } else {
          window.location.href = '/matche'; 
        }
      },
      previousQuestion() {
        if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
        }
      },
      isSelected(option) {
        if (this.selectedOption === option){
          console.log("hello");
        }
        return this.selectedOption === option;
    }
    },
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .quizContainer{
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* background-image: radial-gradient(
        #8C45FF,
      black
   ); */
   background: black;
}

.content-container{
  z-index: 1;
  transition: all 0.3s ease-in-out;
}

.quiz-title{
  font-size: 45px;
  z-index: 1;
  color: white;
  text-align: center;
  margin: 20px;
}

/* .quiz-title > h1 {
  box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.7);
} */

.question-header{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.question-number {
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.question {
  color: white;
  font-size: 20px;
  font-weight: 400;
}

.questions-container{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
  /* .quizContainer {
    height: 150vh;
    width: 100%;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(black, #8C45FF);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

  .blur-circle{
    display: inline-block;
    position: absolute;
    overflow:auto;
    height: 900px;
    width: 900px;
    transform: scale(0.9);
    opacity: 0.7;
    background-position-x: center;
    background-position-y: center;
    top: -15vh;
    left: 15vw;
    background: url(../assets/images/blur.png);
    z-index: 0;
}

.films-container{
    display: inline-block;
    position: absolute;
    overflow:auto;
    height: 729px;
    width: 1200px;
    transform: scale(0.9);
    opacity: 0.3;
    background-position-x: center;
    background-position-y: center;
    top: 10vh;
    background: url(../assets/images/films_container.png);
    z-index: 0;
}

.black-box{
    display: inline-block;
    position:relative;
    height: 50vh;
    width: 100%;
    background-color: black;
    z-index: -1;
}
  
  /* h1 {
    text-align: center;
    padding-top: 60px;
    font-size: 80px;
  } */
  
  .display-container {
    /* background-image: linear-gradient(#3c1e6b, black); */
    background: linear-gradient(180deg, #010002 0%, #361764 35%, #361764 50%, #361764 75%, #010002 100%);
    box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.7);
    box-shadow: inset 0px 0px 6px 7px rgba(0, 0, 0, 0.45);

    padding: 30px;
    width: 36vw;
    height: 500px;
    max-width: 600px;
    border-radius: 30px;
    z-index: 1;
    /* margin-top: 20px; */
  }
  

   
  .optionDes{
    width: 80%;
    height: 50px;
    margin: 10px;
    align-content: center;
    outline: 1px solid rgba(255, 255, 255, 0.25);
    outline-offset: -1px;
    border-radius: 30px;
    background: 3D3D3D;
    color: white;
    text-align: center;
    box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 40%);
    transition: all 0.3s ease-in-out;
  }

  .optionDes:hover{
    box-shadow: inset 0px 0px 6px 1px rgb(255, 255, 255);
    outline: 1px solid rgba(255, 255, 255, 0.5);
  }

  
    input[type="radio"] {
    display: none;
    }

    .optionLabel {
    display: block;
    padding: 10px;
    cursor: pointer;
    }

    /* input[type="radio"]:checked + .optionLabel {


    box-shadow: inset 0px 0px 6px 1px #8C45FF;
    outline: 1px solid rgba(255, 255, 255, 0.5);
    } */

    .selected-option{
    background: rgb(140, 69, 255, 0.4);
    color: #8C45FF;
    box-shadow: inset 0px 0px 6px 5px #8C45FF;
    outline: 1px solid #8C45FF;
    transition: all 0.3s ease-in-out;
    }

    .inputText{
        width: 500px;
        border: solid rgb(51, 44, 3) 1px;
        background-color: #33185f;
        text-align: left;
        color: white;
        padding: 20px;
        max-width: 100%;
        resize:none;
        box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 40%);
        transition: all 0.3s ease-in-out;
        outline: 1px solid rgba(255, 255, 255, 0.25);
        outline-offset: -1px;
        border-radius: 30px;
    }

    .inputText::placeholder{
      font-family: Raleway;
      color: rgba(255, 255, 255, 0.47);
    }
    .inputText:hover{
      
      box-shadow: inset 0px 0px 6px 5px #8C45FF;
      outline: 1px solid #8C45FF;
      transition: all 0.3s ease-in-out;
    }

    .optionDes{
    width: 80%;
    height: 50px;
    margin: 10px;
    align-content: center;
    outline: 1px solid rgba(255, 255, 255, 0.25);
    outline-offset: -1px;
    border-radius: 30px;
    background: 3D3D3D;
    color: white;
    text-align: center;
    box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 40%);
    transition: all 0.3s ease-in-out;
  }

  .optionDes:hover{
    box-shadow: inset 0px 0px 6px 1px rgb(255, 255, 255);
    outline: 1px solid rgba(255, 255, 255, 0.5);
  }

.buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px 0;
    
}
 .buttons > button{
    margin-top: 20px;
    width: fit-content;
    height: 40px;
    margin-left: 5px;
    /* background-image: radial-gradient(rgb(37, 7, 56) 70%, rgb(95, 16, 148));
    border: solid rgb(51, 44, 3) 1px;
    color: white;
    margin-left: 450px; */
  }


  .button{
    cursor: pointer;
    margin-bottom: 15px;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    line-height: 20px;
    letter-spacing: 0.5px;
}



.next-btn{
    background: rgba(140, 69, 255, 0.4);
    color: white;
    border: 2px transparent solid;
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
    padding: 4px 30px;
    margin: 0;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 25%);
}

.previous-btn{
    background: transparent;
    text-align: center;
    color: white;
    border: 2px transparent solid;
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
    padding: 4px 30px;
    margin: 0;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0px 0px 6px 1px rgba(255, 255, 255, 25%);
}

.next-btn:hover{
    background-color: transparent;
    color: #FFFFFF;
    border: 2px #FFFFFF solid;
}

.previous-btn:hover{
    background-color: transparent;
    color: #FFFFFF;
    border: 2px #FFFFFF solid;
}



  </style>
  

