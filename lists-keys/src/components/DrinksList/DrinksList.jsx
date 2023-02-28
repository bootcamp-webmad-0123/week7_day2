import { drinksArray } from './../../fakeAPI'

const DrinksList = () => {

    return (
        <>
            <h1>Listado de bebidas</h1>
            {
                drinksArray.map((elm, idx) => {
                    return <p key={idx}>{elm}</p>
                })
            }
        </>
    )
}

export default DrinksList