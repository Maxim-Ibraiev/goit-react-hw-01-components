import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      <FriendListItem item={friends} />
    </ul>
  );
}

FriendList.PropType = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};

export default FriendList;
