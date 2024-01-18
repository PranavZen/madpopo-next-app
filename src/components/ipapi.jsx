'use client'
import axios from 'axios';
import requestIp from 'request-ip';

// Function to determine the nearest server based on the country
export function getNearestServer(country) {
  const serverLocations = {
    US: ['US (West)', 'US (Central)', 'US (East)'],
    UK: ['United Kingdom'],
    DE: ['EU (Germany)'],
    JP: ['Asia (Japan)'],
    SG: ['Asia (Singapore)'],
    AU: ['Australia (Sydney)'],
    PK: ['Pakistan'], // Add more mappings as needed
  };

  for (const [serverLocation, countries] of Object.entries(serverLocations)) {
    if (countries.includes(country)) {
      return serverLocation;
    }
  }

  return 'Unknown';
}

// Function to fetch IP information and determine the nearest server
export async function fetchServerLocation(req) {
  const clientIp = requestIp.getClientIp(req);

  try {
    // Use the ipinfo.io API to get location information based on the IP address
    const response = await axios.get(`https://ipinfo.io/180.151.133.27?token=793eb20d45d707`);
    const { country } = response.data;

    // Map the country to the nearest server location
    const nearestServer = getNearestServer(country);

    return nearestServer;
  } catch (error) {
    console.error('Error fetching location:', error);
    return 'Unknown';
  }
}
