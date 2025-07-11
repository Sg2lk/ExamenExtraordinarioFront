import { Personaje } from "../routes/index.tsx";

export default function Personajes({personajes}:{personajes: Personaje[]}){
    return(
        <div class="characters">
            {personajes.map((e) => (
                <div class="card">
                    <img src={e.image}></img>
                    <p>{e.name}</p>
                </div>
            ))}
        </div>
    )
}