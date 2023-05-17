import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    counter: number;
    results: Game []
}

const GameGrid = () => {
  
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient.get<FetchGameResponse>('/games')
        .then(response => setGames(response.data.results))
        .catch(error => setError(error.meesage))
  })


  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
 )
}

export default GameGrid