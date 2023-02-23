import { useState } from "react";

function formatPrice(price: string): string {
  const parsedPrice = parseFloat(price.replace("$", ""));
  const formattedPrice = parsedPrice.toFixed(2);
  return `$${formattedPrice}`;
}

function App() {
  const [price, setPrice] = useState<string>("");
  const [formattedPrice, setFormattedPrice] = useState<string>("");

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleFormatPrice = () => {
    const formattedPrice = formatPrice(price);
    setFormattedPrice(formattedPrice);
  };

  return (
    <div className="App" >
      <label>
        Price: <input type="text" value={price} onChange={handlePriceChange} />
      </label>
      <button onClick={handleFormatPrice}>Format Price</button>
      <p>Formatted Price: {formattedPrice}</p>
    </div>
  );
}

export default App;