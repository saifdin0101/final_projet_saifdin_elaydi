
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



  if (users[email] && users[email].password === oldPassword) {
    if (newPassword === confirmNewPassword) {
      if (!PasswordConditions(newPassword)) {
        alert("Invalid new password. Please try again.");
        return;
      }
      users[email].password = newPassword;
      alert("Password changed successfully!");
    } else {
      alert("New passwords do not match. Please try again.");
    }
  } else {
    alert("Invalid email or password. Please try again.");
  }
;


  let choice = prompt("Choose an option:\n1. Sign up\n2. Log in\n3. Change password\n4. Exit");

  switch (choice) {
    case "1":
      signUp();
      break;
    case "2":
      logIn();
      break;
    case "3":
      changePassword();
      break;
    case "4":
      alert("Exiting program. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please try again.");
  }


