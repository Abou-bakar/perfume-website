//faq
// Accordion toggle logic

const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    // q.classList.toggle("active");
    const answer = q.nextElementSibling;
    const icon = q.querySelector("i");
    const isOpen = answer.classList.contains("open");

    // Close all others
    
    document.querySelectorAll(".answer.open").forEach((a) => {
      if (a !== answer) {
        a.style.maxHeight = null;
        a.classList.remove("open");

        // also remove 'active' from its question
        const otherQuestion = a.previousElementSibling;
        otherQuestion.classList.remove("active");

         // reset icon
        const otherIcon = otherQuestion.querySelector("i");
          otherIcon.classList.replace("fa-minus", "fa-plus");
      }
    });

    if (!isOpen) {
      // Expand smoothly to actual scrollHeight
      q.classList.add("active");
      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      // Collapse smoothly
      q.classList.remove("active");
      answer.classList.remove("open");
      answer.style.maxHeight = null;
      icon.classList.replace("fa-minus", "fa-plus");
    }
  });
});
