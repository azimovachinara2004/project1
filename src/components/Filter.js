import React,{useState} from 'react'
import {debounce} from 'lodash';

function Filter({getData}){
   const[query,setQuery]=useState('')
    const handlerChange=debounce((value)=>{
        getData(value)
        setQuery(value)
        },500)
  return (
    <div className='filter'>
          <input type="text" placeholder='search'onChange={(e)=>handlerChange(e.target.value)}/>
    </div>
  )
}

export default Filter