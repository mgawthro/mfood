from selenium import webdriver
import sys
sys.path[0:0] = ['/usr/home/myName/.local/lib/python2.7/site-packages/']
from bs4 import BeautifulSoup
import pandas as pd

driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver") #configure driver for chrome

food = []
driver.get("https://dining.umich.edu/menus-locations/dining-halls/twigs-at-oxford/")
content = driver.page_source
soup = BeautifulSoup(content,features="html.parser")

for a in soup.findAll('a',href=True, attrs={'class':'item-name'}):
    name = a.find('div', attrs = {'class':'item-name'})
    food.append(name.text)

df = pd.DataFrame({'Food':food}) 
df.to_csv('m_dining.csv', index=False, encoding='utf-8')