import {
  CloudLightning,
  CloudDrizzle,
  CloudRain,
  Sun,
  CloudSnow,
  Cloud
} from 'react-feather';

const icons = {
  Thunderstorm: CloudLightning,
  Drizzle: CloudDrizzle,
  Rain: CloudRain,
  Clear: Sun,
  Snow: CloudSnow,
  Clouds: Cloud
};

export const getIconFrom = (description) => icons[description];
