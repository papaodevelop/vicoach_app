export function money(val: string | number) {
  if (typeof val === 'string') {
    return val;
  } else {
    return Number(val).toLocaleString('vi-VN') + 'đ';
  }
}
export function txt(val: string) {
  if (val.length < 10) {
    return val;
  } else {
    return val.substring(0, 9) + '...';
  }
}
export function txt1(val: string) {
  if (val.length < 33) {
    return val;
  } else {
    return val.substring(0, 30) + '...';
  }
}
