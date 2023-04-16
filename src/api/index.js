import axios from "axios";
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
export const getPlacesData = async (sw, ne) => {
    try{
         //request
         const {data: {data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'f6434cf978mshcf04c48c1f42c09p1aa8f4jsn92152de17000',
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