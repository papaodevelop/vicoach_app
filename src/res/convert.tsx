export function money(val: string | number) {
  if (val === 0) {
    return 'Miễn phí';
  } else {
    return Number(val).toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
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
export function txt4(val: string) {
  if (val?.length < 25) {
    return val;
  } else {
    return val?.substring(0, 24) + '...';
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
export const DateTimes = (val: any) => {
  var date = new Date(val);
  var formattedDate = date.toLocaleDateString('vi-VN', {
    month: 'long',
    day: 'numeric',
  });
  var formatTime = date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return formattedDate + ' | ' + formatTime;
};
export function convertByteToMB(byte: number) {
  const megabyte = byte / (1024 * 1024);
  const roundedMB = megabyte.toFixed(2);
  return roundedMB + ' MB';
}
export const normalizeString = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};
