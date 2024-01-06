import Rating from './Rating';

export default function Card({ name, universe, url, alterego, occupation, friends, superpowers }) {
    return (

        <div className="card">
            <h2>{name}</h2>
            <img className="image_hero" src={url} alt='' />
            <h3 className="universe">Вселенная: {universe}</h3>
            <h3 className="alterego">Альтер-эго: {alterego}</h3>
            <h3 className="occupation">Деятельность: {occupation}</h3>
            <h3 className="friends">Друзья: {friends}</h3>
            <h3 className="superpowers">Суперсила: {superpowers}</h3>
            <Rating />
        </div>

    )

}