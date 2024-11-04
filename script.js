document.addEventListener('DOMContentLoaded', () => {
  const htmlProgressInput = document.getElementById('html-progress');
  const htmlColorInput = document.getElementById('html-color');
  const cssProgressInput = document.getElementById('css-progress');
  const cssColorInput = document.getElementById('css-color');
  
  const htmlFill = document.querySelector('.html-fill');
  const cssFill = document.querySelector('.css-fill');

  // Function to update the progress bar width
  function updateProgressBar() {
      // HTML Progress
      const htmlProgress = htmlProgressInput.value;
      htmlFill.style.width = htmlProgress + '%';
      htmlFill.nextElementSibling.textContent = `HTML Skills - ${htmlProgress}%`;

      // CSS Progress
      const cssProgress = cssProgressInput.value;
      cssFill.style.width = cssProgress + '%';
      cssFill.nextElementSibling.textContent = `CSS Skills - ${cssProgress}%`;
  }

  // Event listeners for input changes
  htmlProgressInput.addEventListener('input', updateProgressBar);
  cssProgressInput.addEventListener('input', updateProgressBar);

  // Event listeners for color changes
  htmlColorInput.addEventListener('input', () => {
      htmlFill.style.background = htmlColorInput.value;
  });

  cssColorInput.addEventListener('input', () => {
      cssFill.style.background = cssColorInput.value;
  });

  // Initialize progress bar on page load
  updateProgressBar();
});

