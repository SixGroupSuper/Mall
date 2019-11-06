var txt = '{ "sites" : [' +'{ "name":"吸汗  包邮" , "url":"https://gju4.alicdn.com/tps/i3/2670830951/O1CN01KAJa1u1ItbDuuffZ4_!!0-item_pic.jpg_400x400Q90.jpg_.webp" }]}';
var obj = eval ("(" + txt + ")");


console.log();
document.getElementsByClassName("desc")[1].innerHTML=obj.sites[0].name
document.getElementsByClassName("item-pic")[1].src=obj.sites[0].url



