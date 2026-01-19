import '../Style_various/emptyState.css';

export function EmptyState({
  title = "No characters found",
  description = "Try again later or check your connection.",
}) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
