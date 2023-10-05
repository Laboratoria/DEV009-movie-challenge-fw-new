import './Cards.css'

function Cards(props) {
    let estrellas= '⭐'.repeat(props.stars)
    return(// JSX nos permite escribir html dentro de js
        <h4 className='intro'>
            Pelicula de  {props.titleMovie} de {props.dateMovie} {estrellas}
        </h4>
    )
}

export default Cards; 