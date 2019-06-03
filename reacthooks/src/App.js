import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  const albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
  const usersUrl = 'https://jsonplaceholder.typicode.com/users/';

  const [photos, setPhotos] = useState([]);

  const [albums, setAlbums] = useState([]);

  const [users, setUsers] = useState([]);

 const [userSelected, setSelectedUser] = useState(2);

 const [albumSelected, setSelectedAlbum] = useState(1);
 //componentDidMount, componentDidUpdate
 // return -> componentWillUnmount

  useEffect(  () => {
     
    const getPhotos = async () => {
      const url = albumSelected ? photosUrl +'?albumId=' + albumSelected: photosUrl;
      const photos = await fetch(url).then(res => res.json());
      setPhotos(photos);
    }
    if( albumSelected){
      getPhotos();
    }
  
;
/*
    return () => {
      
    };
    */
  },[albumSelected ]) ;
 
  useEffect(  () => {
     
    const getAlbums = async () => {
      const url = userSelected ? albumsUrl +'?userId=' + userSelected: albumsUrl;

      const albums = await fetch(url).then(res => res.json());
      setAlbums(albums);
    }

    getAlbums();
;

  },[userSelected]) ;
 
  useEffect(  () => {
     
    const getUsers = async () => {
      const users = await fetch(usersUrl).then(res => res.json());
      setUsers(users);
    }
    getUsers();
;

  },[]) ;
  const manageChangeUser = ({target}) =>{
      setSelectedUser(+target.value);
  }
  const manageChangeAlbum = ({target}) =>{
    setSelectedAlbum(+target.value);
}
 const Opt =  ({id, name, userId, title}) =>{
   const selectedOpt =  id === (userId ? albumSelected : userSelected )? 'selected' : null;
   const optName = userId ? title : name;
    return (
      <option selected={selectedOpt} value={id} key={id}>
                  {optName}
      </option>
    );

 }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1> 
      <form className="gallery">
      <div className="form-group">
        <label htmlFor="users"> USERS
             <select name ="users" id="users" onChange ={manageChangeUser}>
             <option value="">SELECT</option>
               {
                users.map(a => <Opt {...a} />)
               }
             </select>

          </label>
          </div>
          <div className="form-group">
          <label htmlFor="albums"> ALBUMS
             <select name ="albums" id="albums" onChange={manageChangeAlbum}>
             <option value="">SELECT</option>
               {
                 albums.map(a =>  <Opt {...a} />)
                 
               }
             </select>

          </label>
          
        </div>
      </form>
        <ul className="photos">
        {

         photos.map( photo => 
         <li key={photo.id}>
         <img src={photo.thumbnailUrl} title = {photo.title} alt={photo.title}/>

         </li>)
       }
        </ul>
       
      </header>
    </div>
  );
}

export default App;
