import './App.css'
import { puppyList } from './data'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  function handleClick() {
    setFeatPupId(puppy.id)
  }
  const featuredPup = puppies.find((pup)=>pup.id === featPupId)
  console.log(puppies)
  return (
    <div className = 'App'>
    {
      puppies.map((puppy) => {
        return <p onClick={handleClick} key = {puppy.id}> {puppy.name}</p>
      })
    }
    console.log(featuredPup)
    <p>{featPupId}</p>
    </div>
  )
}

export default App
