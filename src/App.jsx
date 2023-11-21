import React, { useEffect, useState } from "react";
import { api } from "./constants/Api";
import Image from "./components/Image";
import Details from "./components/Details";

function App() {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    gender: "",
    phone: "",
    address: "",
    profile: "",
  });

  const fetchDetails = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setDetails({
        fname: data.results[0].name.first,
        lname: data.results[0].name.last,
        gender: data.results[0].gender,
        phone: data.results[0].phone,
        address: `${data.results[0].location.street.number}, ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country} - ${data.results[0].location.postcode}`,
        profile: data.results[0].picture.large,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDetails(api);
  }, []);

  return (
    <div className="container">
      <div className="profile-card">
        <div className="left-image">
          <Image image={details.profile} />
        </div>
        <div className="right-text">
          <Details details={details} />
        </div>
      </div>
    </div>
  );
}

export default App;
