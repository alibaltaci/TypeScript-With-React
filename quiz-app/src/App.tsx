import { useQuizFunctions } from "./QuizFunctions";
import QuestionCard from "./components/QuestionCard"
import Results from "./components/Results";
import { TOTAL_QUESTIONS } from "./constants";

const App = () => {

  const {
    loading,
    questions,
    number,
    userAnswers,
    score,
    gameOver,
    startTrivia,
    checkAnswer  
  } = useQuizFunctions();

  return (
    <div className="App">
      
      <h1>Quizzy Hub</h1>
      
      { gameOver &&  <button className="start" onClick={startTrivia}>Start</button>}

      { questions.length > 0 && <p className="score">Score: {score}</p> }
      
      {loading && <p >Loading Questions...</p>}
      
      {!loading && !gameOver && (
        <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number]?.question}
        answers={questions[number]?.answers} 
        callback={checkAnswer} 
        userAnswers={userAnswers? userAnswers[number] : undefined}
        />
      )}

      { gameOver && <Results results={userAnswers} />}

      {/* {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      )} */}

    </div>
  )
}

export default App
