import requests
import bs4

res = requests.get('https://dining.umich.edu/menus-locations/dining-halls/twigs-at-oxford/?menuDate=2023-01-21')
res.raise_for_status()

soup = bs4.BeautifulSoup(res.text, 'lxml')

# found start of data `h2`
start = soup.find('span', {'id': 'item-name'}).parent

# check sibling items
for item in start.next_siblings:

    # found end of data `h2`
    if item.name == 'h2': 
        break

    if item.name == 'ul':

        # only direct `li` without nested `li`
        for li in item.find_all('li', recursive=False): 

            # `a` which have `title`
            a = li.find('a', {'title': True}) 

            if a:
                print(a['title'])