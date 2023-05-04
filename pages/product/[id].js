import React from 'react'
import { useRouter } from 'next/router'

export default function ProductItem() {
    const router = useRouter()
  return (
    <div>
        
      <div>Esta es la pagina de mi producto : {router.query.id}</div>
    </div>
  )
}
