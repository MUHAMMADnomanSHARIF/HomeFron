
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cutlerycard from './Cutlerycard';

const Cutlery = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/culteryfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Cutlerycard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Cutlery;
