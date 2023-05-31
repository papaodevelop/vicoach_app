export function money(val: string | number) {
  if (val === 0) {
    return 'Free';
  } else {
    return '$' + Number(val).toLocaleString('en-US');
  }
}
export function txt(val: string) {
  if (val?.length < 10) {
    return val;
  } else {
    return val?.substring(0, 9) + '...';
  }
}
export function txt1(val: string) {
  if (val?.length < 33) {
    return val;
  } else {
    return val?.substring(0, 30) + '...';
  }
}
export function txt3(val: string) {
  if (val?.length < 20) {
    return val;
  } else {
    return val?.substring(0, 19) + '...';
  }
}
export function txt2(val: string) {
  if (val?.length < 50) {
    return val;
  } else {
    return val?.substring(0, 48) + '...';
  }
}
export function txt1Blog(val: string) {
  if (val?.length < 100) {
    return val;
  } else {
    return val?.substring(0, 99) + '...';
  }
}
export const Time = (remainingTime: number) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};
export const DateTime = (val: string) => {
  var date = new Date(val);
  var formattedDate = date.toLocaleDateString('vi-VN');
  return formattedDate;
};
export const DateTimes = (val: string) => {
  var date = new Date(val);
  var formattedDate = date.toLocaleDateString('vi-VN');
  var formatTime = date.toLocaleTimeString('vi-VN');
  return formattedDate + ' ' + formatTime;
};
export function convertByteToMB(byte: number) {
  const megabyte = byte / (1024 * 1024);
  const roundedMB = megabyte.toFixed(2);
  return roundedMB + ' MB';
}
