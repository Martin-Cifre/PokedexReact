// "https://pokeapi.co/api/v2/pokemon/charmander"

import { pokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<pokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`
    );
  if (!response.ok) {
  throw new Error(`Failed to fetch ${name} details`);
    }
    const result = await response.json();
    const pokemon = {
      name: result.name,
      id: result.id,
      imgSrc: result.sprites.other["official-artwork"].front_default,
      tipo: result.types[0].type.name,
      altura: result.height,
      peso: result.weight,
    };
    return pokemon;
} 