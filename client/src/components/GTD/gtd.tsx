import { FC, useState } from 'react'
import "./gtd.sass"
import { FaTrashAlt } from 'react-icons/fa';
import MyInput from '../MyInput/MyInput';

interface ICard {
  id: number;
  text: string;
}

interface IBoard {
  id: number;
  title: string;
  cards: ICard[];
}

const Gtd: FC = () => {

  const [cols, setCols] = useState<IBoard[]>([
    {id: 0, title: "Корзина 1", cards: [{id: 0, text: "text 1"}, {id: 1, text: "text 2"}, {id: 2, text: "text 3"}]},
    {id: 1, title: "Корзина 2", cards: [{id: 3, text: "text 1"}, {id: 4, text: "text 2"}, {id: 5, text: "text 3"}]},
    {id: 2, title: "Корзина 3", cards: [{id: 6, text: "text 1"}, {id: 7, text: "text 2"}, {id: 8, text: "text 3"}]},
  ]);

  const [curBoard, setCurBoard] = useState<IBoard>(cols[0]);
  const [curCard, setCurCard] = useState<ICard>(cols[0].cards[0]);

  const [newTask, setNewTask] = useState<ICard>({id: 0, text: ''})

  const dragStart = (e: any, board: IBoard, card: ICard) => {
    setCurBoard(board);
    setCurCard(card);
  }

  
  const dragLeave = (e: any) => {
    e.target.className = 'card'
  }

  
  const dragEnd = (e: any) => {
    e.target.className = 'card'
  }

  
  const dragOver = (e: any) => {
    e.preventDefault();
    if(e.target.className === 'card' || e.target.className === 'card card_down') {
      e.target.className = 'card card_down'
    } 
  }

  const dragDropCard = (e: any, board: IBoard) => {
    if(board.cards.length === 0) {
      const curIndex = curBoard?.cards.indexOf(curCard);
      curBoard.cards.splice(curIndex, 1); 
      board.cards.push(curCard);
      const newArr = createNewArr(board);
      setCols(newArr);
    }
  }

  const createNewArr = (board: IBoard) => {
    const newArr = cols.map(col => {
      if(col.id === board.id) {
        return board;
      }else if(col.id === curBoard.id) {
        return curBoard;
      } else {
        return col;
      }
    });
    return newArr;
  }
  
  const dragDrop = (e: any, board: IBoard, card: ICard) => {
    e.preventDefault();
    const curIndex = curBoard?.cards.indexOf(curCard);
    curBoard.cards.splice(curIndex, 1);
    const dropIndex = board.cards.indexOf(card);
    board.cards.splice(dropIndex+1, 0, curCard);
    const newArr = createNewArr(board);
    setCols(newArr);
    e.target.className = 'card'
  }

  const createTaskFirstStep = (e: any, col_id: number) => {
    e.preventDefault();
    if(e.traget.className === 'create_task') {
      const myInp = document.getElementById(`MyInput${col_id}`);
    }
  }

  return (
    <div className="position">
      {cols.map(col =>
        <div className="board_wrapper" key={col.id}>
          <div className='board' 
            key={col.id}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => dragDropCard(e, col)} 
            >
            <div className="title_block">
              <h4>{col.title}</h4>
              <button><FaTrashAlt /></button>
            </div>
            
            {col.cards.map(card =>
              <div 
              draggable={true} 
              onDragOver={(e) => dragOver(e)}
              onDragLeave={(e) => dragLeave(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragStart={(e) => dragStart(e, col, card)}
              onDrop={(e) => dragDrop(e, col, card)}
              className="card" key={card.id}>{card.text}</div>
            )}
            <MyInput id={`MyInput${col.id}`} />
            <button className='create_task' onClick={(e) => createTaskFirstStep(e, col.id)}>Добавить карточку</button>
          </div>
        </div>
        )}
    </div>
  )
}

export default Gtd