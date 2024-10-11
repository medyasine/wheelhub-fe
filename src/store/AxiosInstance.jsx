import axios from 'axios';
//import store from './index.jsx'; 
//import { addLog } from './LogsSlice.jsx'; // Import the action to dispatch


// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL,  
  headers: {
    'Content-Type': 'application/json',
  },
});


  
// Response Interceptor (Tracks all data)
axiosInstance.interceptors.response.use((response) => {
    const logData = {
    statusCode: response.status,
    httpMethod: response.config.method.toUpperCase(),
    endpoint: response.config.url,
    // Note: timestamp and user will be handled by the backend
  };
  console.log('Log data:', logData); // For now, just log to console
    //9ra had code a AMINE ben omar heeeeeeelp
    //9ra had code a AMINE ben omar heeeeeeelp
    //9ra had code a AMINE ben omar heeeeeeelp
    //9ra had code a AMINE ben omar heeeeeeelp
  //store.dispatch(addLog(logData));
  return response;
}, (error) => {
  if (error.response) {
    const logData = {
      statusCode: error.response.status,
      httpMethod: error.config.method.toUpperCase(),
      endpoint: error.config.url,
      // Note: timestamp and user will be handled by the backend
    };
    console.log('Error log data:', logData); // For now, just log to console
    //store.dispatch(addLog(logData));
  }
  return Promise.reject(error);
});

export default axiosInstance;
