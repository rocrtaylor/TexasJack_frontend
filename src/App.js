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

        <video controls autoplay loop width="100%">
          <source src="/video/stars15M.mp4?autoplay=10" type="video/mp4" />
          Your browser does not support the video tag
        </video>

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

      {/* section 1 */}
      <section className="">
        <div className="flex justify-around  ">
          {/* tombstone */}
          <div className="flex justify-center mt-10">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-amber-900">
                <div className="flex justify-center">
                  <h3 className="pb-4 text-2xl font-semibold ">Western</h3>
                </div>
                <div>
                  <h2> Make: Doc </h2>
                  <h3> Model: Gun Slinger 3.5"</h3>
                  <h3> Caliber: .45</h3>
                  <h3> Price: $1299.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
          {/* tombstone */}
          <div className="flex justify-center mt-10 rotate-12">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-amber-900">
                <div className="flex justify-center ">
                  <h3 className=" justify-center pb-4 text-2xl font-semibold ">Western</h3>
                </div>
                <div>
                  <h2> Make: Wyatt</h2>
                  <h3> Model: Cowboy 6"</h3>
                  <h3> Caliber: .45</h3>
                  <h3> Price: $2995.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
        </div>
      </section>
      {/* section1 */}
      {/* section2 */}
      <section className="mt-14">
        <div className="flex justify-around  ">
          {/* tombstone */}
          <div className="flex justify-center mt-10 -rotate-6">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-stone-800">
                <div className="flex justify-center ">
                  <h3 className=" justify-center pb-4 text-2xl font-semibold ">Revolver</h3>
                </div>
                <div>
                  <h2> Make: Clint </h2>
                  <h3> Model: The Law</h3>
                  <h3> Caliber: .44</h3>
                  <h3> Price: $1229.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
          {/* tombstone */}
          <div className="flex justify-center mt-10">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-stone-800">
                <div className="flex justify-center ">
                  <h3 className=" justify-center pb-4 text-2xl font-semibold ">Pistol</h3>
                </div>
                <div>
                  <h2> Make: John Wick</h2>
                  <h3> Model: P220</h3>
                  <h3> Caliber:.45</h3>
                  <h3> Price: $1319.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
          {/* tombstone */}
          <div className="flex justify-center mt-10">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-emerald-900">
                <div className="flex justify-center ">
                  <h3 className=" justify-center pb-4 text-2xl font-semibold ">Pistol</h3>
                </div>
                <div>
                  <h2> Make: R Lee</h2>
                  <h3> Model: Colt GI </h3>
                  <h3> Caliber: 45 ACP</h3>
                  <h3> Price: $1299.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
        </div>
      </section>
      {/* section2 */}
      {/* section3 */}
      <section className="">
        <div className="flex justify-around  ">
          {/* tombstone */}
          <div className="flex justify-center mt-10">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-red-600">
                <div className="flex justify-center">
                  <h3 className="pb-4 text-2xl font-semibold ">Lester Moore</h3>
                </div>
                <div className="text-center">
                  <h2 className="text-black"> Died 3 shots </h2>
                  <h3 className="text-black"> From a 44</h3>
                  <h3 className="text-black"> No Less</h3>
                  <h3 className="text-black"> No Moore</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
          {/* tombstone */}
          <div className="flex justify-center mt-10">
            <div className="flex-col tombstone ">
              <div className="flex-col items-center text-pink-400">
                <div className="flex justify-center ">
                  <h3 className=" justify-center pb-4 text-2xl font-semibold ">Bye - Bye</h3>
                </div>
                <div>
                  <h2> Make: Zazzy Cat</h2>
                  <h3> Model: Sshhh"</h3>
                  <h3> Caliber: .416</h3>
                  <h3> Price: $7000.00</h3>
                </div>
              </div>
            </div>
          </div>
          {/* tombstone */}
        </div>
      </section>
      {/* section3 */}
      <section className="ml-10 mt-16">
        <div className="flex">
          {guns.map((gun) => {
            return (
              <div className="m-10 tombstone flex-col text-center text-black">
                <div key={gun.id}>
                  <h2> Make: {gun.make}</h2>
                  <h3> Model: {gun.model}</h3>
                  <h3> Caliber: {gun.caliber}</h3>
                  <h3> Price: ${gun.price}</h3>
                  <Edit handleUpdate={handleUpdate} gun={gun} />
                  <button onClick={(event) => handleDelete(event, gun)} value={gun.id} className="text-red-900">
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
