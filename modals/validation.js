function Validation() {
  this.kiemTraRong = function (value, errorId, mess) {
    if (value === "") {
      // error
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    }
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";
    return true;
  };

  this.kiemTraChucVu = function (selectId, errorId, mess) {
    if (getEle(selectId).selectedIndex > 0) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.kiemTraDoDaiKyTu = function (value, min, max, errorId, mess) {
    if (value.length >= min && value.length <= max) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.kiemTraKySo = function (value, errorId, mess) {
    var number = /^[0-9]+$/;
    if (value.match(number)) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.kiemTraKyTu = function (value, errorId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (value, errorId, mess) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.kiemTraMatKhau = function (value, errorId, mess) {
    var pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(pass)) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  //   this.kiemTraNgay = function (value, errorId, mess) {
  //     var date = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  //     if (value.match(date)) {
  //       getEle(errorId).innerHTML = "";
  //       getEle(errorId).style.display = "none";
  //       return true;
  //     }
  //     getEle(errorId).innerHTML = mess;
  //     getEle(errorId).style.display = "block";
  //     return false;
  //   };

  this.kiemTraMinMax = function (value, min, max, errorId, mess) {
    if (value >= min && value <= max) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  //   this.kiemTraTrung = function (value, arr, errorId, mess) {
  //     var isStatus = true;
  //     arr.forEach(function (item) {
  //       if (item.taiKhoan === value) {
  //         isStatus = false;
  //       }
  //     });
  //     if (isStatus) {
  //       getEle(errorId).innerHTML = "";
  //       getEle(errorId).style.display = "none";
  //       return true;
  //     }
  //     getEle(errorId).innerHTML = mess;
  //     getEle(errorId).style.display = "block";
  //     return false;
  //   };
}
