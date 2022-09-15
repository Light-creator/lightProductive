export interface ICard {
    id: number;
    text: string;
}
  
export interface IBoard {
    id: number;
    title: string;
    cards: ICard[];
}