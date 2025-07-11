import Search from "../islands/Search.tsx";

export type Personaje = {
  id: string,
  name: string,
  image: string,
  status: string,
  species: string,
  gender: string,
  origin: {
    name: string,
  }
  location: {
    name: string,
  }
}

export type RespuestaAPI = {
  info: {
    pages: string,
    next: string,
  }
  results: Personaje[],
}

export default function Page(){
  return(
    <Search/>
  )
}