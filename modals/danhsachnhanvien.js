function DanhSachNhanVien() {
  this.arr = [];

  this.timViTri = function (taiKhoan) {
    var i = -1;
    this.arr.forEach(function (item, index) {
      if (item.taiKhoan === taiKhoan) {
        i = index;
        return i;
      }
    });
  };

  this.themNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  this.xoaNV = function (taiKhoan) {
    var i = this.timViTri(taiKhoan);
    if (i !== -1) {
      this.arr.splice(i, 1);
    }
  };

  this.suaNV = function (taiKhoan) {
    var i = this.timViTri(taiKhoan);
    if (i !== -1) {
      return this.arr[i];
    }
    return null;
  };

  this.capNhatNV = function () {};
}
