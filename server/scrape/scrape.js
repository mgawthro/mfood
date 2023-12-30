

const cheerio = require('cheerio');
const axios=require('axios');
const tendiURL = "https://dining.umich.edu/menus-locations/dining-halls/twigs-at-oxford/";

const getMenus = async () => {
    const axiosResponse = await axios.request({
        method: "GET",
        url: tendiURL,
        headers: {
              "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
        }
    })

    const $ = cheerio.load(axiosResponse.data);

    const value = $(".item-name").html();
}
