// Quiz Application Logic
class QuizApp {
    constructor() {
        this.currentMode = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.bookmarkedQuestions = new Set();
        this.timer = null;
        this.timeLeft = 5400; // 90 minutes in seconds
        this.startTime = null;
        
        // Load saved data
        this.loadSavedData();
        
        // Initialize
        this.init();
    }
    
    init() {
        this.showModeSelection();
    }
    
    // Load saved data from localStorage
    loadSavedData() {
        const saved = localStorage.getItem('quizProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.bookmarkedQuestions = new Set(data.bookmarkedQuestions || []);
        }
    }
    
    // Save data to localStorage
    saveData() {
        const data = {
            bookmarkedQuestions: Array.from(this.bookmarkedQuestions),
            userAnswers: this.userAnswers,
            currentMode: this.currentMode
        };
        localStorage.setItem('quizProgress', JSON.stringify(data));
    }
    
    // Show mode selection screen
    showModeSelection() {
        this.hideAllSections();
        document.getElementById('mode-selection').classList.add('active');
    }
    
    // Start quiz with selected mode
    startQuiz(mode) {
        this.currentMode = mode;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        
        // Get questions based on mode
        if (mode === 'review') {
            this.questions = this.getWrongQuestions();
            if (this.questions.length === 0) {
                alert('Bạn chưa có câu hỏi nào để ôn lại. Hãy làm bài thi thử trước!');
                return;
            }
        } else {
            this.questions = getRandomQuestions(50);
        }
        
        // Setup timer for test mode
        if (mode === 'test') {
            this.timeLeft = 5400; // 90 minutes
            this.startTimer();
            document.getElementById('timer-display').style.display = 'block';
        } else {
            document.getElementById('timer-display').style.display = 'none';
        }
        
        this.startTime = new Date();
        this.showQuizScreen();
        this.displayQuestion();
        this.updateProgress();
    }
    
    // Get questions that were answered incorrectly
    getWrongQuestions() {
        const wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers') || '[]');
        return quizData.filter(q => wrongAnswers.includes(q.id));
    }
    
