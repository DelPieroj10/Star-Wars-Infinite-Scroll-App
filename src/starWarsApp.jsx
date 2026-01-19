import { UseStarWarsHook } from "./Hook_component/starWarsHook";
import { CharacterCard } from "./Card/characterCard";
import { CharacterSkeleton } from "./Card/CharacterSkeleton";
import { EmptyState } from "./EmptyComponent/EmptyState";

export default function StarWarsApp() {
  const { characters, isLoading, observerRef, loaderRef, error } =
    UseStarWarsHook();

  return (
    <main className="main">
      <h1>SWAPI APP with Infinite Scroll</h1>
      <hr />

      <section className="character-list">
        {characters.map((char, index) => {
          return (
            <CharacterCard
              character={char}
              onSelectedCharacter={(char) => console.log(char.name)}
              key={index}
            />
          );
        })}
        <div className="loading-trigger" ref={loaderRef}>
          {isLoading && (
            <>
              <CharacterSkeleton />
              <CharacterSkeleton />
              <CharacterSkeleton />
            </>
          )}
        </div>

        {!isLoading && characters.length === 0 && <EmptyState />}
      </section>

      <div ref={observerRef}></div>

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </main>
  );
}
