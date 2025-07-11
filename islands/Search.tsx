import { useEffect, useState } from "preact/hooks";
import axios from "npm:axios";
import { Personaje, RespuestaAPI } from "../routes/index.tsx";



export default function Search(){

    async function handle(){
        const name = document.getElementById("input_nombre");
        const aux = name.value;
        setNombre(aux);
        await fetchInput();
    }

    const [pagina, setPagina] = useState<number>(1);
    const [paginasTotal, setTotal] = useState<string>("");
    const [lista, setLista] = useState<Personaje[]>([]);
    const [nombre, setNombre] = useState<string>("");

    async function fetchInput() {
    
        try {
            const res = await axios.get<RespuestaAPI>(`https://rickandmortyapi.com/api/character?name=${nombre}`);
            setTotal(res.data.info.pages);
            setLista(res.data.results);
        } catch (error) {
            throw new Error("API fetch failed!");
        }
    }

    async function fetch() {
    
        try {
            const res = await axios.get<RespuestaAPI>(`https://rickandmortyapi.com/api/character?page=${pagina}`);
            setTotal(res.data.info.pages);
            setLista(res.data.results);
        } catch (error) {
            throw new Error("API fetch failed!");
        }
    }
    
    useEffect(() => {
        fetch();
    }, [pagina])

    return(
        <>
        <div>
        <div class="container">
            <h2 class="title">Rick and Morty Characters</h2>

            <div class="search-form">
            <input id="input_nombre" class="search-input" name="name" placeholder="Nombre del personaje"></input>
            <button type="button" class="button" onClick={() => {handle()}}>Buscar</button>
            </div>

            <div class="characters">
                {lista.map((e) => (
                    <div class="character-card">
                        <a href={`/character/${e.id}`}>
                            <img src={e.image}></img>
                        </a>
                        <p>{e.name}</p>
                    </div>
                ))}
            </div>

            <div class="pagination">
                <button class={`button`} type={`button`} onClick={() => {setPagina(pagina-1)}}>Anterior</button>
                <span>{pagina}/{paginasTotal}</span>
                <button class={`button`} type={`button`} onClick={() => {setPagina(pagina+1)}}>Siguiente</button>
            </div>
        </div>
        </div>
        </>
    )
}