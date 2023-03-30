function initChatGPT(apiUrl, chatElement, promptInput, submitButton) {
    function scrollToBottom() {
        chatElement.scrollTop = chatElement.scrollHeight;
    }

    submitButton.addEventListener('click', async () => {
        const promptText = promptInput.value;
        if (!promptText) return;

        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.innerText = 'Me: ' + promptText;
        chatElement.appendChild(userMessage);
        scrollToBottom();

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: promptText }),
        });

        const jsonResponse = await response.json();

        const gptMessage = document.createElement('div');
        gptMessage.className = 'message gpt';
        gptMessage.innerText = 'ChatGPT: ' + (jsonResponse.response || 'Error: ' + jsonResponse.error);
        chatElement.appendChild(gptMessage);
        scrollToBottom();

        promptInput.value = '';
    });

    promptInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitButton.click();
        }
    });
}
