// Handle Sign Up Button (redirect to signup page)
document.querySelector('.signup-btn').addEventListener('click', () => {
  window.location.href = "signup.html"; // open the real signup page
});

// Handle Contact Button (redirect to contact form or email)
document.querySelector('.contact-btn').addEventListener('click', () => {
  window.location.href = "contact.html"; // open the real contact page
});

// Handle Browse All Button (redirect to browse all courses)
document.querySelector('.browse-btn').addEventListener('click', () => {
  window.location.href = "courses.html"; // open all courses page
});

// Handle navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const text = e.target.textContent.trim().toLowerCase();

    if (text === "home") {
      window.location.href = "index.html";
    } else if (text === "category") {
      window.location.href = "category.html"; // page for all categories
    } else if (text === "course") {
      window.location.href = "courses.html";  // page for all courses
    } else if (text === "sign up") {
      window.location.href = "signup.html";   // handled above but safe to repeat
    }
  });
});

// Handle Course Cards Click
document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const courseTitle = e.currentTarget.querySelector('h3').textContent;
    localStorage.setItem('selectedCourse', courseTitle); // save selected course
    window.location.href = "course-detail.html"; // open course detail page
  });
});
