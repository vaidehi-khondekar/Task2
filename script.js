// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('response');

  if (!name || !email || !message) {
    response.textContent = "Please fill in all fields!";
    response.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    response.textContent = "Enter a valid email!";
    response.style.color = "red";
    return;
  }

  response.textContent = "Form submitted successfully!";
  response.style.color = "green";
  this.reset();
});

// To-Do List Functionality
const addTaskBtn = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '✖';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
});
