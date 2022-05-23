const form = document.querySelector("form");

function getEle(id) {
  return document.querySelector(id);
}

var dsnv = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();

function setLocalStorage() {
  // Convert data form Json to String
  var dataString = JSON.stringify(dsnv.arr);
  // Lưu xuống local storage
  localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var dataString = localStorage.getItem("DSNV");
    // Convert data form String to Json
    var dataJson = JSON.parse(dataString);
    dsnv.arr = dataJson;
    inRaBang(dsnv.arr);
  }
}

function layThongTinNhanVien(isAdd) {
  // DOM innerHTMLnerHTML
  var _taiKhoan = getEle("#tknv").value;
  var _name = getEle("#name").value;
  var _email = getEle("#email").value;
  var _password = getEle("#password").value;
  var _ngayLam = getEle("#datepicker").value;
  var _luongCB = getEle("#luongCB").value;
  var _chucVu = getEle("#chucvu").value;
  var _gioLam = getEle("#gioLam").value;

  // Flag
  var isValid = true;

  // Check Validation
  // Tài khoản
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(_taiKhoan, "#tbTKNV", "Vui lòng nhập tài khoản") &&
      validation.kiemTraDoDaiKyTu(
        _taiKhoan,
        4,
        6,
        "#tbTKNV",
        "Vui lòng nhập tài khoản từ 4 đến 6 ký số"
      ) &&
      validation.kiemTraKySo(_taiKhoan, "#tbTKNV", "Vui lòng nhập số") &&
      validation.kiemTraTrung(
        _taiKhoan,
        dsnv.arr,
        "#tbTKNV",
        "Tài khoản đã tồn tại"
      );
  }

  // Tên nhân viên
  isValid &=
    validation.kiemTraRong(_name, "#tbTen", "Vui lòng nhập tên") &&
    validation.kiemTraKyTu(_name, "#tbTen", "Vui lòng nhập chữ");

  // Email
  isValid &=
    validation.kiemTraRong(_email, "#tbEmail", "Vui lòng nhập email") &&
    validation.kiemTraEmail(
      _email,
      "#tbEmail",
      "Vui lòng nhập đúng định dạng email"
    );

  // Mật Khẩu
  isValid &=
    validation.kiemTraRong(_password, "#tbMatKhau", "Vui lòng nhập mật khẩu") &&
    validation.kiemTraDoDaiKyTu(
      _password,
      8,
      10,
      "#tbMatKhau",
      "Vui lòng nhập mật khẩu từ 8 đến 10 ký tự"
    ) &&
    validation.kiemTraMatKhau(
      _password,
      "#tbMatKhau",
      "Vui lòng nhập mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );

  // Ngày làm
  isValid &= validation.kiemTraRong(
    _ngayLam,
    "#tbNgay",
    "Vui lòng chọn ngày làm"
  );
  // &&
  // validation.kiemTraNgay(
  //   _ngayLam,
  //   "#tbNgay",
  //   "Vui lòng chọn ngày làm đúng định dạng"
  // );

  // Lương cơ bản
  isValid &=
    validation.kiemTraRong(
      _luongCB,
      "#tbLuongCB",
      "Vui lòng nhập lương cơ bản"
    ) &&
    validation.kiemTraMinMax(
      _luongCB,
      1000000,
      20000000,
      "#tbLuongCB",
      "Vui lòng nhập lương cơ bản từ 1 000 000 đến 20 000 000"
    );

  // Chức vụ
  isValid &= validation.kiemTraChucVu(
    "#chucvu",
    "#tbChucVu",
    "Vui lòng chọn chức vụ"
  );

  // Giờ làm
  isValid &=
    validation.kiemTraRong(_gioLam, "#tbGiolam", "Vui lòng nhập giờ làm") &&
    validation.kiemTraMinMax(
      _gioLam,
      80,
      200,
      "#tbGiolam",
      "Vui lòng nhập giờ làm từ 80 đến 200"
    );

  //Check isValid
  if (!isValid) {
    return;
  }

  // Instance
  var nhanVien = new NhanVien(
    _taiKhoan,
    _name,
    _email,
    _password,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );

  // Gọi Method
  nhanVien.tinhTongLuong();
  nhanVien.xepLoaiNhanVien();

  return nhanVien;
}

function inRaBang(data) {
  var content = "";
  data.forEach(function (item) {
    content += `
    <tr>
    <td> ${item.taiKhoan} </td>
    <td> ${item.name} </td>
    <td> ${item.email} </td>
    <td> ${item.ngayLam} </td>
    <td> ${item.chucVu} </td>
    <td> ${item.tongLuong} </td>
    <td> ${item.loaiNhanVien} </td>
    <td onclick="suaNV('${item.taiKhoan}')" class="btn btn-info" style="width:50%;" data-toggle="modal" data-target="#myModal"> Sửa </td>
    <td onclick="xoaNV('${item.taiKhoan}')" class="btn btn-danger" style="width:50%;"> Xóa </td>
    </tr>
    `;
  });

  getEle("#tableDanhSach").innerHTML = content;
}

// Thêm nhân viên
getEle("#btnThemNV").onclick = function () {
  var nhanVien = layThongTinNhanVien(true);

  if (nhanVien) {
    dsnv.themNV(nhanVien);

    inRaBang(dsnv.arr);

    setLocalStorage();
    form.reset();
  }
};

// Xóa nhân viên
function xoaNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);
  inRaBang(dsnv.arr);
  setLocalStorage();
}

// Sửa
function suaNV(taiKhoan) {
  // getEle("#btnThemNV").style.display = "none"; // cho hiện lại ở đâu ?
  var sv = dsnv.suaNV(taiKhoan);
  if (sv) {
    getEle("#tknv").value = sv.taiKhoan;
    getEle("#name").value = sv.name;
    getEle("#email").value = sv.email;
    getEle("#password").value = sv.password;
    getEle("#datepicker").value = sv.ngayLam;
    getEle("#luongCB").value = sv.luongCB;
    getEle("#chucvu").value = sv.chucVu;
    getEle("#gioLam").value = sv.gioLam;
  }
  // Disable
  getEle("#tknv").disabled = true;

  getEle("#btnThemNV").style.display = "none";
}

// Cập nhật
getEle("#btnCapNhat").onclick = function () {
  var nhanVien = layThongTinNhanVien(false);
  dsnv.capNhatNV(nhanVien);
  inRaBang(dsnv.arr);
  setLocalStorage();
  form.reset();
};

// Tìm kiếm

getEle("#searchName").addEventListener("keyup", function () {
  var keyword = getEle("#searchName").value;
  var mangTimKiem = dsnv.timKiemNV(keyword);
  inRaBang(mangTimKiem);
});

getEle("#btnThem").onclick = function () {
  getEle("#btnThemNV").style.display = "inline-block";
  getEle("#tknv").disabled = false;
};
