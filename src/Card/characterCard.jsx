export function CharacterCard({ character, onSelectedCharacter }) {

  return (
    <article 
      className="character-card"
      onClick={() => {
        onSelectedCharacter(character);
      }}
      >
      <h4>{character.name}</h4>
      <p>Height: {character.height}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <div className="homeworld">
        <p>
          - Homeworld: {character.homeworldName} <br /> 
          - Climate: {character.homeworldClimate}
        </p>
      </div>
    </article>
  );
}
