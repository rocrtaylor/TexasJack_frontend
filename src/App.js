import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";
import ReactPlayer from "react-player";

function App() {
  const [guns, setGuns] = useState([]);

  const getGuns = () => {
    axios.get("https://tjgs-backend.herokuapp.com/").then(
      (response) => setGuns(response.data),
      (error) => console.error(error)
    );
  };

  const handleCreate = (addWeapon) => {
    axios.post("https://tjgs-backend.herokuapp.com/", addWeapon).then((response) => {
      console.log(response);
      setGuns([...guns, response.data]);
    });
  };

  const handleDelete = (event, deletedWeapon) => {
    axios.delete("https://tjgs-backend.herokuapp.com/api/guns/" + deletedWeapon.id).then((response) => {
      setGuns(guns.filter((x) => x.id !== deletedWeapon.id));
    });
  };

  const handleUpdate = (editWeapon, id) => {
    console.log(editWeapon);
    axios.put("https://tjgs-backend.herokuapp.com/api/guns/" + id, editWeapon).then((response) => {
      setGuns(
        guns.map((gun) => {
          return gun.id !== editWeapon.id ? gun : response.data;
        })
      );
    });
  };

  useEffect(() => {
    getGuns();
  }, []);

  return (
    <div className="back">
      <header className="header">
        {/* <ReactPlayer url="https://youtu.be/Bm9YvhBUmc4?t=8" width="100%" height="100%" /> */}

        {/* <video controls autoplay loop width="100%">
          <source src="/video/stars15M.mp4?autoplay=10" type="video/mp4" />
          Your browser does not support the video tag
        </video> */}

        <div className="text-box">
          <div className="heading-primary">
            <span className="heading-primary-main">Texas_Jack's</span>
            <span className="lowbox">
              <span className="heading-primary-sub">Gun</span>
              <span className="heading-primary-space">_</span>
              <span className="heading-primary-sub2">Shack</span>
            </span>
          </div>
        </div>
        <div className="jack"></div>
      </header>
      {/* input tombstone */}
      <div className="flex justify-center mt-10">
        <div className="flex-col tombstone text-slate-900">
          <div className="flex-col items-center">
            <div className="flex justify-center ">
              <h3 className="pb-10 text-2xl font-semibold">Build Request</h3>
            </div>

            <Add handleCreate={handleCreate} />
          </div>
        </div>
      </div>
      {/* input tombstone */}
      <br />
      <div className="text-3xl">Hello Guns</div>
      <div className="flex justify-around  ">
        {/* tombstone */}
        <div className="flex justify-center mt-10">
          <div className="flex-col tombstone ">
            <div className="flex-col items-center text-amber-900">
              <div className="flex justify-center ">
                <h3 className=" justify-center pb-4 text-2xl font-semibold ">Western</h3>
              </div>
              <div>
                <h2> Make: Clint, John</h2>
                <h3> Model: Easy, Cowboy</h3>
                <h3> Caliber: .44, .45</h3>
                <h3> Price: $979.00</h3>
              </div>
            </div>
          </div>
        </div>
        {/* tombstone */}
        {/* tombstone */}
        <div className="flex justify-center mt-10">
          <div className="flex-col tombstone ">
            <div className="flex-col items-center text-amber-900">
              <div className="flex justify-center ">
                <h3 className=" justify-center pb-4 text-2xl font-semibold ">Western</h3>
              </div>
              <div>
                <h2> Make: Clint, John</h2>
                <h3> Model: Easy, Cowboy</h3>
                <h3> Caliber: .44, .45</h3>
                <h3> Price: $979.00</h3>
              </div>
            </div>
          </div>
        </div>
        {/* tombstone */}
      </div>
      {guns.map((gun) => {
        return (
          <div key={gun.id}>
            <h2> Make: {gun.make}</h2>
            <h3> Model: {gun.model}</h3>
            <h3> Caliber: {gun.caliber}</h3>
            <h3> Price: ${gun.price}</h3>
            <Edit handleUpdate={handleUpdate} gun={gun} />
            <button onClick={(event) => handleDelete(event, gun)} value={gun.id}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
