require("dotenv").config();
const API_KEY = process.env.API_KEY || "DEMO_KEY";
export const API_KEY = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
