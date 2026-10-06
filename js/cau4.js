class DienThoai {
  constructor(ma, ten, hangSanXuat, gia) {
    this._ma = ma;
    this._ten = ten;
    this._hangSanXuat = hangSanXuat;
    this._gia = gia;
  }


  get ma() { return this._ma; }
  get ten() { return this._ten; }
  get hangSanXuat() { return this._hangSanXuat; }
  get gia() { return this._gia; }

  set ma(value) { this._ma = value; }
  set ten(value) { this._ten = value; }
  set hangSanXuat(value) { this._hangSanXuat = value; }
  set gia(value) { this._gia = value; }

  toString() {
    return (
      "Mã: " + this._ma +
      " | Tên: " + this._ten +
      " | Hãng: " + this._hangSanXuat +
      " | Giá: " + this._gia.toLocaleString("vi-VN") + " VNĐ"
    );
  }
}

let danhSachDienThoai = [
  new DienThoai("IP15", "iPhone 15 Pro", "Apple", 28990000),
  new DienThoai("SS24", "Galaxy S24 Ultra", "Samsung", 26990000),
  new DienThoai("XM14", "Xiaomi 14", "Xiaomi", 15990000),
  new DienThoai("OP12", "Oppo Find X7", "Oppo", 18990000),
  new DienThoai("VN20", "Vivo X100", "Vivo", 17990000),
];

function hienThiDanhSach() {
  const sorted = danhSachDienThoai.slice().sort(function (a, b) {
    return a.ten.localeCompare(b.ten, "vi", { sensitivity: "base" });
  });

  let text = "=== CÂU 4 - DANH SÁCH ĐIỆN THOẠI (Sắp xếp theo tên) ===\n\n";
  sorted.forEach(function (phone, index) {
    text += (index + 1) + ". " + phone.toString() + "\n";
  });
  return text;
}


(function () {
  const output = document.getElementById("output");


  output.textContent = hienThiDanhSach();


  const themMoi = confirm("Bạn có muốn thêm điện thoại mới không?");
  if (!themMoi) return;

  const ma = prompt("Nhập mã điện thoại:");
  if (ma === null || ma.trim() === "") {
    alert("Mã không được để trống!");
    return;
  }

  const ten = prompt("Nhập tên điện thoại:");
  if (ten === null || ten.trim() === "") {
    alert("Tên không được để trống!");
    return;
  }

  const hang = prompt("Nhập hãng sản xuất:");
  if (hang === null || hang.trim() === "") {
    alert("Hãng sản xuất không được để trống!");
    return;
  }

  let gia;
  do {
    const inputGia = prompt("Nhập giá (số):");
    if (inputGia === null) return;
    gia = parseFloat(inputGia);
    if (isNaN(gia) || gia < 0) {
      alert("Vui lòng nhập giá là số không âm!");
    }
  } while (isNaN(gia) || gia < 0);


  danhSachDienThoai.push(new DienThoai(ma.trim(), ten.trim(), hang.trim(), gia));

  output.textContent = hienThiDanhSach() + "\n→ Đã thêm điện thoại mới thành công!";
})();