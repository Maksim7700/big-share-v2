import axios from 'axios';

export const sendMessageToTelegram = (message) => {

  const botToken = '6233756965:AAHb3jiGtcU4ndWY38GmhKZWUOsaLBL3pQ4';
  const chatId = '-916505439';
  const messageSent = buildMessage(message);
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  axios.post(apiUrl, {
    chat_id: chatId,
    text: messageSent,
  })
  .then(response => {
    console.log('200');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

const buildMessage = (data) => {
  const { questionnaire, email, name, phone, company, comment } = data;
  const responseMessage = `
    Заповнена форма:
    Questionnaire:
      Service: ${questionnaire.service}
      Size: ${questionnaire.size}
      Calendar: ${questionnaire.calendar}
      Budget: ${questionnaire.budget}
    Email: ${email}
    Name: ${name}
    Phone: ${phone}
    Company: ${company}
    Comment: ${comment}
  `;
    return responseMessage;
}
