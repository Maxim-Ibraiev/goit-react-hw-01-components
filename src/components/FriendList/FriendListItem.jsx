import React from 'react'
import PropTypes from 'prop-types';

function FriendListItem({item}) {
  return (
    <>
      {item.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span
              className="status"
              style={{ background: isOnline ? 'green' : 'red' }}
            ></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </>
  );
}

FriendListItem.PropType = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};

export default FriendListItem;
