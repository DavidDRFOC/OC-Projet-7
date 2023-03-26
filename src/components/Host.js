import React from "react";

function Host({ host }) {

  const HostSplit = host.name.split(" ");
  const [firstname, lastname] = HostSplit;

  return (
    <div className="host">
      <div className="host__name">
        <p className="host__firstname">{firstname}</p>
        <p className="host__lastname">{lastname}</p>
      </div>
      <img src={host.picture} alt="host_picture" className="host__picture" />
    </div>
  );
}
export default Host;