    // Start timer
    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.finishQuiz();
            }
        }, 1000);
    }
    
    // Update timer display
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElement = document.getElementById('timer');
        timerElement.textContent = display;
        
        // Add warning classes
        if (this.timeLeft <= 300) { // 5 minutes
            timerElement.classList.add('timer-danger');
        } else if (this.timeLeft <= 600) { // 10 minutes
            timerElement.classList.add('timer-warning');
        }
    }
    
    // Show quiz screen
    showQuizScreen() {
        this.hideAllSections();
        document.getElementById('quiz-screen').classList.add('active');
        document.getElementById('total-questions').textContent = this.questions.length;
    }
    
    // Display current question
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        if (!question) return;
        
        // Update question info
        document.getElementById('question-num').textContent = this.currentQuestionIndex + 1;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('question-text').textContent = question.question;
        
        // Update bookmark button
        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (this.bookmarkedQuestions.has(question.id)) {
            bookmarkBtn.classList.add('bookmarked');
        } else {
            bookmarkBtn.classList.remove('bookmarked');
        }
        
        // Create answer options
        const answersGrid = document.getElementById('answers-grid');
        answersGrid.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.onclick = () => this.selectAnswer(index);
            
            // Check if this answer was selected
            if (this.userAnswers[question.id] === index) {
                answerDiv.classList.add('selected');
            }
            
            // Show correct/wrong in practice mode
            if (this.currentMode === 'practice' && this.userAnswers[question.id] !== undefined) {
                if (index === question.correct) {
                    answerDiv.classList.add('correct');
                } else if (this.userAnswers[question.id] === index) {
                    answerDiv.classList.add('wrong');
                }
            }
            
            answerDiv.innerHTML = `
                <div class="answer-label">${String.fromCharCode(65 + index)}</div>
                <div class="answer-text">${option}</div>
            `;
            
            answersGrid.appendChild(answerDiv);
        });
        
        // Show explanation in practice mode
        const explanationDiv = document.getElementById('explanation');
        if (this.currentMode === 'practice' && this.userAnswers[question.id] !== undefined) {
            document.getElementById('explanation-text').textContent = question.explanation;
            explanationDiv.style.display = 'block';
        } else {
            explanationDiv.style.display = 'none';
        }
        
        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').textContent = 
            this.currentQuestionIndex === this.questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp →';
    }
    
    // Select an answer
    selectAnswer(answerIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers[question.id] = answerIndex;
        
        // Save progress
        this.saveData();
        
        // Update display
        this.displayQuestion();
        this.updateProgress();
    }
    
    // Toggle bookmark
    toggleBookmark() {
        const question = this.questions[this.currentQuestionIndex];
        if (this.bookmarkedQuestions.has(question.id)) {
            this.bookmarkedQuestions.delete(question.id);
        } else {
            this.bookmarkedQuestions.add(question.id);
        }
        
        this.saveData();
        this.displayQuestion();
    }
    
    // Navigate to previous question
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.updateProgress();
        }
    }
    
    // Navigate to next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.updateProgress();
        } else {
            this.finishQuiz();
        }
    }
    
    // Update progress bar and stats
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        // Update stats
        let correct = 0, wrong = 0;
        this.questions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer !== undefined) {
                if (userAnswer === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            }
        });
        
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('wrong-count').textContent = wrong;
    }
    
    // Show question list
    showQuestionList() {
        this.hideAllSections();
        document.getElementById('question-list').classList.add('active');
        
        const questionGrid = document.getElementById('question-grid');
        questionGrid.innerHTML = '';
        
        this.questions.forEach((question, index) => {
            const questionItem = document.createElement('div');
            questionItem.className = 'question-item';
            questionItem.textContent = index + 1;
            questionItem.onclick = () => this.goToQuestion(index);
            
            // Add status classes
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer !== undefined) {
                questionItem.classList.add('answered');
                if (userAnswer === question.correct) {
                    questionItem.classList.add('correct');
                } else {
                    questionItem.classList.add('wrong');
                }
            }
            
            if (this.bookmarkedQuestions.has(question.id)) {
                questionItem.classList.add('bookmarked');
            }
            
            questionGrid.appendChild(questionItem);
        });
    }
    
    // Go to specific question
    goToQuestion(index) {
        this.currentQuestionIndex = index;
        this.showQuizScreen();
        this.displayQuestion();
        this.updateProgress();
    }
    
    // Hide question list
    hideQuestionList() {
        this.showQuizScreen();
    }
    
    // Finish quiz
    finishQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Calculate results
        let correct = 0, wrong = 0, skipped = 0;
        const wrongAnswers = [];
        
        this.questions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer === undefined) {
                skipped++;
            } else if (userAnswer === question.correct) {
                correct++;
            } else {
                wrong++;
                wrongAnswers.push(question.id);
            }
        });
        
        // Save wrong answers for review
        localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
        
        // Show results
        this.showResults(correct, wrong, skipped);
    }
    
    // Show results screen
    showResults(correct, wrong, skipped) {
        this.hideAllSections();
        document.getElementById('result-screen').classList.add('active');
        
        // Update result display
        document.getElementById('final-score').textContent = correct;
        document.getElementById('result-correct').textContent = correct;
        document.getElementById('result-wrong').textContent = wrong;
        document.getElementById('result-skip').textContent = skipped;
        
        // Calculate percentage and update score circle color
        const percentage = (correct / this.questions.length) * 100;
        const scoreCircle = document.querySelector('.score-circle');
        
        if (percentage >= 80) {
            scoreCircle.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        } else if (percentage >= 60) {
            scoreCircle.style.background = 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)';
        } else {
            scoreCircle.style.background = 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)';
        }
    }
    
    // Review answers
    reviewAnswers() {
        this.currentMode = 'review-answers';
        this.currentQuestionIndex = 0;
        this.showQuizScreen();
        this.displayReviewQuestion();
    }
    
    // Display question in review mode
    displayReviewQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        if (!question) return;
        
        // Update question info
        document.getElementById('question-num').textContent = this.currentQuestionIndex + 1;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('question-text').textContent = question.question;
        
        // Create answer options with results
        const answersGrid = document.getElementById('answers-grid');
        answersGrid.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            
            // Show correct answer
            if (index === question.correct) {
                answerDiv.classList.add('correct');
            }
            
            // Show user's answer
            if (this.userAnswers[question.id] === index && index !== question.correct) {
                answerDiv.classList.add('wrong');
            }
            
            answerDiv.innerHTML = `
                <div class="answer-label">${String.fromCharCode(65 + index)}</div>
                <div class="answer-text">${option}</div>
            `;
            
            answersGrid.appendChild(answerDiv);
        });
        
        // Always show explanation in review mode
        document.getElementById('explanation-text').textContent = question.explanation;
        document.getElementById('explanation').style.display = 'block';
        
        // Update navigation
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').textContent = 
            this.currentQuestionIndex === this.questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp →';
    }
    
    // Restart quiz
    restartQuiz() {
        this.showModeSelection();
    }
    
    // Go to home page
    goHome() {
        window.location.href = 'index.html';
    }
    
    // Hide all sections
    hideAllSections() {
        document.querySelectorAll('.quiz-section').forEach(section => {
            section.classList.remove('active');
        });
    }
}

// Global functions for HTML onclick events
let quizApp;

function startQuiz(mode) {
    quizApp.startQuiz(mode);
}

function toggleBookmark() {
    quizApp.toggleBookmark();
}

function previousQuestion() {
    if (quizApp.currentMode === 'review-answers') {
        if (quizApp.currentQuestionIndex > 0) {
            quizApp.currentQuestionIndex--;
            quizApp.displayReviewQuestion();
        }
    } else {
        quizApp.previousQuestion();
    }
}

function nextQuestion() {
    if (quizApp.currentMode === 'review-answers') {
        if (quizApp.currentQuestionIndex < quizApp.questions.length - 1) {
            quizApp.currentQuestionIndex++;
            quizApp.displayReviewQuestion();
        } else {
            quizApp.restartQuiz();
        }
    } else {
        quizApp.nextQuestion();
    }
}

function showQuestionList() {
    quizApp.showQuestionList();
}

function hideQuestionList() {
    quizApp.hideQuestionList();
}

function finishQuiz() {
    quizApp.finishQuiz();
}

function reviewAnswers() {
    quizApp.reviewAnswers();
}

function restartQuiz() {
    quizApp.restartQuiz();
}

function goHome() {
    quizApp.goHome();
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function() {
    quizApp = new QuizApp();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (!quizApp || !document.getElementById('quiz-screen').classList.contains('active')) {
        return;
    }
    
    // Number keys for answers
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        const question = quizApp.questions[quizApp.currentQuestionIndex];
        if (question && answerIndex < question.options.length) {
            quizApp.selectAnswer(answerIndex);
        }
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        previousQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    }
    
    // Space for bookmark
    if (e.key === ' ') {
        e.preventDefault();
        toggleBookmark();
    }
});