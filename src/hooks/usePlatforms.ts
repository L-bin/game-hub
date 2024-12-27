
import { useQuery } from "@tanstack/react-query"
import Platform from "../entities/Platform"
import APIClient from "../services/api-client"

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

function usePlatforms(){
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll
  })
}

export default usePlatforms