import { FC, useState } from 'react'
import "./gtd.sass"

interface ICard {
  id: number;
  text: string;
}

interface IBoard {
  id: number;
  title: string;
  cards: ICard[] | ICard;
}

const Gtd: FC = () => {

  const [cols, setCols] = useState<IBoard[]>([
    {id: 0, title: "Корзина", cards: [{id: 0, text: "text"}, {id: 1, text: "text"}, {id: 2, text: "text"}]},
    {id: 1, title: "Корзина", cards: [{id: 0, text: "text"}, {id: 1, text: "text"}, {id: 2, text: "text"}]},
    {id: 2, title: "Корзина", cards: [{id: 0, text: "text"}, {id: 1, text: "text"}, {id: 2, text: "text"}]},
  ]);

  const dragStart = (e: any, board: IBoard, card: ICard) => {
    e.preventDefault();
  }

  
  const dragLeave = (e: any) => {
    e.target.style.boxShadow = 'none';
  }

  
  const dragEnd = (e: any) => {
    e.target.style.boxShadow = 'none';
  }

  
  const dragOver = (e: any) => {
    if(e.target.className == 'card') {
      e.target.style.boxShadow = '0 2px 3px gray';
    }
  }

  
  const dragDrop = (e: any, board: IBoard, card: ICard) => {
    e.target.style.background = "white";
    e.preventDefault();
  }

  return (
    <div className="position">
      {cols.map(col =>
        <div className='board' key={col.id}>
          <div className="title_block">{col.title}</div>
          
          {col.cards.map<ICard>(card =>
            <div 
            draggable={true} 
            onDragOver={(e) => dragOver(e)}
            onDragLeave={(e) => dragOver(e)}
            onDragEnd={(e) => dragOver(e)}
            onDragStart={(e) => dragStart(e, col, card)}
            onDrop={(e) => dragOver(e)}
            className="card" key={card.id}>{card.text}</div>
          )}
        </div>
        )}
    </div>
  )
}

export default Gtd