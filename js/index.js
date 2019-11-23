var txt = '{ "sites" : [' + '{ "name":"官方奢品直营  国内直邮  包邮包税" ,"yen":"1199" ,"benefit":"买贵赔" ,"prices":"90" , "content":"当季新品正品保证" , "content2":"预售 Andre Maurice 黑色山羊绒长" , "url":"https://gju4.alicdn.com/tps/i3/2670830951/O1CN01KAJa1u1ItbDuuffZ4_!!0-item_pic.jpg_400x400Q90.jpg_.webp" }]}';
var obj = eval("(" + txt + ")");

document.getElementsByClassName("desc")[1].innerHTML = obj.sites[0].name
document.getElementsByClassName("item-pic")[1].src = obj.sites[0].url
document.getElementsByClassName("price-point")[1].innerHTML += obj.sites[0].content
document.getElementsByClassName("noweap")[1].innerHTML += obj.sites[0].content2
document.getElementsByClassName("yen")[1].innerHTML = obj.sites[0].yen
document.getElementsByClassName("benefit")[1].innerHTML = obj.sites[0].benefit
document.getElementsByClassName("prices")[0].innerHTML += obj.sites[0].prices
console.log();

/* var xmlhttp
if(window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}
else{
   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
        myobj=JSON.parse(this.responseText);
        //document.getElementsByClassName("item-pic")[1].src=myobj[1].sites.url
        console.log(myobj.sites[1].url);
    }
};
xmlhttp.open("GET","../json/index.json",true);
xmlhttp.send(); */

//显示更多的注册事件
function myFunction() {
    for (var i = 0; i < 3; i++) {
        var li = document.getElementsByClassName("item-small-v3")[i];
        var cln = li.cloneNode(true);
        document.getElementsByClassName("clearfix")[1].appendChild(cln);
        console.log(li);
    }
}

function newFunction() {
    for (var t = 0; t < 2; t++) {
        var t1 = document.getElementsByClassName("item-small-v2")[t];
        var t2 = t1.cloneNode(true);
        document.getElementsByClassName("clearfix")[2].appendChild(t2);
        console.log(t1);
    }
}

//注册用户输入判断
var pattl = new RegExp(/^[a-zA-Z]+$/);
var pattl2 = new RegExp(/^[1-9]\d*|0$/);
function myFunction() {
    var uid = document.getElementById("uid").value
    console.info(uid);
    if (uid == "" || uid == null) {
        return
    }
    else {
        for (let i = 0; i < uid.length; i++) {
            if (pattl.test(uid[0])) {
                document.getElementsByClassName("help-block")[0].innerHTML = "格式正确";
            }
            else{
                document.getElementsByClassName("help-block")[0].innerHTML = "开头必须是字母";
                document.getElementById("hst").style.color="red"
            }
            if(pattl2.test(uid[i+1])){
                document.getElementsByClassName("help-block")[0].innerHTML = "格式正确";
            }
            else{
                document.getElementsByClassName("help-block")[0].innerHTML = "必须包含字母和数字";
                document.getElementsByClassName("help-block")[0].style.coloe="red";
            }

        }
    }


}













