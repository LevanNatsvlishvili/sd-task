import { useEffect, useState } from 'react';
import { fetchCity, fetchParkingArea } from '../../services/city';
import Header from './Header';
import { login, register } from '../../services/auth';
import { startParking, stopParking } from '../../services/parking';

/* eslint-disable react/no-unescaped-entities */
function HeroBlock() {
  const [cities, setCities] = useState([]);
  const [parkingArea, setParkingArea] = useState([]);
  const [form, setForm] = useState({});
  const [modal, setModal] = useState('');
  const [loginForm, setLoginForm] = useState({
    email: 'ln@gmail.com',
    carPlateNumber: 'ww-100-ww',
  });
  const [registerForm, setRegisterForm] = useState({});
  const [user, setUser] = useState();
  const [parkingId, setParkingId] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetchCity();
      setCities(res.data);
      console.log(res);
    };
    handleFetch();
  }, []);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetchParkingArea(form.city);
      setParkingArea(res.data);
      console.log(res);
    };
    if (form.city) {
      handleFetch();
    }
  }, [form.city]);

  const handleParkingChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginChange = (e) => {
    setLoginForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e, hanlerHook) => {
    hanlerHook((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleModal = (val) => {
    setModal(val);
  };

  const handleLogin = async () => {
    login(loginForm)
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => {
        setModal('');
      });
  };

  const handleRegister = async () => {
    register(registerForm).then((res) => {
      console.log(res.data);
    });
  };

  const handleStartParking = async (e) => {
    e.preventDefault();
    if (!user) {
      setModal('login');
      return;
    }
    const parkingForm = {
      userId: Number(user.id),
      parkingAreaId: Number(form.parkingArea),
      cityId: Number(form.city),
    };
    startParking(parkingForm).then((res) => {
      setParkingId({ parkingId: res.data.id });
      // Set cookies
      document.cookie = `parkingId=${res.data.id}`;
    });
  };

  const handleStoptParking = async (e) => {
    e.preventDefault();
    console.log(parkingId);
    stopParking(parkingId).then((res) => {
      setParkingId(null);
      setPrice(res.data.price);
      // Delete cookies
      document.cookie = `parkingId=`;
    });
  };
  console.log(user);

  useEffect(() => {
    const parkingId = document.cookie.replace(/(?:(?:^|.*;\s*)parkingId\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (Number(parkingId)) setParkingId(parkingId);
  }, []);

  console.log(parkingId);

  return (
    <>
      <Header handleModal={handleModal} />
      <section style={{ position: 'relative' }} className="slider_section ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-7 col-md-8 mx-auto">
              <div className="detail-box">
                <h1>
                  Park your car <br />
                </h1>
                <p>After choosing the city please choose the parking are and hit "pay with Wango" button.</p>
              </div>
            </div>
          </div>
          <div className="find_container ">
            <div className="container">
              <div className="row">
                <div className="col">
                  <form>
                    <div className="form-row ">
                      <div className="form-group col-lg-3">
                        {/* <input type="text" className="form-control" id="inputPatientName" placeholder="Keywords" /> */}
                      </div>
                      <div className="form-group col-lg-3">
                        <select
                          onChange={handleParkingChange}
                          value={form.city}
                          name="city"
                          className="form-control wide"
                          id="inputCities"
                        >
                          <option>Choose city</option>
                          {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-lg-3">
                        <select
                          onChange={handleParkingChange}
                          value={form.parkingArea}
                          name="parkingArea"
                          className="form-control wide"
                          id="inputParkingAreas"
                        >
                          <option>Choose parking area</option>
                          {parkingArea.map((area) => (
                            <option key={area.id} value={area.id}>
                              {area.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-lg-3">
                        <div className="btn-box">
                          {!parkingId && (
                            <button onClick={handleStartParking} className="btn ">
                              Start parking
                            </button>
                          )}
                          {parkingId && (
                            <button onClick={handleStoptParking} className="btn">
                              Stop parking
                            </button>
                          )}
                        </div>
                      </div>
                      {price && <p style={{ color: 'white', margin: 'auto' }}>Price: {price}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modal === 'login' && (
          <div className="custom-modal">
            <button onClick={() => setModal('')}>X</button>
            <div className="content">
              <input
                value={loginForm.email}
                onChange={handleLoginChange}
                name="email"
                type="text"
                placeholder="Email"
              />
              <input
                value={loginForm.carPlateNumber}
                onChange={handleLoginChange}
                name="carPlateNumber"
                type="text"
                placeholder="Car Plate Number"
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        )}
        {modal === 'register' && (
          <div className="custom-modal">
            <button onClick={() => setModal('')}>X</button>
            <div className="content">
              <input
                value={registerForm.name}
                onChange={(e) => handleChange(e, setRegisterForm)}
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                value={registerForm.email}
                onChange={(e) => handleChange(e, setRegisterForm)}
                name="email"
                type="text"
                placeholder="Email"
              />
              <input
                value={registerForm.carPlateNumber}
                onChange={(e) => handleChange(e, setRegisterForm)}
                name="carPlateNumber"
                type="text"
                placeholder="Car Plate Number"
              />
              <input
                value={registerForm.address}
                onChange={(e) => handleChange(e, setRegisterForm)}
                name="address"
                type="text"
                placeholder="Address"
              />

              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default HeroBlock;
