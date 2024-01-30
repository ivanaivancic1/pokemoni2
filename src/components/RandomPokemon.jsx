import "./RandomPokemons.css";

export default function RandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 150) + 1;
    const randomPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;

    return (
        <div className="RandomPokemon">
            <h2>Dobili ste pokemona broj {randomNumber}</h2>
            <br />
            <img src={randomPicture} alt="pokemon" height="auto" width="300px" />
        </div>
    );
}