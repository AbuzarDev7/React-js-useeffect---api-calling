import React, { useEffect, useState } from 'react'
import './index.css'
function App() {

  const [user,setUsers] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setErorr] = useState(false);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setUsers(res)
    })
    .catch((error) => {
      console.log(error);
      setErorr(error)
    })
    .finally(()=>{
      setLoading(false)

    })
  },[])

  return (
    <>
   
<h1>Api Calling</h1>
<br />
{loading && <h1>...loading</h1>}
{error && <h1>Error</h1>}

     {user && user.map((item , index) => {
        return<div className="card" key={index}>
      <img src={item.thumbnailUrl} className="card-img" alt={item.title} />
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-info"><strong>Album ID:</strong> {item.albumId}</p>
        <p className="card-info"><strong>ID:</strong> {item.id}</p>
        <a href={item.url} target="_blank" className="card-btn">
          View Full Image
        </a>
      </div>
    </div>

      })}



    
    </>
  )
}

export default App

