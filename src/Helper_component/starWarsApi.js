const API_CHARACTER_ENDPOINT = 'https://swapi.py4e.com/api/people/';

export async function fetchCharactersWithPlanets(pageNum) {
  const res = await fetch(`${API_CHARACTER_ENDPOINT}?page=${pageNum}`);
  if (!res.ok) throw new Error('Error fetching characters');
  
  const data = await res.json();
  if(!data.next) return;
  
  return Promise.all(
    data.results.map(async (char) => {
      try {      
        const planetRes = await fetch(char.homeworld);
        const planetData = await planetRes.json();
        return {
          ...char,
          homeworldName: planetData.name,
          homeworldClimate: planetData.climate,
        }
      } catch (error) {
        return {
          ...char,
          homeworldName: 'Unknown',
          homeworldClimate: 'Unknown',
        };
      }
    })
  );
}
