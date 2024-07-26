
let users = {};


const signUp = () => {
  let fullName = prompt("Enter your full name:");
  if (!usernameConditions(fullName)) {
    alert("Invalid full name. Please try again.");
    return;
  }

  let email = prompt("Enter your email:");
  if (!EmailConditions(email)) {
    alert("Invalid email. Please try again.");
    return;
  }

  let age = parseInt(prompt("Enter your age:"));
  if (!AgeConditions(age)) {
    alert("Invalid age. Please try again.");
    return;
  }

  let password = prompt("Enter a password:");
  if (!PasswordConditions(password)) {
    alert("Invalid password. Please try again.");
    return;
  }

  let confirmPassword = prompt("Confirm your password:");
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  users[email] = { fullName, age, password };
  alert("Account created successfully!");
};

const logIn = () => {
  let email = prompt("Enter your email:");
  let password = prompt("Enter your password:");

  if (users[email] && users[email].password === password) {
    alert("Logged in successfully!");
  } else {
    alert("Invalid email or password. Please try again.");
  }
};



