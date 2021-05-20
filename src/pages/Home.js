import React, { useState, useEffect, useRef } from 'react';
import LockerItem from '../components/LockerItem';

// services
import lockerService from '../services';

export default function Home({ initialLockers }) {
  const childReference = useRef(null);
  const [lockers, setLockers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLockers(initialLockers);
  }, [initialLockers]);
  const getData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await lockerService.getSearchedLockers(search);
    setSearch('');
    setLoading(false);
    await setLockers(data);
    childReference.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };
  return (
    <div className="home">
      <section className="upper container-fluid">
        <div className="row">
          <div className="col-md-7 pl-3">
            <h1>Find a Locker</h1>
            <div className="input-container">
              <form onSubmit={getData}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8">
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        placeholder="Enter City or State"
                      />
                    </div>
                    <div className="col-md-4">
                      <button className="button">
                        {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <>
                            <h3>Find Locker</h3>
                            <small>One Naira for First Rent</small>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="lower">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex justify-content-between py-3 sort-container">
              <h5> {lockers.length} Open lockers Available</h5>
              <select className="py-2">
                <option value="closest">Closest</option>
                <option value="lowest">Lowest Price</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 station-card">
              <div className="locker-image mt-2">
                <img
                  src="https://st.depositphotos.com/1765561/3491/i/950/depositphotos_34914823-stock-photo-deposit-box-with-key.jpg"
                  alt=""
                />
              </div>
              <h6>Adeola, Odeku Street, VI, Lagos.</h6>
              <div className="rating-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h6>0.3 miles away</h6>
            </div>
            <div className="col-md-10">
              <div className="container-fluid">
                <div
                  className="row justify-content-between mt-2"
                  style={{ marginBottom: '5.5rem' }}
                >
                  <div className="col-md-3 filter-select">
                    <select name="cars" className="py-2" id="cars">
                      <option className="py-2" value="volvo">
                        Featured
                      </option>
                      <option value="saab">Small</option>
                      <option value="mercedes">Medium</option>
                      <option value="audi">Large</option>
                    </select>
                  </div>
                  <div></div>
                </div>
                <div ref={childReference}>
                  {lockers.length > 0 ? (
                    lockers.map((locker) => (
                      <LockerItem locker={locker} key={locker.id} />
                    ))
                  ) : (
                    <h5 className="text-center">
                      <b>no locker is available for this location</b>{' '}
                    </h5>
                  )}
                </div>
                <div className="row">
                  <a href="#">View all lockers at this location</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
