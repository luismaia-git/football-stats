import requests
from bs4 import BeautifulSoup
import pika
import schedule
import time

# Função para enviar dados para o RabbitMQ
def send_to_rabbitmq(match_data):
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()

    # Cria uma fila chamada 'new_matches'
    channel.queue_declare(queue='new_matches')

    # Envia os dados das partidas como mensagem
    channel.basic_publish(exchange='', routing_key='new_matches', body=match_data)

    print("Sent to RabbitMQ:", match_data)
    connection.close()

# Função para fazer o scraping
def scrape_upcoming_matches():
   
  standing_url = "https://fbref.com/en/comps/9/Premier-League-Stats"
  
  data = requests.get(standing_url)

  soup = BeautifulSoup(data.text, features="html.parser")

  standing_table = soup.select("table.stats_table")[0]

  links  = standing_table.find_all("a")

  links = [l.get("href") for l in links]

  links = [l for l in links if '/squads/' in l]

  
  team_urls = [f"https://fbref.com{l}" for l in links]

  print(team_urls[0])

# Função para agendar a coleta de dados
def schedule_scraping():
    #schedule.every().day.at("00:00").do()  # Execute todos os dias à meia-noite

    # while True:
    #     schedule.run_pending()
    #     time.sleep(1)
    scrape_upcoming_matches()

if __name__ == '__main__':
    
    schedule_scraping()
