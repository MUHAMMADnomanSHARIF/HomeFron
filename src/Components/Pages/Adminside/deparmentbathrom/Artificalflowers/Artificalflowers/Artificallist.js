// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Artificallist = () => {
//     const [user, setUsers] = useState([]);
    

//     const setUsersData = async() =>{
//         let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/artificaluser")
//         result = await result.json()       
//         setUsers(result)        
//         console.log(result)
//     }
  
  
//       useEffect(()=>{
//         setUsersData()
//     },[])
//       const deleteuser = async(id)=>{
//           // console.log(id)
//           try {
//               let result= await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/artificaluserid/${id}`,{
//             method:"delete"
         
//           })
//           result= await result.json()
//           if(result){
//             setUsersData()
//           }
          
         
      
//           } catch (error) {
//               alert("Error in deleting data")
//           }
          
          
//         }
//   return (
//     <div>
        
//     <div className='container w-75'>
//            <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of Artifical Trees </h4>
//            <Link to="/artificalform" ><button className='btn btn-success mb-2 w-10'>+ Add New Product </button></Link>  
//            <table class="table table-striped table-hover">
//                  <thead>
//                      <tr className='btn-dark text-light text-center'>
//                          <th scope="col">#</th>
//                          <th scope="col">Name</th>
//                          <th scope="col">Title</th>
//                          <th scope="col">Price</th>
//                          <th scope="col">Image</th>
//                          <th scope="col">Operations</th>
//                      </tr>
//                  </thead>
//                  <tbody>
//                      {
//                          user.map((ele,ind)=>{
//                              return(
//                                  <>
//                                      <tr>
//                                          <th scope="row">{ind+1}</th>
//                                          <td>{ele.name}</td>
//                                          <td dangerouslySetInnerHTML={{ __html: ele.title }}></td>
//                                          <td>{ele.price}</td>
//                                          <td> {ele.image && (
//                               <img 
//                             src={`https://homeessential-fdca5e469865.herokuapp.com/${ele.image}`} 
//                                      alt={ele.name} 
//                                          className='img-fluid' 
//                                     style={{ height: '70px', width: '100px' }}
//                                           />
//                                )}</td>
//                                          <td>
//                                              <Link to={`/listartifical/${ele._id}`} className='btn btn-success'>Edit</Link>
//                                              <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger ms-2'>Delete</a>
//                                          </td>
//                                      </tr>
//                                  </>
//                              )
//                          })
//                      }
     
//                  </tbody>
//          </table>
     
     
//          </div>


// </div>
//   )
// }

// export default Artificallist; 


import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../../../Staticlist'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Artificallist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/artificaluser');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/artificaluserid/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit logic here, if needed
  };

  return (
    <StaticListComponent
      data={data}
      onDelete={handleDelete}
      onEdit={handleEdit}
      editUrlBase='/listartifical'  // Set the base URL for editing
      addProductUrl='/artificalform'  // Set the URL for adding a new product
    />
  );
};

export default Artificallist;
 