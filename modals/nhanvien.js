function NhanVien(
  _taiKhoan,
  _name,
  _email,
  _password,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  // Property
  this.taiKhoan = _taiKhoan;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loaiNhanVien = "";

  // Method
  this.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = this.luongCB * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = this.luongCB * 2;
    } else if (this.chucVu === "Nhân viên") {
      this.tongLuong = this.luongCB;
    }
  };
  this.xepLoaiNhanVien = function () {
    if (this.gioLam >= 192) {
      this.loaiNhanVien = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      this.loaiNhanVien = "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      this.loaiNhanVien = "Nhân viên khá";
    } else {
      this.loaiNhanVien = "Nhân viên trung bình";
    }
  };
}
