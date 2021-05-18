function validate(password) {
    // check for any digit 0-9    any captial letter   any character   require 6 chars minimum
    return /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
  }