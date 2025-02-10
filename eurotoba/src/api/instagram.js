import axios from 'axios';

// Načteme proměnné z .env
const accessToken = import.meta.env.VITE_IG_ACCESS_TOKEN;
const instagramAccountId = import.meta.env.VITE_IG_ACCOUNT_ID;

export const fetchInstagramPhotos = async () => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/${instagramAccountId}/media`, 
      {
        params: {
          fields: 'id,media_type,media_url,thumbnail_url,permalink,caption',
          access_token: accessToken
        }
      }
    );
    return response.data.data; // Vrátí pole příspěvků
  } catch (error) {
    console.error('Chyba při načítání fotek z Instagramu:', error);
    return [];
  }
};