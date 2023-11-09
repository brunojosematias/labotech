class AccountAlreadyExistsError extends Error {
  constructor() {
    super("E-mail alredy exists!");
  }
}

class UserAlreadyExistsError extends Error {
  constructor() {
    super("User not found!");
  }
}

class NameExists extends Error {
  constructor() {
    super("Name is required!");
  }
}

class SurnameExists extends Error {
  constructor() {
    super("surname is required!");
  }
}

class EmailExists extends Error {
  constructor() {
    super("E-mail is required!");
  }
}

class PasswordExists extends Error {
  constructor() {
    super("Password is required!");
  }
}

class VerifyEmailAndPassword extends Error {
  constructor() {
    super("Email or password incorrect!");
  }
}

class ValidateEmail extends Error {
  constructor() {
    super("Invalid email!");
  }
}

class ValidateRefreshToken extends Error {
  constructor() {
    super("Refresh token invalid!");
  }
}

// class VerifyToken extends Error {
//   constructor() {
//     super("verify token");
//   }
// }

// class ValidateToken extends Error {
//   constructor() {
//     super("Invalid token!");
//   }
// }

export {
  AccountAlreadyExistsError,
  UserAlreadyExistsError,
  SurnameExists,
  NameExists,
  EmailExists,
  PasswordExists,
  VerifyEmailAndPassword,
  ValidateEmail,
  ValidateRefreshToken,
  // VerifyToken,
  // ValidateToken,
};
