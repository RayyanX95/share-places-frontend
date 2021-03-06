import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

const UserItem = (props) => {
  return (
    <li data-test="user-item" className="user-item" >
      <Card className="user-item__content">
        <Link data-test="user-link" to={`/${props.id}/places`} >
          <div className="user-item__image">
            <Avatar image={`${process.env.REACT_APP_ASSETS_URL}/${props.image}`} name={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}</h3>
          </div>
        </Link>
      </Card>
    </li>
  )
}

export default UserItem