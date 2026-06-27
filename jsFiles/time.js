const targetDate = new Date(2026, 6, 4, 20, 0, 0).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
      document.getElementById('countdown').innerText = "Project Launched!";
      clearInterval(countdownInterval); // Stops the timer from running
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  window.onload = function() {
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
  };

