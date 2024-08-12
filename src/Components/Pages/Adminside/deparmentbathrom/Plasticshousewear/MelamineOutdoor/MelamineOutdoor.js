
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import MelamineOutdoorcard from './MelamineOutdoorcard';

// const MelamineOutdoor = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/melaminfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <MelamineOutdoorcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MelamineOutdoor;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const MelamineOutdoor = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/melaminfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/melmanioutdoorsinglepage" />
        ))}
      </div>
    </div>
  );
}

export default MelamineOutdoor;