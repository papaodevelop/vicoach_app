export function money(val: string | number) {
  if (typeof val === 'string') {
    return val;
  } else {
    return Number(val).toLocaleString('vi-VN') + '$';
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
export function txt3(val: string) {
  if (val.length < 20) {
    return val;
  } else {
    return val.substring(0, 19) + '...';
  }
}
export function txt2(val: string) {
  if (val.length < 50) {
    return val;
  } else {
    return val.substring(0, 48) + '...';
  }
}
export function txt1Blog(val: string) {
  if (val.length < 100) {
    return val;
  } else {
    return val.substring(0, 99) + '...';
  }
}
export const Time = (remainingTime: number) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};
