const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    
    // If the answer is already open, close it
    const isActive = answer.classList.contains('active');
    answer.classList.toggle('active', !isActive);
    question.setAttribute('aria-expanded', !isActive);

    // Toggle maxHeight based on active class
    if (!isActive) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }

    // Close other answers
    faqQuestions.forEach(otherQuestion => {
      if (otherQuestion !== question) {
        const otherAnswer = otherQuestion.nextElementSibling;
        if (otherAnswer.classList.contains('active')) {
          otherAnswer.classList.remove('active');
          otherAnswer.style.maxHeight = '0';
          otherQuestion.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
