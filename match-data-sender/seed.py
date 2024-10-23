import requests
from bs4 import BeautifulSoup
import pika

def scrape_upcoming_matches():
   
  standing_url = "https://fbref.com/en/comps/9/Premier-League-Stats"
  
  data = requests.get(standing_url)

  soup = BeautifulSoup(data.text, features="html.parser")

  standing_table = soup.select("table.stats_table")[0]
 
  links  = standing_table.find_all("a")

  links = [l.get("href") for l in links]

  links = [l for l in links if '/squads/' in l]

  
  team_urls = [f"https://fbref.com{l}" for l in links]

  print(team_urls)


  

if __name__ == '__main__':
    
    scrape_upcoming_matches()