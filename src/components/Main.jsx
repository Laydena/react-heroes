import Card from './Card';

import data from '../data.json';

export default function Main() {
    console.log(data.heroes);
    return (
        <>
            <div className="cards-container">
                {data.heroes.map((item, index) => (
                    <Card name={item.name} universe={item.universe} url={item.url} alterego={item.alterego} occupation={item.occupation} friends={item.friends} superpowers={item.superpowers} key={index} />
                ))
                }

            </div>

        </>
    )

}