import requests
from bs4 import BeautifulSoup


# Making a GET request
r = requests.get('https://dining.umich.edu/menus-locations/dining-halls/south-quad/')

# Parsing the HTML
soup = BeautifulSoup(r.content, 'html.parser')

# Finding by id
s = soup.find('div', class_='courses')
p = s.find('div', class_= 'item-name')

# Getting the leftbar


#content = s.find_all('div')
# All the li under the above ul
#content = s.find_all('div')

print(p.prettify())
