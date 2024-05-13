module.exports = {
    formatDate: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
  };
  // still trying to understand the  code down below
  // why is it grayed out with different words at together?
  techblog_db: () => {
    const randomNum = Math.random();
    let techblog

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      techblog
    }
// trying to change this line of code to reflect the techblog
    return `<span for="img" aria-label="book">${techblog_db}</span>`;
  };
