import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import { name, tag, location, avatar, stats } from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory item={transactions} />
    </>
  );
}
