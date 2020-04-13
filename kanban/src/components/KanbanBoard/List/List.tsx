import React from 'react';
import { ICard } from '../../../interfaces/Card';
import Card from './Card/Card';

export default function List(props: any) {
  var cards = props.cards.map((card: ICard) => {
    return <Card key={card} card={card} title={card.title} description={card.description} tasks={card.tasks} />;
  });
  return (
    <div className='list'>
      <h1>{props.title}</h1> {cards}
    </div>
  );
}
