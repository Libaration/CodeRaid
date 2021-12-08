import { useState } from "react"
import { Link, Routes } from "blitz"
const Home: BlitzPage = () => {
  const [name, setName] = useState("")
  return (
    <div className="flex flex-col items-center text-center pt-5">
      Enter your name to create a room
      <br />
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pl-5 mr-5 pr-5 rounded-md bg-gray-200"
          maxLength={16}
        />
        Create Raid Room
      </button>
      <br />
      <Link href="#">.... already know your raids room number?</Link>
    </div>
  )
}

export default Home
