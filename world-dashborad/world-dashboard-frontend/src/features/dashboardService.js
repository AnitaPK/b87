import axiosInstance from "../services/axiosInstance";

export const getTotalPopulation = async () => {
    const response = await axiosInstance.get("/totalPopulation");
    console.log(response.data)
    return response.data;
};

export const getTopCountries = async () => {
    const response = await axiosInstance.get("/top10PopulatedCon");
    return response.data;

};