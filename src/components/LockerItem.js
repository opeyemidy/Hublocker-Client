import React from 'react';
import { Link } from 'react-router-dom';
export default function LockerItem({ locker }) {
  return (
    <div className="row locker-item  mb-3 py-3">
      <div className="col-md-2">{`${locker.size} ${locker.name}`}</div>
      <div className="col-md-4">{locker.description}</div>
      <div className="col-md-2">{locker.firstPrice}N For First Rent</div>
      <div className="col-md-2">{locker.quantity} available</div>
      <div className="col-md-2">
        <Link
          className="rent-button text-capitalize px-5 py-1"
          to={`/lockers/${locker.id}`}
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
}
