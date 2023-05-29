import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5591255f50bf473d44ec0f5688b59618';

export const getTrendingMovie = async () => {
  try {
    const trendingUrl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(trendingUrl);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getDetails = async movieId => {
  try {
    const detailsUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(detailsUrl);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getCast = async movieId => {
  try {
    const castUrl = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(castUrl);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getReview = async movieId => {
  try {
    const reviewsUrl = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(reviewsUrl);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getByQuery = async query => {
  try {
    const getByQuery = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1}`;

    const response = axios.get(getByQuery);

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
