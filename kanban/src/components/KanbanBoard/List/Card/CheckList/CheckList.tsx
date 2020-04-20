import React from 'react';
import { ITask } from '../../../../../interfaces/Card';

export default function CheckList(props: any) {
  let tasks = props.tasks.map((task: ITask) => (
    <li key={task.name} className='checklist__task'>
      <input type='checkbox' defaultChecked={task.done} /> {task.name}
      <a href='#a' className='checklist__task--remove' />
    </li>
  ));

  return (
    <div className='checklist'>
      <ul>{tasks}</ul>
    </div>
  );
}
