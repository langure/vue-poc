import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '@/config/config';

const instance = axios.create({
    baseURL: API_BASE_URL,
});

export default {
    async getFeaturedProducts() {
        return instance.get(API_ENDPOINTS.getFeaturedProducts);
    },

};
