// "https://pokeapi.co/api/v2/pokemon/charmander"

import { pokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

// Define el tipo para las entradas de descripción
interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

export async function fetchPokemon(name: string): Promise<pokemonDetails> {
  try {
    // Hacer la solicitud para obtener los detalles del Pokémon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${name} details`);
    }

    const result = await response.json();

    // Hacer la solicitud para obtener información adicional del Pokémon
    const speciesResponse = await fetch(result.species.url);

    if (!speciesResponse.ok) {
      throw new Error(`Failed to fetch species details for ${name}`);
    }

    const speciesResult = await speciesResponse.json();

    // Buscar la descripción en español en el array de flavor_text_entries
    const descriptionInSpanish = speciesResult.flavor_text_entries.find(
      (entry: FlavorTextEntry) => entry.language.name === "es"
    ).flavor_text;

    // Construir el objeto de detalles del Pokémon
    const pokemon: pokemonDetails = {
      name: result.name,
      id: result.id,
      imgSrc: result.sprites.other["official-artwork"].front_default,
      tipo: result.types[0].type.name,
      altura: result.height,
      peso: result.weight,
      descripcion: descriptionInSpanish,
    };

    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}
