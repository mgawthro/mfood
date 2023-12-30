import requests
from bs4 import BeautifulSoup
 
req = requests.get("https://dining.umich.edu/menus-locations/dining-halls/south-quad/")

soup = BeautifulSoup(req.content, "html.parser")
i = 0
while(i < 20):
    div_bs4 = soup.find('div', class_ = "item-name")
    i = i +1
    print(div_bs4.string)



 