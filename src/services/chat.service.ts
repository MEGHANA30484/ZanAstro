import { api } from './api';

export const sendQuestion = (question: string) => {
  return api.sendChatQuestion(question);
};
