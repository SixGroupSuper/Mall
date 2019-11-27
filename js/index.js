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




document.getElementById("btn").disabled=true;
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
/* var pattl = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/); */
function myFunction() {
    var uid = document.getElementById("uid")
    console.info(uid);
    var isError=true;

    if (uid == "" || uid == null) {
        return
    }
    else {
        if(uid.value.length>20||uid.value.length<6){
            document.getElementById("hst").innerHTML="用户名请输入6-20位字符";
            document.getElementById("hst").style.color="red";
            return;
        }else if(uid.value.charCodeAt(0)>=48&&(uid.value.charCodeAt(0)<=57)){
            document.getElementById("hst").innerHTML="首字符必须为字母";
            document.getElementById("hst").style.color="red";
            return;
        }else for(var i=0;i<uid.value.charCodeAt(i);i++){
            if((uid.value.charCodeAt(i)<48)||(uid.value.charCodeAt(i)>57)&&(uid.value.charCodeAt(i)<97)||(uid.value.charCodeAt(i)>122)){
                document.getElementById("hst").innerHTML="必须为字母跟数字组成";
                document.getElementById("hst").style.color="red";
                return;
            }else{
                document.getElementById("hst").innerHTML="格式正确";
                document.getElementById("hst").style.color="#32CD32";
                return;
            }
        
        }
    }
}

//注册用户的密码的输入判断
function mypwd(){
    var pwd=document.getElementById("pwd")
    console.info(pwd);
    if(pwd==""||pwd==null){
        return;
    }else{
        if(pwd.value.length<6){
            document.getElementById("hst2").innerHTML="至少6位字母或数字";
            document.getElementById("hst2").style.color="red";
            return;
        }else for(var t=0;t<pwd.value.charCodeAt(t);t++){
            if((pwd.value.charCodeAt(t)<48)||(pwd.value.charCodeAt(t)>57)&&(pwd.value.charCodeAt(t)<97)||(pwd.value.charCodeAt(t)>122)){
                document.getElementById("hst2").innerHTML="必须为字母或数字组成"
                document.getElementById("hst2").style.color="red";
                return;
            }else{
                document.getElementById("hst2").innerHTML="格式正确";
                document.getElementById("hst2").style.color="#32CD32";
                return;
            }
        }
    }
}
//注册用户的密码再次输入验证
function myvalidation(){
    var pwdconfirm=document.getElementById("pwdconfirm")
    console.info(pwdconfirm);
    if(pwdconfirm==""||pwdconfirm==null){
        return;
    }else if(pwdconfirm.value==pwd.value){
        document.getElementById("hst3").innerHTML="密码正确";
        document.getElementById("hst3").style.color="#32CD32";
        return;
    }else{
        document.getElementById("hst3").innerHTML="与第一次密码不匹配";
        document.getElementById("hst3").style.color="red";
        return;
    }
}
//注册用户的验证邮箱
var text = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
function myemail(){
   var Emailconfirm=document.getElementById("emailconfirm");
   console.log(Emailconfirm)
   if(Emailconfirm==""||Emailconfirm==null){
      return;
   }else if (text.test(Emailconfirm.value)) {
     document.getElementById("hst4").innerHTML="格式正确";
     document.getElementById("hst4").style.color="#32CD32";
     document.getElementById("btn").disabled=false;
     return;
   }else{
      document.getElementById("hst4").innerHTML="格式错误";
      document.getElementById("hst4").style.color="red";
      document.getElementById("btn").disabled=true;
   }
}







