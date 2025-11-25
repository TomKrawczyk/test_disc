class QuizApp {
    constructor() {
        this.currentQuestion = 1;
        this.totalQuestions = 16;
        this.answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
        this.init();
    }
    
    init() {
        this.updateProgress();
        this.displayQuestion();
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('finishBtn').addEventListener('click', () => this.finishQuiz());
    }
    
    displayQuestion() {
        const question = questionnaireData.find(q => q.id === this.currentQuestion);
        document.getElementById('questionNumber').textContent = this.currentQuestion;
        
        const optionsGrid = document.getElementById('optionsGrid');
        optionsGrid.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = `option-card ${option.color}`;
            
            const savedScore = this.answers[this.currentQuestion] ? this.answers[this.currentQuestion][index] : '';
            
            optionDiv.innerHTML = `
                <div class="option-header">
                    <h3>${option.text}</h3>
                    <input type="number" 
                           class="score-input" 
                           min="1" 
                           max="4" 
                           data-option="${index}"
                           value="${savedScore}"
                           placeholder="1-4">
                </div>
                <div class="option-description">
                    ${option.description.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
            `;
            
            optionsGrid.appendChild(optionDiv);
        });
        
        // Bind input events
        document.querySelectorAll('.score-input').forEach(input => {
            input.addEventListener('input', (e) => this.handleScoreInput(e));
            input.addEventListener('blur', () => this.validateCurrentQuestion());
        });
        
        this.validateCurrentQuestion();
        this.updateNavigationButtons();
    }
    
    handleScoreInput(event) {
        const input = event.target;
        const optionIndex = parseInt(input.dataset.option);
        const score = parseInt(input.value) || 0;
        
        // Validate input range
        if (score < 1 || score > 4) {
            input.value = '';
            return;
        }
        
        // Save answer
        if (!this.answers[this.currentQuestion]) {
            this.answers[this.currentQuestion] = {};
        }
        this.answers[this.currentQuestion][optionIndex] = score;
        
        // Save to localStorage
        localStorage.setItem('quizAnswers', JSON.stringify(this.answers));
        
        this.validateCurrentQuestion();
    }
    
    validateCurrentQuestion() {
        const currentAnswers = this.answers[this.currentQuestion] || {};
        const scores = Object.values(currentAnswers).filter(score => score >= 1 && score <= 4);
        
        // Check if we have exactly 4 scores and they are unique
        const isValid = scores.length === 4 && 
                       new Set(scores).size === 4 && 
                       scores.every(score => [1, 2, 3, 4].includes(score));
        
        const validationMessage = document.getElementById('validationMessage');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        
        if (isValid) {
            validationMessage.style.display = 'none';
            nextBtn.disabled = false;
            if (this.currentQuestion === this.totalQuestions) {
                finishBtn.disabled = false;
            }
        } else {
            validationMessage.style.display = 'block';
            nextBtn.disabled = true;
            finishBtn.disabled = true;
        }
        
        return isValid;
    }
    
    previousQuestion() {
        if (this.currentQuestion > 1) {
            this.currentQuestion--;
            this.updateProgress();
            this.displayQuestion();
        }
    }
    
    nextQuestion() {
        if (this.validateCurrentQuestion() && this.currentQuestion < this.totalQuestions) {
            this.currentQuestion++;
            this.updateProgress();
            this.displayQuestion();
        }
    }
    
    updateProgress() {
        const progress = (this.currentQuestion / this.totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('currentQuestion').textContent = this.currentQuestion;
        document.getElementById('totalQuestions').textContent = this.totalQuestions;
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        
        prevBtn.disabled = this.currentQuestion === 1;
        
        if (this.currentQuestion === this.totalQuestions) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            finishBtn.style.display = 'none';
        }
    }
    
    finishQuiz() {
        // Validate all questions are completed
        let allValid = true;
        for (let i = 1; i <= this.totalQuestions; i++) {
            const answers = this.answers[i] || {};
            const scores = Object.values(answers).filter(score => score >= 1 && score <= 4);
            if (scores.length !== 4 || new Set(scores).size !== 4) {
                allValid = false;
                break;
            }
        }
        
        if (allValid) {
            window.location.href = 'results.html';
        } else {
            alert('Proszę uzupełnić wszystkie pytania przed przejściem do wyników.');
        }
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new QuizApp();
});
