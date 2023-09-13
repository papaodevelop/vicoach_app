export function isRequired(str = '') {
  if (str !== null) {
    return !(str.trim().length === 0);
  }
  return false;
}
export function validateEmail(email: string) {
  let status = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  if (status) {
    return true;
  }
  return false;
}
export function validateUsername(username: string) {
  const regex = /^[a-z0-9]+(\.[a-z0-9]+)*$/;
  const forbiddenChars = /&|=|_|'|-|\+|,|<|>/;

  if (!regex.test(username) || forbiddenChars.test(username)) {
    return false;
  }

  return true;
}

export function validatePassword(password: string) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z\d!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,24}$/;

  if (!regex.test(password)) {
    return false;
  }

  return true;
}
export function validateInputFields(inputs: {email: string; password: string}) {
  const errors = {
    email: '',
    password: '',
  };

  // Kiểm tra trường nhập email
  if (!inputs.email || inputs.email.trim() === '') {
    errors.email = 'Vui lòng nhập tài khoản';
  }
  // Kiểm tra trường nhập mật khẩu
  if (!inputs.password || inputs.password.trim() === '') {
    errors.password = 'Vui lòng nhập mật khẩu';
  } else if (inputs.password.length < 6) {
    errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
  }

  return errors;
}
