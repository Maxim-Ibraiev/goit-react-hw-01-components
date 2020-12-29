import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ stats, title }) {
  return (
    <>
      <section className="statistics">
        {title ? <h2 className="title">{title}</h2>: null}

        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className="item"
                key={id}
                style={{
                  background: `rgb(${Math.random() * 255}, ${
                    Math.random() * 255
                  }, ${Math.random() * 255})`,
                }}
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

Statistics.PropType = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
