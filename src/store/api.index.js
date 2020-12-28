import axios from 'axios';
import { API } from '../bakend';
import { isSignedIn } from '../helper';
// Get Base URL
const baseURL = API;

// Check If Token Exists
let token = isSignedIn();
export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token.access_token}`,
  },
});
