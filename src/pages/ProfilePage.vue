<template>
    <div class="profileContainer">
       <div class="leftSide">
            <h2>
                Rate on scale of 1 to 4 how much you like the following things 
            </h2>
            <div class="question">
                <p>Horror movies</p>
                <div class="answers">
                    <label>
                        <input type="radio" name="q1" value="1" v-model="selectedEmoji" @change="onSelectionChange">
                        1
                    </label>
                    <label>
                        <input type="radio" name="q1" value="2" v-model="selectedEmoji" @change="onSelectionChange">
                        2
                    </label>
                    <label>
                        <input type="radio" name="q1" value="3" v-model="selectedEmoji" @change="onSelectionChange">
                        3
                    </label>
                    <label>
                        <input type="radio" name="q1" value="4" v-model="selectedEmoji" @change="onSelectionChange">
                        4
                    </label>
                </div>
            </div>

            <div class="question">
                <p>Romantic movies</p>
                <div class="answers">
                    <label>
                        <input type="radio" name="q2" value="1" v-model="selectedEmoji" @change="onSelectionChange">
                        1
                    </label>
                    <label>
                        <input type="radio" name="q2" value="2" v-model="selectedEmoji" @change="onSelectionChange">
                        2
                    </label>
                    <label>
                        <input type="radio" name="q2" value="3" v-model="selectedEmoji" @change="onSelectionChange">
                        3
                    </label>
                    <label>
                        <input type="radio" name="q2" value="4" v-model="selectedEmoji" @change="onSelectionChange">
                        4
                    </label>
                </div>
            </div>

            <div class="question">
                <p>Comedy movies</p>
                <div class="answers">
                    <label>
                        <input type="radio" name="q3" value="1" v-model="selectedEmoji" @change="onSelectionChange">
                        1
                    </label>
                    <label>
                        <input type="radio" name="q3" value="2" v-model="selectedEmoji" @change="onSelectionChange">
                        2
                    </label>
                    <label>
                        <input type="radio" name="q3" value="3" v-model="selectedEmoji" @change="onSelectionChange">
                        3
                    </label>
                    <label>
                        <input type="radio" name="q3" value="4" v-model="selectedEmoji" @change="onSelectionChange">
                        4
                    </label>
                </div>
            </div>

            <div class="question">
                <p>Harry Potter</p>
                <div class="answers">
                    <label>
                        <input type="radio" name="q4" value="1" v-model="selectedEmoji" @change="onSelectionChange">
                        1
                    </label>
                    <label>
                        <input type="radio" name="q4" value="2" v-model="selectedEmoji" @change="onSelectionChange">
                        2
                    </label>
                    <label>
                        <input type="radio" name="q4" value="3" v-model="selectedEmoji" @change="onSelectionChange">
                        3
                    </label>
                    <label>
                        <input type="radio" name="q4" value="4" v-model="selectedEmoji" @change="onSelectionChange">
                        4
                    </label>
                </div>
            </div>

            <div class="question">
                <p>Drama movies</p>
                <div class="answers">
                    <label>
                        <input type="radio" name="q5" value="1" v-model="selectedEmoji" @change="onSelectionChange">
                        1
                    </label>
                    <label>
                        <input type="radio" name="q5" value="2" v-model="selectedEmoji" @change="onSelectionChange">
                        2
                    </label>
                    <label>
                        <input type="radio" name="q5" value="3" v-model="selectedEmoji" @change="onSelectionChange">
                        3
                    </label>
                    <label>
                        <input type="radio" name="q5" value="4" v-model="selectedEmoji" @change="onSelectionChange">
                        4
                    </label>
                </div>
            </div>

            <div class="question">
                <p>Love stories</p>
                <div class="answers">
                    <label>
                        <input type="radio" name="q6" value="1" v-model="selectedEmoji" @change="onSelectionChange">
                        1
                    </label>
                    <label>
                        <input type="radio" name="q6" value="2" v-model="selectedEmoji" @change="onSelectionChange">
                        2
                    </label>
                    <label>
                        <input type="radio" name="q6" value="3" v-model="selectedEmoji" @change="onSelectionChange">
                        3
                    </label>
                    <label>
                        <input type="radio" name="q6" value="4" v-model="selectedEmoji" @change="onSelectionChange">
                        4
                    </label>
                </div>
            </div>
            <button>
                <a href="/quiz">
                    Finish
                </a>
            </button>
       </div>
       <div class="rightSide">
          <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
       </div>
    </div>
</template>

<script>
   export default{};    
</script>

<style>
.profileContainer{
    height: 100rem;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
}
.leftSide{
    height: 100%;
    width: 50%;
    margin-top: 50px;
    margin-left: 120px;
    margin-right: 0px; 
    display: block;
}
.rightSide{
    background: black;
    height: 100%;
    width:50%;
}
.matchWatchExpanded{
   width:550px;
   margin-top: 320px;
   margin-left:260px;
}
.answers {
    margin-left: 20px;
    display: flex;
    gap: 50px;
}
li{
  margin: 20px;
}
p{
    font-weight: 400;
    font-size: 25px;
}
.question{
    margin-top: 25px;
}
</style>