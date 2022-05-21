function getEle(id) {
  return document.querySelector(id);
}

var dsnv = new DanhSachNhanVien();

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
    taoBang(dsnv.arr);
  }
}

function layThongTinNhanVien() {
  // DOM value
  var _taiKhoan = getEle("#tknv").value;
  var _name = getEle("#name").value;
  var _email = getEle("#email").value;
  var _password = getEle("#password").value;
  var _ngayLam = getEle("#datepicker").value;
  var _luongCB = getEle("#luongCB").value;
  var _chucVu = getEle("#chucvu").value;
  var _gioLam = getEle("#gioLam").value;

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
    <td onclick="capNhatNV()" class="btn btn-info" style="width:50%;" data-toggle="modal" data-target="#myModal"> Sửa </td>
    <td onclick="xoaNV('${item.taiKhoan}')" class="btn btn-danger" style="width:50%;"> Xóa </td>
    </tr>
    `;
  });

  getEle("#tableDanhSach").innerHTML = content;
}

// Thêm nhân viên
getEle("#btnThemNV").onclick = function () {
  var nhanVien = layThongTinNhanVien();

  dsnv.themNV(nhanVien);

  inRaBang(dsnv.arr);

  setLocalStorage();
};

// Xóa nhân viên
function xoaNV(taiKhoan) {
  console.log(dsnv.arr);
  dsnv.xoaNV(taiKhoan);
  console.log(dsnv.arr);
}
