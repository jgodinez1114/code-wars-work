function validate(password) {
    // check for any digit 0-9    any captial letter   any character   require 6 chars minimum
    return /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
  }

  // alternate solution 
  function validatePwd(password){
    return /^[A-Za-z0-9]{6,}$/.test(password) &&
           /[A-Z]+/           .test(password) &&
           /[a-z]+/           .test(password) &&
           /[0-9]+/           .test(password) ;
  }


  // tests
  describe("Tests", () => {
    it("test", () => {
  Test.expect(validate('djI38D55'), 'djI38D55 - Expected true');
  Test.expect(!validate('a2.d412'), 'a2.d412 - Expected false');
  Test.expect(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
  Test.expect(!validate('!fdjn345'), '!fdjn345 - Expected false');
  Test.expect(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
  Test.expect(!validate('123'), '123 - Expected false');
  Test.expect(!validate('abc'), 'abc - Expected false');
  Test.expect(validate('Password123'), 'Password123 - Expected true');
    });
  });

  