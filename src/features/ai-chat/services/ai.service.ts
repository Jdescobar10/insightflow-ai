export const sendMessageToAI = async (message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`AI response to: "${message}"`);
    }, 1000);
  });
};