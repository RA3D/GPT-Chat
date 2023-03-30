import socket

import openai

openai.api_key = "YOUR API KEY HERE"


def chat_with_gpt(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-002",
            prompt=prompt,
            max_tokens=100,
            n=1,
            stop=None,
            temperature=0.5,
        )

        message = response.choices[0].text.strip()
        return message

    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def get_ip_address():
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    return ip_address

