'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import requestIp from 'request-ip';

const IpPage = () => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  console.log("ipData " + ipData);
  console.log("error " + error);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use request-ip to get client's IP address
        const clientIp = requestIp.getClientIp();
        console.log("clientIp " + clientIp);

        // Use the ipinfo.io API to get location information based on the IP address
        const response = await axios.get(`https://ipinfo.io/122.179.139.34?token=793eb20d45d707`);
        console.log("response " + response);

        // Check if the response exists before accessing its properties
        if (response) {
          const { country } = response.data;

          // Map the country to the nearest server location
          const nearestServer = getNearestServer(country);

          setIpData({
            serverLocation: nearestServer,
            ipInfo: response.data,
          });
        } else {
          setError('Invalid response from the server');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Function to determine the nearest server based on the country
  function getNearestServer(country) {
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

  return (
    <div>
      <h1>IP Info</h1>
      {error && <div>Error: {error}</div>}
      {ipData && (
        <div>
          <h2>Nearest Server: {ipData.serverLocation}</h2>
          <pre>{JSON.stringify(ipData.ipInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IpPage;
