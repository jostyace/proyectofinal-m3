import { useState, useEffect } from 'react';

const useIpLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const ubicacionIP = async () => {
      try {
        const ipResponse = await fetch('https://ipinfo.io/json?token=6aae16c17023dd');
        if (!ipResponse.ok) {
          throw new Error(' Error al obtener la la IP');
        }
        const ipData = await ipResponse.json();
        const loc = ipData.loc.split(',');
        setLocation({
          latitude: loc[0],
          longitude: loc[1]
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    ubicacionIP();
  }, []);

  return { location };
};

export default useIpLocation;
