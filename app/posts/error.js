'use client'
import { useEffect } from "react"

 // Error boundaries must be Client Components
 
export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error])
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong the post page!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}