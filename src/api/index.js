import axios from "axios";
export const getPlacesData = async (type, sw, ne) => {
    try{
         //request
         const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '3434a98c6cmsh7b76a4c63642f1bp19dc49jsn83d9d9d14867',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
          
         return data;
    }
    catch (error)
    {
       console.log(error)
    }
}