class QuizApp {
    constructor() {
        this.currentQuestion = 1;
        this.totalQuestions = 16;
        this.answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
        this.selectionOrder = []; // Track the order of selections
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
        document.getElementById('resetBtn').addEventListener('click', () => this.resetCurrentQuestion());
    }
    
    displayQuestion() {
        const question = questionnaireData.find(q => q.id === this.currentQuestion);
        document.getElementById('questionNumber').textContent = this.currentQuestion;
        
        const optionsGrid = document.getElementById('optionsGrid');
        optionsGrid.innerHTML = '';
        
        // Reset selection order for current question
        this.selectionOrder = [];
        
        // Load saved answers if they exist
        const savedAnswers = this.answers[this.currentQuestion] || {};
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = `option-card ${option.color}`;
            optionDiv.dataset.optionIndex = index;
            
            // Get saved selection order if exists
            const savedScore = savedAnswers[index] || 0;
            let selectionText = '';
            let isSelected = false;
            
            if (savedScore > 0) {
                const selectionNumber = 5 - savedScore; // Convert score back to selection order
                selectionText = `${selectionNumber}. wybór (${savedScore} pkt)`;
                isSelected = true;
                this.selectionOrder[selectionNumber - 1] = index;
            }
            
            optionDiv.innerHTML = `
                <div class="option-header">
                    <h3>${option.text}</h3>
                    <div class="selection-indicator ${isSelected ? 'selected' : ''}" data-option="${index}">
                        ${selectionText || 'Kliknij aby wybrać'}
                    </div>
                </div>
                <div class="option-description">
                    ${option.description.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
            `;
            
            // Add click event to the entire card
            optionDiv.addEventListener('click', (e) => this.handleOptionClick(index));
            
            optionsGrid.appendChild(optionDiv);
        });
        
        this.validateCurrentQuestion();
        this.updateNavigationButtons();
    }
    
    handleOptionClick(optionIndex) {
        // Check if this option is already selected
        const currentAnswers = this.answers[this.currentQuestion] || {};
        const currentScore = currentAnswers[optionIndex] || 0;
        
        // If already selected, do nothing (user must use reset button)
        if (currentScore > 0) {
            return;
        }
        
        // If we already have 4 selections, do nothing
        if (this.selectionOrder.length >= 4) {
            return;
        }
        
        // Add new selection automatically
        this.addSelection(optionIndex);
        
        this.updateDisplay();
        this.saveAnswers();
        this.validateCurrentQuestion();
    }
    
    addSelection(optionIndex) {
        if (this.selectionOrder.length < 4) {
            this.selectionOrder.push(optionIndex);
        }
    }
    
    updateDisplay() {
        const question = questionnaireData.find(q => q.id === this.currentQuestion);
        
        question.options.forEach((option, index) => {
            const optionCard = document.querySelector(`[data-option-index="${index}"]`);
            const indicator = optionCard.querySelector('.selection-indicator');
            
            const selectionIndex = this.selectionOrder.indexOf(index);
            
            if (selectionIndex > -1) {
                const selectionNumber = selectionIndex + 1;
                const score = 5 - selectionNumber; // 4, 3, 2, 1
                indicator.textContent = `${selectionNumber}. wybór (${score} pkt)`;
                indicator.classList.add('selected');
                optionCard.classList.add('option-selected');
            } else {
                indicator.textContent = 'Kliknij aby wybrać';
                indicator.classList.remove('selected');
                optionCard.classList.remove('option-selected');
            }
        });
    }
    
    saveAnswers() {
        if (!this.answers[this.currentQuestion]) {
            this.answers[this.currentQuestion] = {};
        }
        
        // Clear current answers
        const question = questionnaireData.find(q => q.id === this.currentQuestion);
        question.options.forEach((option, index) => {
            this.answers[this.currentQuestion][index] = 0;
        });
        
        // Set new answers based on selection order
        this.selectionOrder.forEach((optionIndex, selectionIndex) => {
            const score = 4 - selectionIndex; // 4, 3, 2, 1
            this.answers[this.currentQuestion][optionIndex] = score;
        });
        
        localStorage.setItem('quizAnswers', JSON.stringify(this.answers));
    }
    
    resetCurrentQuestion() {
        this.selectionOrder = [];
        if (this.answers[this.currentQuestion]) {
            delete this.answers[this.currentQuestion];
        }
        localStorage.setItem('quizAnswers', JSON.stringify(this.answers));
        this.updateDisplay();
        this.validateCurrentQuestion();
    }
    
    validateCurrentQuestion() {
        const isValid = this.selectionOrder.length === 4;
        
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
