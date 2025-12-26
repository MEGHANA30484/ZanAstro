const USE_MOCK_API = true; // 🔁 switch to false when backend is ready

export const api = {
  sendChatQuestion: async (question: string) => {
    if (USE_MOCK_API) {
      return mockChatResponse(question);
    }

    // 🔜 later (Django)
    // return axios.post('/chat/', { question });

    return null;
  },
};

// 🧪 Mock Gemini-style response
const mockChatResponse = (question: string) => {
  return new Promise(resolve => {
    remindingDelay();
    resolve({
      answer: `🔮 Pandit says: Based on your stars, "${question}" shows positive energy ahead.`,
    });
  });
};

const remindingDelay = () =>
  new Promise(res => setTimeout(() => res(undefined), 1200));
