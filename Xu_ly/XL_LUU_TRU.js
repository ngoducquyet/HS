
var File = require("fs")
var Cong_nghe="json"
// MongoDB
var DbConnection = require('../Xu_ly/XL_KET_NOI_MONGODB');

function Doc_Thong_tin_Dich_vu() {
  var Duong_dan = "index.html"
  var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")
  return Chuoi_Thong_tin
}


class XL_LUU_TRU {

  Doc_Thong_tin_Dich_vu(){
    return Doc_Thong_tin_Dich_vu()
  }

  async Doc_Thong_tin_Cua_hang() {
    try {
      var db = await DbConnection.Get()
      var Cua_hang = await db.collection("Cua_hang").find({}).toArray()
      return Cua_hang
    } catch (Loi) {
      console.log(Loi)
    }
  }
  async Doc_Thong_tin_Nguoi_dung() {
    try {
      var db = await DbConnection.Get();
      var Nguoi_dung = await db.collection("Nguoi_dung").find({}).toArray()
      return Nguoi_dung
    } catch (Loi) {
      console.log(Loi)
    }
  }

  async  Doc_Danh_sach(Loai_Doi_tuong) {
    try {
      var db = await DbConnection.Get()
      var Dien_thoai = await db.collection("Dien_thoai").find({}).toArray()
      return Dien_thoai
    } catch (Loi) {
      console.log(Loi)
    }
  }

  async  Doc_Danh_sach_Thanh_ly(Loai_Doi_tuong) {
    try {
      var db = await DbConnection.Get()
      var Thanh_ly = await db.collection("Thanh_ly").find({}).toArray()
      return Thanh_ly
    } catch (Loi) {
      console.log(Loi)
    }
  }
  async  Ghi_moi_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {

    try {
      var db = await DbConnection.Get()
      var Kq = await db.collection(Loai_Doi_tuong).insert(Doi_tuong)
      return Kq

    } catch (Loi) {
      console.log(Loi)
    }
  }
  async Cap_nhat_Doi_tuong(Loai_Doi_tuong, Bieu_thuc_dieu_kien, Gia_tri_Cap_nhat) {
    try {
      var db = await DbConnection.Get()

      var Kq = await db.collection(Loai_Doi_tuong).update(Bieu_thuc_dieu_kien, Gia_tri_Cap_nhat)

      return Kq

    } catch (Loi) {
      console.log(Loi);
    }
  }
  async  Xoa_Doi_tuong(Loai_Doi_tuong, Bieu_thuc_dieu_kien) {
    try {
      var db = await DbConnection.Get()
      var Kq = await db.collection(Loai_Doi_tuong).remove(Bieu_thuc_dieu_kien);
      return Kq
    } catch (Loi) {
      console.log(Loi);
    }
  }
}



//Public để các file js khác gọi 
var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly




