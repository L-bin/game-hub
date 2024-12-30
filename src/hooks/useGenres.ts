import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import genres from "../data/genres"
import Genre from "../entities/Genre"
import APIClient from "../services/api-client"


const apiClient = new APIClient<Genre>("/genres")

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: genres
  })
}

export default useGenres