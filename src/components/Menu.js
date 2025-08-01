import data from "./../data/pizzaData.js";

function Menu() {
  const pizzas = data.map((pizza) => {
    let soldOut;

    if (pizza.soldOut) {
      soldOut = "SOLD OUT";
      pizza.price = "";
    }

    return (
      <div>
        <img src={pizza.photoName} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <p>{pizza.price}</p>
        <p>{soldOut}</p>
      </div>
    );
  });

  return (
    <main className="menu">
      <h2>Our menu</h2>
      <div>{pizzas}</div>
    </main>
  );
}

export default Menu;
