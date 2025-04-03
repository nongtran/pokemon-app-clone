export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string | null;
    legacy: string | null;
  };
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: unknown[]; // Assuming no specific structure for game_indices
  height: number;
  held_items: unknown[]; // Assuming no specific structure for held_items
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      order: number | null;
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  order: number;
  past_abilities: unknown[]; // Assuming no specific structure for past_abilities
  past_types: unknown[]; // Assuming no specific structure for past_types
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions: {
      [generation: string]: {
        [game: string]: {
          back_default: string | null;
          back_gray?: string | null;
          back_transparent?: string | null;
          back_shiny?: string | null;
          back_shiny_transparent?: string | null;
          back_female?: string | null;
          back_shiny_female?: string | null;
          front_default: string | null;
          front_gray?: string | null;
          front_transparent?: string | null;
          front_shiny?: string | null;
          front_shiny_transparent?: string | null;
          front_female?: string | null;
          front_shiny_female?: string | null;
          animated?: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
          };
        };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}

export type DamageRelation = {
  name: string;
  url: string;
};

export type GameIndex = {
  game_index: number;
  generation: {
    name: string;
    url: string;
  };
};

export type Move = {
  name: string;
  url: string;
};

export type Name = {
  language: {
    name: string;
    url: string;
  };
  name: string;
};

export type PokemonSlot = {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
};

export type SpriteGeneration = {
  name_icon: string;
};

export type Sprites = {
  [generation: string]: {
    [game: string]: SpriteGeneration;
  };
};

export type PokemonTypeDetails = {
  damage_relations: {
    double_damage_from: DamageRelation[];
    double_damage_to: DamageRelation[];
    half_damage_from: DamageRelation[];
    half_damage_to: DamageRelation[];
    no_damage_from: DamageRelation[];
    no_damage_to: DamageRelation[];
  };
  game_indices: GameIndex[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  move_damage_class: {
    name: string;
    url: string;
  };
  moves: Move[];
  name: string;
  names: Name[];
  past_damage_relations: unknown[]; // Assuming no specific structure for past_damage_relations
  pokemon: PokemonSlot[];
  sprites: Sprites;
};
