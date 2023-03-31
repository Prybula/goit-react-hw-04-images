const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24406319-bf3b8b8cf58844aea35169848";

export const  fetchImages = async( query, page )=> {
  const response = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await response.json();
}