"use client"
import { useEffect, useState } from "react"

const dummyData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]

export default function Main() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    if(dummyData){
      const newData = dummyData.every(item => item.id > 0)
      console.log("Data is valid:", newData)
      if(newData){
        setData(dummyData);
      }
    }
  },[dummyData])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Welcome to the Main Component!</h1>
      <p className="mt-4 text-lg">This is a simple example of a main component.</p>
      {
        data && 
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Data:</h2>
          <ul className="list-disc list-inside">
            {data.map(item => (
              <li key={item.id} className="mt-1">{item.name}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}