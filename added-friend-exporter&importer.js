const puppeteer = require('puppeteer');

//paste here the desired export friends url on friend tab  
const url = "here";


(async () => {
    const browser = await puppeteer.launch({headless: false,
        args: [ "--disable-notifications" ],
        executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
      });
  const page = await browser.newPage();
  await page.waitForTimeout(0);
  await page.goto('https://www.facebook.com/');
  await page.waitForSelector("#mount_0_0", {timeout: 0});
  
  const page2 = await browser.newPage();
  
  await page2.goto(url, { waitUntil: 'networkidle2' });
  for(let o = 0; o <= 1000; o++){ await page2.evaluate(
'window.scrollTo(0, document.body.scrollHeight)');
await page2.waitForTimeout(50);
}
    //read page.evaluate documentation for better understanding
  const result = await page2.evaluate(() => {

  var all = Array.from(document.querySelectorAll("a"));
  var myarray = [];
  var g = [];
  var lenA = all.length;
  


  for (let i = 0; i < lenA; i++) {

      var nametext = all[i].textContent;
      var cleantext = nametext.replace(/\s+/g, ' ').trim();
      var cleanlink = all[i].href;
      myarray.push([cleantext, cleanlink]);

  };

      var lenM = myarray.length;
      for (let i = 0; i < lenM; i++) {

            if(myarray[i][0] != "" && myarray[i][1] != "" && !myarray[i][1].contains("&sk=") && !myarray[i][1].contains("friends_mutual")){

            g.push(myarray[i][1])
            }


          
      } 
      return g;
  });
  var lenR = result.length;
  for(let j = 0; j < lenR; j++){
    
    
     
    //resets rr value to use multiple pages on one variable
    var rr = "";
    rr =  await browser.newPage()
      await rr.goto(result[j], {  waitUntil: "networkidle2" })
      await rr.waitForTimeout(200)
      if(await rr.$("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.poy2od1o.i09qtzwb.n7fi1qx3 > div.l9j0dhe7.fh5enmmv > div.l9j0dhe7.tkr6xdv7 > div.j83agx80.l9j0dhe7.du4w35lb.aovydwv3.do00u71z > div > div > div > div > div > div > div.pfnyh3mw.l9j0dhe7.tkr6xdv7 > div > div > div.j83agx80.bp9cbjyn.pfnyh3mw.cgat1ltu > span:nth-child(4) > div") !== null
      ){await rr.click("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.poy2od1o.i09qtzwb.n7fi1qx3 > div.l9j0dhe7.fh5enmmv > div.l9j0dhe7.tkr6xdv7 > div.j83agx80.l9j0dhe7.du4w35lb.aovydwv3.do00u71z > div > div > div > div > div > div > div.pfnyh3mw.l9j0dhe7.tkr6xdv7 > div > div > div.j83agx80.bp9cbjyn.pfnyh3mw.cgat1ltu > span:nth-child(4) > div")}

      
      if ((await rr.$("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.dp1hu0rb.cbu4d94t.j83agx80 > div > div > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.o8rfisnq > div > div > div:nth-child(3) > div > span > div")) !== null) {
        await rr.click("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.dp1hu0rb.cbu4d94t.j83agx80 > div > div > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.o8rfisnq > div > div > div:nth-child(3) > div > span > div")
      }
      await rr.waitForTimeout(200)
     
      if(await rr.$("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.poy2od1o.i09qtzwb.n7fi1qx3 > div.l9j0dhe7.fh5enmmv > div.l9j0dhe7.tkr6xdv7 > div.j83agx80.l9j0dhe7.du4w35lb.aovydwv3.do00u71z > div > div > div > div > div > div > div.pfnyh3mw.l9j0dhe7.tkr6xdv7 > div > div > div.j83agx80.bp9cbjyn.pfnyh3mw.cgat1ltu > span:nth-child(4) > div") !== null
      ){
        console.log(result[j])
        await rr.click("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.poy2od1o.i09qtzwb.n7fi1qx3 > div.l9j0dhe7.fh5enmmv > div.l9j0dhe7.tkr6xdv7 > div.j83agx80.l9j0dhe7.du4w35lb.aovydwv3.do00u71z > div > div > div > div > div > div > div.pfnyh3mw.l9j0dhe7.tkr6xdv7 > div > div > div.j83agx80.bp9cbjyn.pfnyh3mw.cgat1ltu > span:nth-child(4) > div")}

      await rr.close()
      
  }

  
})();