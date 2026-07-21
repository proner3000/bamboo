function switchOS(btnElement, targetOS) {
  const container = btnElement.closest('.lesson-pane');
  
  // Update button active state
  container.querySelectorAll('.os-btn').forEach(btn => btn.classList.remove('is-active'));
  btnElement.classList.add('is-active');

  // Toggle OS content visibility
  container.querySelectorAll('.os-pane').forEach(pane => {
    if (pane.getAttribute('data-os') === targetOS) {
      pane.style.display = 'block';
      pane.classList.add('is-active');
    } else {
      pane.style.display = 'none';
      pane.classList.remove('is-active');
    }
  });
}
function copyCode(buttonElement) {
  // Find the <code> tag inside the same container
  const codeText = buttonElement.parentElement.querySelector('code').innerText;
  
  // Copy to clipboard
  navigator.clipboard.writeText(codeText).then(() => {
    // Show temporary feedback on the button
    const originalText = buttonElement.innerText;
    buttonElement.innerText = "Copied!";
    buttonElement.style.background = "#28a745"; // Green indicator
    
    setTimeout(() => {
      buttonElement.innerText = originalText;
      buttonElement.style.background = "#333";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy code: ", err);
  });
}

function toggleLesson(headEl) {
        const card = headEl.closest(".lesson-merge-card");
        if (card.classList.contains("is-locked")) return;
        card.classList.toggle("is-open");
      }

      function switchTab(btn, paneName) {
        event.stopPropagation(); // Prevents collapsing the master card when clicking tabs
        const container = btn.closest(".lesson-card-body");
        container
          .querySelectorAll(".lesson-tab")
          .forEach((t) => t.classList.remove("is-active"));
        container
          .querySelectorAll(".lesson-pane")
          .forEach((p) => p.classList.remove("is-active"));
        btn.classList.add("is-active");
        container
          .querySelector(`.lesson-pane[data-pane="${paneName}"]`)
          .classList.add("is-active");
      }