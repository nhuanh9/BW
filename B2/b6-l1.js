let arr = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"]
let a = 22;
let kq = '';
let hangDonVi = a % 10;
let hangChuc = Math.floor(a / 10);
if (hangChuc <= 1) {
    if (hangDonVi === 5) kq = 'Mười Lăm';
    if (hangDonVi !== 0) kq = 'Mười ' + arr[hangDonVi];
    if (hangDonVi === 0) kq = 'Mười '
} else {
    kq = arr[hangChuc] + ' Mươi ';
    if (hangDonVi === 1) {
        kq += 'Mốt'
    } else if (hangDonVi === 4) {
        kq += 'Tư'
    } else if (hangDonVi === 5) {
        kq += 'Lăm'
    } else if (hangDonVi > 0) {
        kq += arr[hangDonVi];
    }
}
console.log(kq)
