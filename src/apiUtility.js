// src/apiUtility.js
import axios from 'axios';

const apiEndpoint = 'https://ipinfo.io/122.179.139.34?token=793eb20d45d707';

export async function fetchData() {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
