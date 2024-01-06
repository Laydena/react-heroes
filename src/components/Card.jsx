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
        // <div className="card">
        //     <h2></h2>
        //     <img className="image_hero"></img>
        //     <h3 className="universe">Вселенная: </h3>
        //     <h3 className="alterego">Альтер-эго:</h3>
        //     <h3 className="occupation">Деятельность:</h3>
        //     <h3 className="friends">Друзья:</h3>
        //     <h3 className="superpowers">Суперсила:</h3>
        //     <a>
        //         <h3>Полная информация</h3>
        //     </a>
        //     <Rating />
        // </div>
    )

}