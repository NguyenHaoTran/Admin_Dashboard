const Products = [
  {
    TenSanPham: "Sony a7s3",
    MaSanPham: "36378",
    SoLuong: "13",
    TinhTrang: "99%",
    DoiTra: "NA",
    DonGia: "35.000.000",
  },
  {
    TenSanPham: "Canon 5D3",
    MaSanPham: "56784",
    SoLuong: "21",
    TinhTrang: "93%",
    DoiTra: "NA",
    DonGia: "9.000.000",
  },
  {
    TenSanPham: "Nikon D810",
    MaSanPham: "24356",
    SoLuong: "2",
    TinhTrang: "fullbox",
    DoiTra: "NA",
    DonGia: "8.500.000",
  },
  {
    TenSanPham: "Sony FX3",
    MaSanPham: "11345",
    SoLuong: "1",
    TinhTrang: "98%",
    DoiTra: "Đổi bảo hành",
    DonGia: "65.000.000",
  },
  {
    TenSanPham: "Fujinon 33f1.8",
    MaSanPham: "98347",
    SoLuong: "3",
    TinhTrang: "95%",
    DoiTra: "NA",
    DonGia: "6.000.000",
  },
  {
    TenSanPham: "Olyumpus EM1",
    MaSanPham: "13125",
    SoLuong: "1",
    TinhTrang: "90%",
    DoiTra: "NA",
    DonGia: "4.500.000",
  },
  {
    TenSanPham: "Sony a7s3",
    MaSanPham: "36378",
    SoLuong: "13",
    TinhTrang: "99%",
    DoiTra: "NA",
    DonGia: "35.000.000",
  },
  {
    TenSanPham: "Canon 5D3",
    MaSanPham: "56784",
    SoLuong: "21",
    TinhTrang: "93%",
    DoiTra: "NA",
    DonGia: "9.000.000",
  },
  {
    TenSanPham: "Nikon D810",
    MaSanPham: "24356",
    SoLuong: "2",
    TinhTrang: "fullbox",
    DoiTra: "NA",
    DonGia: "8.500.000",
  },
  {
    TenSanPham: "Sony FX3",
    MaSanPham: "11345",
    SoLuong: "1",
    TinhTrang: "98%",
    DoiTra: "Đổi bảo hành",
    DonGia: "65.000.000",
  },
  {
    TenSanPham: "Fujinon 33f1.8",
    MaSanPham: "98347",
    SoLuong: "3",
    TinhTrang: "95%",
    DoiTra: "NA",
    DonGia: "6.000.000",
  },
  {
    TenSanPham: "Olyumpus EM1",
    MaSanPham: "13125",
    SoLuong: "1",
    TinhTrang: "90%",
    DoiTra: "NA",
    DonGia: "4.500.000",
  },
];


// -------Json, fill orders trong bản Products
Products.forEach(product => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${product.TenSanPham}</td>
                        <td>${product.MaSanPham}</td>
                        <td>${product.SoLuong}</td>
                        <td>${product.TinhTrang}</td>
                        <td>${product.DoiTra}</td>
                        <td>${product.DonGia}</td>  
                        <td class="primary">Chi tiết</td>
                    `;
    tr.innerHTML = trContent;       
    document.querySelector('table tbody').appendChild(tr);         
})