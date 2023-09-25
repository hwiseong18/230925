'use client'
import { useEffect, useState } from "react"

export default function Edit({params}){
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState(null);

  const imageLoadHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onload = () => setImage(reader.result);
  }

  useEffect(()=>{
    fetch('/api/board/load',
    {
      method:'POST',
      body: JSON.stringify({id:params.id})
    })
    .then(res=>res.json())
    .then(result=>{
      setProfile(result);
      setImage(result.img)
    })
  },[])

  return(
    <div>
      <h3>선수 수정</h3>
      <form action="/api/board/edit" method="POST">
        <div><img style={{width:"200px"}} src={image}/></div>
        <div><label>사진: </label><input type="file" onChange={imageLoadHandler}></input></div>
        <div><label>이름: </label><input name="name" type="text" defaultValue={profile?.name}></input></div>
        <div><label>종목: </label><input name="subject" type="text" defaultValue={profile?.subject}></input></div>
        <div><label>경력: </label><input name="career" type="text" defaultValue={profile?.career}></input></div>
        <input type="hidden" name="img" value={image}/>
        <input type="hidden" name="id" value={params.id}/>
        <div><button type="submit">수정</button></div>
      </form>
    </div>
  )
}