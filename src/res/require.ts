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
export function isValidVietnamesePhoneNumber(phoneNumber: string) {
  // Biểu thức chính quy cho số điện thoại Việt Nam theo định dạng cụ thể
  var vietnamesePhoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})\b/g;

  // Sử dụng test() để kiểm tra chuỗi với biểu thức chính quy.
  return vietnamesePhoneRegex.test(phoneNumber);
}
export function validatePassword(password: string) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z\d!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,24}$/;

  if (!regex.test(password)) {
    return false;
  }

  return true;
}
