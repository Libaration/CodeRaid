import { useState } from "react"
import { Link, useMutation } from "blitz"
import createUser from "app/users/mutations/createUser"
const Home: BlitzPage = () => {
  const [name, setName] = useState("")
  const [createUserMutation] = useMutation(createUser)
  return (
    <div className="flex flex-col items-center text-center pt-5">
      Enter your name {name} to create a room
      <br />
      <form
        className="text-black"
        onSubmit={async (e) => {
          e.preventDefault()
          if (window.sessionStorage.getItem("id")) return
          const user = await createUserMutation({ name: `${name}`, roomNumber: 1 })
          window.sessionStorage.setItem("id", user!.id.toString())
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pl-5 mr-5 pr-5 rounded-md bg-gray-200"
          maxLength={16}
        />
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Create Raid Room
        </button>
      </form>
      <br />
      <Link href="#">.... already know your raids room number?</Link>
    </div>
  )
}

export default Home
