import { Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Personaje } from "../index.tsx";

export const handler:Handlers = {
  GET: async(_req,c) => {

    const {id} = c.params;
    try {
        const res = await axios.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`);
        return c.render(res.data);

    } catch (error) {
        throw new Error("API fetch failed!");
    }
  }
}

export default function Page({data}:PageProps<Personaje>){

  return(
    <>
            <a href={`/`} class="back-link">Volver</a>
            <div class="character-detail">
            <div class="character-info">
                <img src={data.image}></img>
            </div>
            <div class="character-info">
                <ul>
                    <h2>{data.name}</h2>
                    <p>Status: {data.status}</p>
                    <p>Species: {data.species}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Origin: {data.origin.name}</p>
                    <p>Location: {data.location.name}</p>

                </ul>
            </div>
        </div>
    </>
  )
}