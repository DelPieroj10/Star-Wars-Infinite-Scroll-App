import { useState, useEffect, useRef, useCallback } from "react";
import { fetchCharactersWithPlanets  } from "../Helper_component/starWarsApi";

export function UseStarWarsHook() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef(null);
  const loaderRef = useRef(null);
  const [error, setError] = useState(null);


  const fetchCharacters = async (pageNum) => {
    try {
      setIsLoading(true);
      const data = await fetchCharactersWithPlanets(pageNum);
      setCharacters((prev) => [...prev, ...data]);
    } catch (e){
      setError("Failed to load characters");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const observeLoader = useCallback(
    (node) => {
      if (isLoading) return;

      if (observerRef.current instanceof IntersectionObserver) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading],
  );

  useEffect(() => {
    if (loaderRef.current) {
      observeLoader(loaderRef.current);

      return () => observerRef.current?.disconnect();
    }
  }, [observeLoader]);

  return {
    characters,
    isLoading,
    loaderRef,
    error,
  };
}
