export default function fetchPokemon(): void {
   const urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=200"

   fetch(urlPokemon)
    .then(res => res.json())
    .then(res => {
        console.log(res.results)
    })

}