import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    counter: number;
    results: Game []
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");


    useEffect(() => {

        const controller = new AbortController();

        apiClient
            .get<FetchGameResponse>("/games", {signal: controller.signal})
            .then((response) => setGames(response.data.results));

        return () => controller.abort();
    }, []);

    return { games, error };
}

export default useGames;


