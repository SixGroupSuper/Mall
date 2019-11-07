var txt = '{ "sites" : [' +'{ "name":"吸汗  包邮" , "content":"15双仅需49元" , "content2":"15双南极人袜子男士冬季纯棉加厚中" , "url":"https://gju4.alicdn.com/tps/i3/2670830951/O1CN01KAJa1u1ItbDuuffZ4_!!0-item_pic.jpg_400x400Q90.jpg_.webp" }]}';
var obj = eval ("(" + txt + ")");


console.log();
document.getElementsByClassName("desc")[1].innerHTML=obj.sites[0].name
document.getElementsByClassName("item-pic")[1].src=obj.sites[0].url

/* var i= document.getElementsByClassName("price-point")[1].getElementsByTagName("i")[0]
console.log(i)
document.getElementsByClassName("price-point")[1].innerHTML=appendChild(i)+obj.sites[0].content
var t= document.getElementsByClassName("noweap")[1].getElementsByTagName("span")[0]
console.log(t) */
//document.getElementsByClassName("noweap")[1].innerHTML=t+obj.sites[0].content2

