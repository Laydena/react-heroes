export default function Rating() {
    return (

        <div className="ratio">
            <h3>Оцените героя:</h3>
            <form className="form">
                <input type="radio" data-type="radio" className="star-ratio" name="rt" value="1" />
                <input type="radio" data-type="radio" className="star-ratio" name="rt" value="2" />
                <input type="radio" data-type="radio" className="star-ratio" name="rt" value="3" />
                <input type="radio" data-type="radio" className="star-ratio" name="rt" value="4" />
                <input type="radio" data-type="radio" className="star-ratio" name="rt" value="5" />
            </form>
        </div>
    )
}
