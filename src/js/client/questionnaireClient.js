import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

export const postQuestionnaire = (questionnaireModel) => {
  const base_url = 'http://151.106.108.125:8080/questionnaire';
  axios.post(base_url, questionnaireModel, {headers: headers});
}
