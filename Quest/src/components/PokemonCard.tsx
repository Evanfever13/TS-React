interface Pokemon {
  name: string;
  imgSrc?: string;
}


function PokemonCard({ pokemon }:{ pokemon : Pokemon}) {
  if (pokemon.imgSrc !== undefined){
    return (
    <>
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} ></img>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    </>
    );
  }
    return(
    <>
    <figure>
      <p>"???"</p>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    </>
    )
}

export default PokemonCard;
