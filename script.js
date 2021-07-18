 

// --------------------------------------------------------------------------------------------------
// All Button Functions

// start the quiz
function handleStartButton() {
  $("#startHere").on("click", function(event) {
    STORE.quizStarted = true;
    render();
  });
};

//Next button 
function handleNextQuestionClick() {
  $('body').on('click', '#next-question-btn', (event) => {
    render();
  });
};

// Checking if question is correct or false
function handleQuestionFormSubmission() {
  $('body').on('submit', '#question-form', function (event) {
    event.preventDefault();
    const currentQuestion = STORE.questions[STORE.currentQuestion];

    // get value from checkbox checked by user
    let selectedOption = $('input[name=options]:checked').val();
    // This makes a id with the number of the selected answer 


    let optionContainerId = `#option-container-${currentQuestion.answers.findIndex(i => i === selectedOption)}`;

    if (selectedOption === currentQuestion.correctAnswer) {
      STORE.score++;
      $(optionContainerId).append(generateFeedbackHTML('correct'));
    }
    else {
      $(optionContainerId).append(generateFeedbackHTML('incorrect'));
    }
    STORE.currentQuestion++;

    // hide the submit button
    $('#submit-answer-btn').hide();

    // disable all inputs
    $('input[type=radio]').each(() => {
      $('input[type=radio]').attr('disabled', true);
    });

    // show the next button
    $('#next-question-btn').show();

  });
};

// --------------------------------------------------------------------------------------------------

function generateStartScreenHtml() {
  return `
    <div class="start-screen">
     <body>
     <div class="mainChanges">
      <section id="startQuizPage">
      <header class="questionHeader">
        <h1 class="mainH1">Magic The Gathering Quiz</h1>
      </header>
      
      <button type="button" id="startHere">Start Quiz</button>

      <h3>Welcome to my MTG quiz app,
        To begin click the button above.</h3>
      <div class="mainImgHolder">
        <div>
        <img alt="Magic the gathering LOGO" src="Pictures/magic-logo.jpg" class="mainPageImg">
        <img alt="Wizards of the coast Logo" src="Pictures/magic-logo-2.jpg" class="mainPageImg">
      </div>
      </div>
      </section>
     </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------------------------------

// Generate answers for a specific question

function generateAnswersSheet() {
  const storedAnswers = STORE.questions[STORE.currentQuestion].answers
  let answerSheet = '';
  let i = 0;

  storedAnswers.forEach(answer => {
    answerSheet += `
    <div id="option-container-${i}">
      <input type="radio" name="options" id="option${i + 1}" value="${answer}" tabindex="${i + 1}"required>
      <label for="option${i + 1}"> ${answer}</label>
    </div>
  `;
  i++;
  });
  return answerSheet;
};

// ---------------------------------------------------------------------------------------------------

// Generate first/next question

function generateQuestionSheet() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  let currentPicture = STORE.questionImages[STORE.currentQuestion];
  let currentPictureAlt = STORE.questionImgAlts[STORE.currentQuestion];
  return `
    <form id="question-form" class="question-form">
      <fieldset>
        <div class="question">
          <legend> ${currentQuestion.question}</legend>
        </div>
        <img src='${currentPicture}' class="questionImg">
        <div class="options">
          <div class="answers">
            ${generateAnswersSheet()}
          </div>
            <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
            <button type="button" id="next-question-btn" tabindex="6"> Next &gt;></button>
        </div>
      </fieldset>
    </form >
  `;
};

// ---------------------------------------------------------------------------------------------------

// Generate question number

function generateQuestionNumber() {
  return `
    <ul class="totalQuestionsAndScore">
      <li id="question-number">
        Q. ${STORE.currentQuestion + 1}/${STORE.questions.length}
      </li>
      <li id="score">
        Score: ${STORE.score}/${STORE.questions.length}
      </li>
    </ul>
  `;
};

// ---------------------------------------------------------------------------------------------------

// Generate results screen

function generateResultsScreen() {
  return `
    <div class="results">
      <form id="restartAndResults">
        <fieldset>
          <div class="scoreRow">
            <div class="yourScore">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="restartRow">
            <div class="restartYourQuiz">
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>
  `;
};

// -------------------------------------------------------------------------------------------------

// Answer feedback

function generateFeedbackHTML(answerStatus) {
  let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <div class="right-answer">Good Job!</div>
    `;
  }
  else if (answerStatus === 'incorrect') {
    html = `
      <div class="wrong-answer">Sorry, The correct answer is ("${correctAnswer}")</div>
    `;
  }
  return html;
};

// -------------------------------------------------------------------------------------------------

// Render everythingotron 2000

function render() {
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(generateStartScreenHtml());
    return;
  }
  else if (STORE.currentQuestion >= 0 && STORE.currentQuestion < STORE.questions.length) {
    html = generateQuestionNumber();
    html += generateQuestionSheet();
    $('main').html(html);
  }
  else {
    $('main').html(generateResultsScreen());
  }
};

// ------------------------------------------------------------------------------------------------

// Reset quiz values / restarting quiz

function restartQuiz() {
  STORE.quizStarted = false;
  STORE.currentQuestion = 0;
  STORE.score = 0;
};

function handleRestartButtonClick() {
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
};

// ------------------------------------------------------------------------------------------------


function handleFunctions() {
  render();
  handleStartButton();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
};

$(handleFunctions());