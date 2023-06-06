export const errUserName = `
Tên người dùng có thể chứa các chữ cái (a-z), số (0-9). Tên người dùng không được chứa dấu và (&), dấu bằng (=), dấu gạch dưới (_), dấu nháy đơn ('), dấu gạch ngang (-), dấu cộng (+), dấu phẩy (,), dấu ngoặc vuông (<,>), và dấu chấm (.).`;
export const errEmail = `Email không đúng định dạng`;
export const errPassWord = `Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt.Nó cũng đảm bảo rằng mật khẩu có độ dài từ 8 đến 24 ký tự và không chứa bất kỳ ký tự nào khác.`;
export const ErrValiEmail = `Tên người dùng hoặc email không tồn tại`;
const errors: any = {
  'username have already exists!': 'Tên người dùng đã tồn tại',
  'email have already exists!': 'Email đã tồn tại',
  'new_password_confirmation should not be empty':
    'Không được bỏ trống Xác nhận mật khẩu mới',
  'new_password_confirmation must match new_password':
    'Mật khẩu không mới và xác nhận mật khẩu không khớp',
  'current_password not match!': 'Mật khẩu cũ không đúng',
};

export function errexport(val: string) {
  return errors[val] || '';
}
export function kiemTraLoi(danhSachLoi: string[], chuoiKiemTra: string) {
  for (var i = 0; i < danhSachLoi.length; i++) {
    if (chuoiKiemTra.includes(danhSachLoi[i])) {
      return danhSachLoi[i];
    }
  }
  return '';
}
