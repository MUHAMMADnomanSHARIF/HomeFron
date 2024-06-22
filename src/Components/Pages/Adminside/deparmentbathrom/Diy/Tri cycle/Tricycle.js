
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Tricyclecard from './Tricyclecard';

const Tricycle = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/tricyclefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Tricyclecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Tricycle;
 