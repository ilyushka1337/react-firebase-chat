import React, { useContext } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { chatRoute, loginRoute } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FirebaseContext } from '../firebase'

const AppRouter = () => {
  const {auth} = useContext(FirebaseContext)
  const [user, loading, error] = useAuthState(auth)
  
  return user ? 
  (
    <Routes>
      {privateRoutes.map( ({path, Component}, index) =>
        <Route key={path} path={path} element={<Component/>} />
      )}
      <Route path='*' element={<Navigate to={chatRoute} replace/>} />
    </Routes>
  )
  :
  (
    <Routes>
      {publicRoutes.map( ({path, Component}, index) =>
        <Route key={path} path={path} element={<Component/>} />
      )}
      <Route path='*' element={<Navigate to={loginRoute} replace/>} />
    </Routes>
  )
}

export default AppRouter