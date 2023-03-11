//Bài 1:

document.getElementById('btnKetQua').onclick = function () {
    tinhtongDiem('ket-qua-bai-1', 'khuvuc', 'doituong');
}
function tinhtongDiem(idDiem, idKhuVuc, idDoiTuong) {
    var diem1 = +document.getElementById('diem1').value;
    var diem2 = +document.getElementById('diem2').value;
    var diem3 = +document.getElementById('diem3').value;
    var doituong = document.getElementById(idDoiTuong).value;
    var khuVuc = document.getElementById(idKhuVuc).value;
    var tongDiem = 0;
    tongDiem = diem1 + diem2 + diem3;
    var ketQua = 0;

    switch (doituong) {
        case '0':
            ketQua = tongDiem;

        case '1':
            if (khuVuc === '1' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 2.5 + 2;
            } else if (khuVuc === '2' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 2.5 + 1;
            } else if (khuVuc === '3' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 2.5 + 0.5;
            } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
                ketQua = 'không thuộc nhóm ưu tiên'
            }; break;

        case '2':
            if (khuVuc === '1' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 1.5 + 2;
            } else if (khuVuc === '2' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 1.5 + 1;
            } else if (khuVuc === '3' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 1.5 + 0.5;
            } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
                ketQua = 'không thuộc nhóm ưu tiên'
            }; break;

        case '3':
            if (khuVuc === '1' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 1 + 2;
            } else if (khuVuc === '2' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 1 + 1;
            } else if (khuVuc === '3' && diem1 != 0 && diem2 != 0 && diem3 != 0) {
                ketQua = tongDiem + 1 + 0.5;
            } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
                ketQua = 'không thuộc nhóm ưu tiên'
            }; break;


    }
    var diemChuan = +document.getElementById('diemchuan').value;

    if (diemChuan <= ketQua) {
        diemChuan = 'Chúc mừng bạn đã đậu';
    } else if (diemChuan > ketQua) {
        diemChuan = "Rất tiếc bạn đã rót";
    }
    document.getElementById(idDiem).innerHTML = ` Điểm của bạn là : ${ketQua} 
        <br> Kết quả : ${diemChuan}
    
    `;
    return diemChuan;
}
//Bài tập 2 :
document.getElementById('btnTienDien').onclick = function () {
    var ten = document.getElementById('ten').value;
    var soKw = +document.getElementById('sokw').value;
    var vndFormat = new Intl.NumberFormat('it-IT');
    var tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = (500 + 650) * (soKw / 2);
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
    } else if (soKw > 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    document.getElementById('ket-qua-bai-2').innerHTML = `
    Họ và tên là : ${ten} <br>
    Tiền điện : ${vndFormat.format(tienDien)} VNĐ
     `;
};


//Bài tập 3: 

document.getElementById('btnTinhThue').onclick = function () {
    var ten = document.getElementById('hoten').value;
    var tongThuNhap = +document.getElementById('tongthunhap').value;
    var soNguoi = +document.getElementById('songphuthuoc').value;
    var vndFormat = new Intl.NumberFormat('it-IT');
    var tongThue = 0;
    var result;
    tongThue = tongThuNhap - 4e+6 - (soNguoi * 1.6e+6);
    if (tongThue <= 60e+6) {
        result = tongThue * 0.05;
        ///
    } else if (tongThue > 60e+6 && tongThue <= 120e+6) {
        result = tongThue * 0.1;
        //
    } else if (tongThue > 120e+6 && tongThue <= 210e+6) {
        result = tongThue * 0.15;
        //
    } else if (tongThue > 210e+6 && tongThue <= 384e+6) {
        result = tongThue * 0.2;

    } else if (tongThue > 384e+6 && tongThue <= 624e+6) {
        result = tongThue * 0.25;
    } else if (tongThue > 624e+6 && tongThue <= 960e+6) {
        result = tongThue * 0.3;
    } else if (tongThue > 960e+6) {
        result = tongThue * 0.35;
    }


    document.getElementById('ket-qua-bai-3').innerHTML = `
        Họ và Tên là : ${ten} <br>
        Tiền Thuế thu nhập cá nhân là : ${vndFormat.format(result)}VNĐ
   `
}

function dropdownKetNoi() {
    var selected = document.getElementById('loaikh').value;
    if (selected === "2") {
        document.getElementById('soKetnoi').classList.remove('hidden')
    } else {
        document.getElementById('soKetnoi').classList.add('hidden')

    }
}

function tinhTienCapNd(sokenh) {
    var phiXL = 4.5;
    var phiDV = 20.5;
    var phiKenh = sokenh * 7.5;

    return phiXL + phiDV + phiKenh;
}

function tinhTienCapDN(sokenh, soketnoi) {
    var phiXL = 15;
    var phiketnoi = 0;
    var phiKenh = sokenh * 50;
    var sokn = soketnoi - 10;
    var phiDV = 75;
    if (sokn > 0) {
        phiketnoi = phiDV + sokn * 5;
    } else {
        phiketnoi = phiDV;
    }

    return phiXL + phiketnoi + phiKenh;
}

document.getElementById('btnTinhCap').onclick = function () {
    var loaiKH = document.getElementById('loaikh').value;
    var maKH = document.getElementById('makh').value;
    var soKenh = document.getElementById('sokenh').value;
    var soketNoi = document.getElementById('soKetnoi').value;
    var tienCap = 0;

    if (loaiKH === '1') {
        tienCap = tinhTienCapNd(soKenh);
    } else {
        tienCap = tinhTienCapDN(soKenh, soketNoi);
    }

    document.getElementById('ket-qua-bai-4').innerHTML = ` Mã Khách hàng là : ${maKH} 
        <br>
        Tỏng tiền cáp là : ${tienCap}
    `;
}


