import React, { useEffect, useState } from 'react'

export default function Search() {
    let arr=[
        {
            name:"sajib"
        },
        {
            name:"tarak"
        },
        {
            name:"sami"
        },
        {
            name:"people"
        },
        {
            name:"hasan"
        },
       
    ]

    let [input,setInput]=useState("")
    let [store,setStore]=useState([])

    let handleInput=(e)=>{
        setInput(e.target.value);
    }
    

   useEffect(()=>{
    setStore("")
        arr.map(item=>{
            let text=""
            let color=""
            let discolor=""
           for(let i=0;i<input.length;i++){
            text+=item.name.split("")[i]

           }
          if(text==input){
            for(let i=0;i<input.length;i++){
                color+=item.name.split("")[i]
            }
            let newArr=item.name.split("")
            item.name.split("").splice(0,input.length).map(item2=>{
                newArr.shift()
                discolor=newArr.join("")
            })
            let sajib = [];
             sajib.push(`<span class="bg-yellow-500">${color}</span>${discolor}`);
            setStore(prevStore => [...prevStore, ...sajib]);
            
          }
        })

   },[input])
        
  return (
    <>
    <div className='bg-[#F1F5F8] pt-[100px] pb-[200px] h-screen'>
        <div className='bg-white mx-auto md:max-w-[700px] md:p-[100px]'>

         <h1 className='text-center text-black md:text-5xl font-bold pb-[60px]'>Grocery List</h1>   
        <input className='bg-[#F1F5F8] rounded-[4px] text-xl md:w-[500px] py-[6px] px-[15px] mb-[40px] outline-0' type="text" onChange={handleInput} placeholder='Search...........'/>
        {
        store && store.map((item3,index)=>(
            <div key={index}>
                <li className='list-none mb-[10px] text-lg' dangerouslySetInnerHTML={{__html: item3}}></li>
            </div>
        ))
        }
    
        </div>
    </div>
    </>
  )
}
