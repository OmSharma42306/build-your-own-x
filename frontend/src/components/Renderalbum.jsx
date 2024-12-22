import { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/photos"
let prev = 0;
function App() {
  const [album,setAlbum] = useState([]);
  const [selectedAlbumId,setSelectedAlbumId] = useState(null);

  useEffect(()=>{
    fetch(url).then(async function(res){
      const json = await res.json();
      setAlbum(json)
    })
  },[])


  return (
    
    <div>
     {album.map(element=><RenderCards 
     album={album} 
     key={element.id} 
     id={element.id} 
     title={element.url} 
     thumbnailurl={element.thumbnailUrl}
     onClick={() => setSelectedAlbumId(element.albumId)}
     >

     </RenderCards>)}

     {selectedAlbumId && <RenderSorted id={selectedAlbumId} album={album}></RenderSorted>}
    </div>

)
}

function RenderSorted({id,album}){
let tempData = album.filter(element => element.albumId === id);
console.log(tempData)
return <div>
  <h2>Sorted Albums For ID : {id}</h2>
  {
tempData.map(element=>(<RenderUrls key={element.id} id={element.id} url={element.url} thumbnailurl={element.thumbnailUrl}></RenderUrls>
))

  }
  
</div>
}

function RenderUrls({id,url,thumbnailurl}){
return <div>
  <h1>{id} </h1>
  <h1>{url}</h1>
  <img src={thumbnailurl} alt="Thumbnail" />
  
</div>
}

function RenderCards({id,onClick}){
  
return <div>
  {console.log("I am in Onclick")}
  <button onClick={onClick} style={{border:"2px solid black", padding:20, width:30}}>{id}</button>
</div>
}


function RenderAlbums({id,title,url,thumbnailurl}){
  return <div>
  <h5>Album {id} {title} {url} {thumbnailurl} </h5><br />
  </div>
  
}

export default App

