function result() {
    let inputToan=parseFloat(document.getElementById("toan").value);
    let inputHoa=parseFloat(document.getElementById("hoa").value);
    let inputLy=parseFloat(document.getElementById("ly").value);
    if (inputToan<0||inputHoa<0||inputLy<0 || isNaN(inputLy) || isNaN(inputToan) || isNaN(inputHoa)){
        alert("NhapLai");
    }
    else
    {
        let sum=(inputLy+inputHoa+inputToan)/3;
        document.getElementById("KQ").innerHTML="Điểm Trung Bình Là:"+"<br/>"+sum
    }
}
function check() {
    let inputC=parseFloat(document.getElementById("inputC").value);
    let inputF=(inputC-32)/1.8;
    document.getElementById("F").innerHTML="Nhiệt Độ F:"+"<br>"+inputF;

}
function ChuVi() {
let duongkinh=parseFloat(document.getElementById("duongkinhR").value);
    if (duongkinh<0){
        alert("Nhap Lai")
    }else {
let chuvi=duongkinh*3.14;
let dientich=((duongkinh*duongkinh)/4)*3.14;
    document.getElementById("chuvi").innerHTML="Chuvi= "+chuvi+"<br>"
    +"DienTich= "+dientich;
    }
}
function dientich() {
    let chieudai=parseFloat(document.getElementById("A").value);
    let chieurong=parseFloat(document.getElementById("B").value);
    if (chieurong<0||chieudai<0){
        alert("Nhap Lai Gia Tri");
    }else {
    let dientich=chieudai*chieurong;
    let chuvi=(chieudai+chieurong)*2;
    document.getElementById("dientich").innerHTML="DienTich_HCN= "+dientich+"<br>"
    +"Chu Vi HCN= "+chuvi;
    }
}