const puppeteer = require('puppeteer');

async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://dining.umich.edu/menus-locations/dining-halls/twigs-at-oxford/");
    const data = await page.evaluate(fucntion()) {
        const array = [];
        document.querySelectorAll('.fa fa-list');

        
        return;
    }

    console.log(data);
};