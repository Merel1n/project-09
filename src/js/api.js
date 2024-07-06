import axios from "axios";

export async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api/reviews/';
  const url = `${BASE_URL}${END_POINT}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}
