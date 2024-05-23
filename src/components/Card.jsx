import Rating from './Rating';

export default function Card(props) {
    return (

        <div className="card">
            <h2>{props.name}</h2>
            <img className="image_hero" src={props.url} alt='' />
            <h3 className="universe">Вселенная: {props.universe}</h3>
            <h3 className="alterego">Альтер-эго: {props.alterego}</h3>
            <h3 className="occupation">Деятельность: {props.occupation}</h3>
            <h3 className="friends">Друзья: {props.friends}</h3>
            <h3 className="superpowers">Суперсила: {props.superpowers}</h3>
            <Rating />
        </div>

    )

}