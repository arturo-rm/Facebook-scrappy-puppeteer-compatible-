const puppeteer = require('puppeteer');

//paste your friend list from "friend exporter" here
const result = ["here"];


var lenR = result.length;

(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: [ "--disable-notifications" ],
      
      //paste here the path to your executable browser
      executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    });

  const page = await browser.newPage();
  await page.waitForTimeout(0);
  await page.goto('https://www.facebook.com/');

  //wait until the selector is avaliable, helps wait for user login
  //can be obtained at inspect element left click copy path: java. On any browser
  await page.waitForSelector("#mount_0_0", {timeout: 0});
      
  //checks every array from your imported list
  for(let j = 0; j < lenR; j++){
    
    
    console.log(result[j]) 
    var rr = "";
    rr =  await browser.newPage()
      await rr.goto(result[j], {  waitUntil: "networkidle2" })
      if ((await rr.$("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.dp1hu0rb.cbu4d94t.j83agx80 > div > div > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.o8rfisnq > div > div > div.h676nmdw.buofh1pr.h8xcmbcu > div > div")) !== null) {
      
       //path to button, can be obtained at inspect element left click copy path: java. On any browser
        await rr.click("#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.dp1hu0rb.cbu4d94t.j83agx80 > div > div > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.o8rfisnq > div > div > div.h676nmdw.buofh1pr.h8xcmbcu > div > div")
      }
      console.log(j + "of" + lenR)
      await rr.close()
      
  }

  
})();