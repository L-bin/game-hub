import { useInfiniteQuery } from '@tanstack/react-query';
import Game from "../entities/Game"
import APIClient, { FetchResponse } from "../services/api-client"
import useGameQueryStore from "../store"

const apiClient = new APIClient<Game>("/games")

function useGames() {

  const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genreId: gameQuery.genreId,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })
}

export default useGames