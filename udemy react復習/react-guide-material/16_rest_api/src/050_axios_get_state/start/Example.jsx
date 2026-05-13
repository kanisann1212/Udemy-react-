import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Example = () => {
  const [users,setUsers] = useState([])
  // Reactではjsonでとってきたデータはstateにいれて表示するのが普通
  useEffect(()=>{
    const getUser =async()=>{
      const res = await axios.get('http://127.0.0.1:3003/user')
      setUsers(res.data)
    }
    getUser()
  },[])
  return (
    <>
    {users.map (user =>{
      return (
        <div key= {user.id}>
          <h3>お名前：{user.username}</h3>
          <p>年齢：{user.age}</p>
          <p>趣味：{user.hobbies.join('&')}</p>
        </div>
      )
    })} 
    </>
  )
};

export default Example;
