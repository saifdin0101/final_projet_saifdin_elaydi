
let users = {};

const signUp = () => {
  let fullName = prompt("Enter your full name:").trim();
  fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();
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

  users = { fullName, age, email, password };
  alert("Account created successfully!");
};

const logIn = () => {
  let email = prompt("Enter your email:");
  let password = prompt("Enter your password:");

  if (users.email === email && users.password === password) {
    alert("Logged in successfully!");
  } else {
    alert("Invalid email or password. Please try again.");
  }
};

const usernameConditions = (name) => {
  if (name.length < 5) return false;
  if (/[0-9@!#$%^&*()_+=[\]{};':"\\|,.<>?]/.test(name)) return false;
  return true;
};

const EmailConditions = (email) => {
  if (email.trim() !== email) return false;
  if (email.toUpperCase() === email) return false;
  if (email.includes(' ')) return false;
  if (email.length < 10) return false;
  if (email.split('@').length !== 2) return false;
  return true;
};

const AgeConditions = (age) => {
  if (isNaN(age)) return false;
  if (age < 0) return false;
  return true;
};

const PasswordConditions = (password) => {
  if (password.trim() !== password) return false;
  if (password.includes(' ')) return false;
  if (!["@","#","-","+","*","/"].some(ele => password.includes(ele))) return false;
  if (password.length < 7) return false;
  return true;
};

const changePassword = () => {
  let email = prompt("Enter your email:");
  let oldPassword = prompt("Enter ur old password:");
  let newPassword = prompt("Enter ur new password:");
  let confirmNewPassword = prompt("Confirm ur new password:");

  if (users.email === email && users.password === oldPassword) {
    if (newPassword === confirmNewPassword) {
      if (!PasswordConditions(newPassword)) {
        alert("Invalid new password. Please try again.");
        return;
      }
      users.password = newPassword;
      alert("Password changed successfully!");
    } else {
      alert("New passwords do not match. Please try again.");
    }
  } else {
    alert("Invalid email or password. Please try again.");
  }
};

while (true) {
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
      alert("bye bye  see u soon");
      break;
    default:
      alert(" u didnt choose any of the option so you left ");
  }
  if (choice === "4") break;
}
