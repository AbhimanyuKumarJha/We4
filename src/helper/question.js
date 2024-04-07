import axios from 'axios';

const fetchGeminiData = async () => {
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        // Add any request parameters here
      },
      {
        params: {
          key: process.env.REACT_APP_GEMINI_KEY // Accessing environment variable
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchGeminiData;
