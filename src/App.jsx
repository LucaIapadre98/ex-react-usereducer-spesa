import { useState } from "react";
function App (){

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);                     // Stato locale per i prodotti nel carrello
   
  const addToCart = (product) => {                                 // Funzione per aggiungere un prodotto al carrello
    const isProductInCart = addedProducts.some(product => product.name === product.name); // Controlla se il prodotto è già nel carrello
    if (isProductInCart) {                                      // Se il prodotto non è già nel carrello
      return;                                               // ritorna undefined
    }
    setAddedProducts(curr => [...curr, {                       // Aggiungi il prodotto al carrello con quantità 1
      ...product, 
      quantity: 1
    }]);
  };
  return (
    <>
    <h1>Elenco prodotti e prezzi:</h1>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <p>{product.name}({product.price.toFixed(2)}$)</p>
          <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
        </li>
      ))}
    </ul>
    {addToCart.length > 0 && (
      <>
      <h2>Tuo Carrello:</h2>
      <ul>
        {addedProducts.map((product, index) => (
          <li key={index}>
            <p>{product.quantity} x {product.name} ({product.price.toFixed(2)}$)</p>
          </li>
        ))}
      </ul>
      </>)}
    </>
  );
};

export default App;

// 1. Parti dall’array products fornito: 
// Crea un componente che mostra la lista dei prodotti.
// Per ogni prodotto, mostra:
// Nome
// Prezzo

// Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.



// Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
// Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
// Al click del bottone, usa una funzione addToCart per:
// Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
// Se il prodotto è già nel carrello, ignora l’azione.
// Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
// Per ogni prodotto nel carrello, mostra:
// Nome
// Prezzo
// Quantità

// Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.