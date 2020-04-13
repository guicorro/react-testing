import React, { useState } from 'react';
import { ICard } from '../../../../interfaces/Card';
import CheckList from './CheckList/CheckList';

export default function Card(props: any) {
  const card: ICard = props.card;
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails);

  let cardDetails = (
    <div className='card__details'>
      {card.description}
      {showDetails ? <CheckList cardId={card.id} tasks={card.tasks} /> : null}
    </div>
  );

  return (
    <div>
      <div className='card'>
        <div
          className={showDetails ? 'card__title card__title--is-open' : 'card__title'}
          onClick={() => setShowDetails(!showDetails)}
        >
          {card.title}
        </div>
        {cardDetails}
      </div>
    </div>
  );
}
