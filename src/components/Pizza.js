import data from "./../data/pizzaData.js";

function Pizza() {
  const pizzas = data.map((pizza) => {
    return (
      <div>
        <h2>{pizza.name}</h2>
        <img src={pizza.photoName} alt={pizza.name} />
        <p>{pizza.ingredients}</p>
        <p>{pizza.price}</p>
        <p>{pizza.soldOut}</p>
      </div>
    );
  });

  return <div>{pizzas}</div>;
}

export default Pizza;
