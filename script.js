const searchBar = document.getElementById("searchBar");
    const faqItems = document.querySelectorAll(".faq-item");
    let currentlyOpen = null;

    faqItems.forEach(item => {
      const question = item.querySelector(".question");
      const answer = item.querySelector(".answer");

      question.addEventListener("click", () => {
        // Close any previously opened answer
        if (currentlyOpen && currentlyOpen !== answer) {
          currentlyOpen.style.display = "none";
        }

        // Toggle current answer
        if (answer.style.display === "block") {
          answer.style.display = "none";
          currentlyOpen = null;
        } else {
          answer.style.display = "block";
          currentlyOpen = answer;
        }
      });
    });

    // Filter questions
    searchBar.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      faqItems.forEach(item => {
        const text = item.querySelector(".question").textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });