import React from 'react';
import List from './List/List';
import { ICard } from '../../interfaces/Card';

export interface Props {
  cards: [];
}

export default function KanbanBoard(props: any) {
  return (
    <div className='app'>
      <List id='todo' title='To Do' cards={props.cards.filter((card: ICard) => card.status === 'todo')} />
      <List
        id='in-progress'
        title='In Progress'
        cards={props.cards.filter((card: ICard) => card.status === 'in-progress')}
      />
      <List id='done' title='Done' cards={props.cards.filter((card: ICard) => card.status === 'done')} />
    </div>
  );
}
