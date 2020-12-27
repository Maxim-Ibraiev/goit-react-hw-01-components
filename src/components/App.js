import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import { name, tag, location, avatar, stats } from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export default function App() {
  return (
    <>
      <section>
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </section>

      <section>
      <Statistics  stats={statisticalData} />;
      </section>

      <section>
      <FriendList friends={friends} />
      </section>

      <section>
      <TransactionHistory item={transactions} />
      </section>
    </>
  );
}
