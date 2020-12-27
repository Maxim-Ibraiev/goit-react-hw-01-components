import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ stats }) {
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {

            return (
              <li
                className="item"
                key={id}
                style={{
                  background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }}
              >
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

Statistics.defaultProp = {
  title: 'Upload stats',
};

Statistics.PropType = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
