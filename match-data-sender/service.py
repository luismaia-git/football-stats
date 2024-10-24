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

# Função para agendar a coleta de dados
def schedule_scraping():
    #schedule.every().day.at("00:00").do()  # Execute todos os dias à meia-noite

    print()
    #scrape_upcoming_matches()

if __name__ == '__main__':
    
    schedule_scraping()
