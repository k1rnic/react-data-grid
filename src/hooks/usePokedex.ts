import axios, { AxiosInstance } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { IPokemon } from '../interfaces/pokemon';

const POKEDEX_API_BASE_URL = 'http://zar.hosthot.ru/api/v1';

enum Endpoints {
  getPokemons = '/pokemons',
}

type PokedexMetaData = {
  pokemons: IPokemon[];
};

const usePokedex = (): [PokedexMetaData] => {
  const instance = useMemo<AxiosInstance>(
    () =>
      axios.create({
        baseURL: POKEDEX_API_BASE_URL,
      }),
    [],
  );

  const [data, setData] = useState<PokedexMetaData>({
    pokemons: [],
  });

  const getPokemons = () => {
    return instance
      .get<any, { data: PokedexMetaData }>(Endpoints.getPokemons)
      .then(({ data }) => data);
  };

  useEffect(() => {
    getPokemons().then(setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = useMemo<[PokedexMetaData]>(() => [data], [data]);

  console.log(state);

  return state;
};

export default usePokedex;
