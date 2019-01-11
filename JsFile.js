function DoiGiaTri() {
    var strForm = parseInt(document.formAnount.Amount.value);
    var  f= document.getElementById("selectFrom");
    var strSF = f.options[f.selectedIndex].text;
    var  t = document.getElementById("selectTo");
    var strST = t.options[t.selectedIndex].text;

    var csVN = 1;
    var csThaiLan = 7/1000;
    var csUSD = 1/23000;
    var csLao = 2.75/1000;
    var hs =0;
    if(strSF == "VietNam" && strST == "USD") {
        hs = csUSD/csVN;
        alert(strForm + " VND = " + strForm*hs + " USD");
    }else if(strSF == "VietNam" && strST == "ThaiLan") {
        hs = csThaiLan;
        alert(strForm + " VND = " + strForm*hs + " Bath");
    }else if(strSF == "VietNam" && strST == "Lao") {
        hs = csLao;
        alert(strForm + " VND = " + strForm*hs + " Bath");
    }else if(strSF == "VietNam" && strST == "VietNam") {
        hs = csVN;
        alert(strForm + " VND = " + strForm*hs + " VND");
    }
}
