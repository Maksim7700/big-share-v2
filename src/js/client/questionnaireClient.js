import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

export const postQuestionnaire = (questionnaireModel) => {
  const base_url = 'http://bigshare-env.eba-ghyuyfud.us-east-1.elasticbeanstalk.com/questionnaire';
  axios.post(base_url, questionnaireModel, {headers: headers}).then(response => console.log(response));
}
