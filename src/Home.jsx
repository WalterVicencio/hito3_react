import Header from './Header';
import CardPizza from './CardPizza';
import { ListaPizzas } from './pizzas';

const Home = () => {

    return(
        <>
        <Header 
            titulo="¡Pizzería Mamma Mia!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!"
        />
        <div className='cards'>
        
        {ListaPizzas.map ( pizza =>
            <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            />
        )}  

        
        </div>
        </>
    ) 
}

export default Home;