import React from 'react'
import Thumbnail from './Thumbnail';

const Movie = ({results}) => {

  return (
    <div className=' px-5 my-6 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center '>

      {
        results.map((result)=>{
         return <Thumbnail key={result.id}
          movie={result}
          />
        })
      }
    </div>
  )
}

export default Movie