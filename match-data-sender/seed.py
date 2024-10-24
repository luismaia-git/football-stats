import requests
from bs4 import BeautifulSoup
import pika
import json

url_backend = "http://localhost:3000/"
headers = {'Content-Type': 'application/json'}

def init():
  premier_league = {
    "name": "Premier League",
    "season": "2024/2025",
  }

  mock_team = {
    "name": "team1",
    "city": "city1",
    "stadium": { #optional
      "name" : "name",
      "location" : "location",
      "capacity" : 0
    }
  }

  mock_player = {
    "name" : "value",   
    "position": "value",
    "age": "value",
  }


  add_player_to_team = {
    "playerId" : "value", 
    "teamId" : "value", 
    "from"     : "valueDate",
    "until"    : "valueDate"
  }

  create_championship(premier_league)
 

def create_team(team_body):
  response = requests.post(url_backend+"teams",  headers=headers, data=json.dumps(team_body))


  if response.status_code == 201:
    print("Equipe"+ " "+team_body["name"]+" criada!")
  else:
    print("Falha ao enviar dados:", response.status_code)


 

def create_championship(championship_body):
  response = requests.post(url_backend+"championships",  headers=headers, data=json.dumps(championship_body))


  if response.status_code == 201:
    print("Campeonato"+ " "+championship_body["name"]+" criado!")
  else:
    print("Falha ao enviar dados:", response.status_code)



def scrape_upcoming_matches():
   
  standing_url = "https://fbref.com/en/comps/9/Premier-League-Stats"
  
  data = requests.get(standing_url)

  soup = BeautifulSoup(data.text, features="html.parser")

  standing_table = soup.select("table.stats_table")[0]
 
  links  = standing_table.find_all("a")

  links = [l.get("href") for l in links]

  links = [l for l in links if '/squads/' in l]

  # Função para adicionar "2024-2025" após o ID
  def add_year_to_url(url, season):
      parts = url.split('/')
      return f"https://fbref.com/en/squads/{parts[3]}/{season}/{parts[4]}"

  team_urls = [add_year_to_url(l, "2024-2025") for l in links]

  print(team_urls)


  

if __name__ == '__main__':
  #init()
  scrape_upcoming_matches()