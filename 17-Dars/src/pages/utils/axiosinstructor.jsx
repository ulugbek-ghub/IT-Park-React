import axios from "axios";

const axiosInstructions = axios.create({
    baseURL: "https://e-commerce-api-v2.nt.azimumarov.uz/api/v1/products"
})

export default axiosInstructions