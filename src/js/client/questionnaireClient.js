import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

export const postQuestionnaire = (questionnaireModel) => {
  const base_url = 'https://151.106.108.125/questionnaire';
  axios.post(base_url, questionnaireModel, {headers: headers}).then(response => console.log(response));
}
