import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"

function GenreList() {

  const { data, isLoading, error } = useGenres()
  const seletedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3} >
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(genre.image_background)} />
              <Button
                fontWeight={genre.id === seletedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
                onClick={() => setGenreId(genre.id)}>{genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList