import React from 'react'

const BlogPage = ({params}) => {
    const {id} = params;
  return (
    <div className='mt-6'>The blog id is {id}</div>
  )
}

export default BlogPage;