import Pizza from "./Pizza.js";
import pizzasData from "./../data/pizzaData";

const numPizzas = pizzasData.length;

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzasData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

export default Menu;
