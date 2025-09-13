import React from 'react'
import { Link } from "react-router-dom";

const TelaPincipal = () => {
  return (
    <section className=' min-h-full text-center bg-linear-to-r from-red-300 to-red-600 rounded-2xl m-8 p-8'>
      <h1 className='text-4xl font-bold mx-auto mb-20 w-fit'>Ideias que tive para design</h1>
      <Link to="/layout_1" className="rounded-2xl hover:bg-red-600 p-8 my-6 mx-6 bg-linear-to-l from-red-600 to-red-300 text-amber-50 h-fit font-bold">Layout_1
      </Link>
  </section>
  )
}

export default TelaPincipal