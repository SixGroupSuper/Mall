var txt = '{ "sites" : [' +'{ "name":"官方奢品直营  国内直邮  包邮包税" ,"yen":"1199" ,"benefit":"买贵赔" ,"prices":"90" , "content":"当季新品正品保证" , "content2":"预售 Andre Maurice 黑色山羊绒长" , "url":"https://gju4.alicdn.com/tps/i3/2670830951/O1CN01KAJa1u1ItbDuuffZ4_!!0-item_pic.jpg_400x400Q90.jpg_.webp" }]}';
var obj = eval ("(" + txt + ")");



document.getElementsByClassName("desc")[1].innerHTML=obj.sites[0].name
document.getElementsByClassName("item-pic")[1].src=obj.sites[0].url
document.getElementsByClassName("price-point")[1].innerHTML+=obj.sites[0].content
document.getElementsByClassName("noweap")[1].innerHTML+=obj.sites[0].content2
document.getElementsByClassName("yen")[1].innerHTML=obj.sites[0].yen
document.getElementsByClassName("benefit")[1].innerHTML=obj.sites[0].benefit
document.getElementsByClassName("prices")[0].innerHTML+=obj.sites[0].prices
console.log();

