import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform } [];
    metacritic: number;
}

interface FetchGameResponse {
    counter: number;
    results: Game []
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchGameResponse>("/games", {signal: controller.signal})
            .then((response) => {
                setGames(response.data.results);
                setLoading(false);});

        return () => controller.abort();
    }, []);

    return { games, error, loading };
}

export default useGames;


