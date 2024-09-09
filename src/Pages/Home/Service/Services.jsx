import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className="">
      <div className="text-center  py-6 space-y-3 ">
        <h2 className="text-xl text-orange-600 font-bold">Service</h2>
        <h3 className="text-3xl text-orange-600 font-extrabold">Out Service Area</h3>
        <p>the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
       {
        services.map(service => <ServiceCard 
        key={service._id}
        service={service}
        >
           </ServiceCard>)
       }
      </div>
    </div>
  );
};

export default Services;