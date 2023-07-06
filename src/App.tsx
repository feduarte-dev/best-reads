import './App.css';
import { useState } from 'react';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types/index';

function App() {
  const [index, setIndex] = useState(0);
  const [wishList, setwishList] = useState<BookInfoType[]>([]);

  function handleNextClick() {
    return index + 1 < data.length ? setIndex(index + 1) : setIndex(0);
  }

  function handleAddClick() {
    setwishList([...wishList, data[index]]);
  }

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[index] } showDetails />
        <div className="selector-buttons">
          <button onClick={ handleAddClick }>Adicionar à lista de desejos</button>
          <button>Adicionar à lista de leitura</button>
          <button>Adicionar à lista de lidos</button>
          <button onClick={ handleNextClick }>Próximo livro</button>
        </div>
      </div>

      <div className="list-buttons">
        <button>Exibir lista de desejos</button>
        <button>Exibir lista de leitura</button>
        <button>Exibir lista de lidos</button>
      </div>
      <h1>Lista de ...</h1>
      <BookList books={ wishList } />
    </div>
  );
}

export default App;
