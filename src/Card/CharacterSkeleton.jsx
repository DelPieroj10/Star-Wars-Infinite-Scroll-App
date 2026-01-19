import '../Style_various/skeleton.css';

export function CharacterSkeleton() {
  return (
    <article className="character-card skeleton">
      <div className="line title" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line short" />
    </article>
  );
}
