import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader