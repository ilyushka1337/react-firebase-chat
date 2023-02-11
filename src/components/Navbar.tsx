import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FirebaseContext } from '../firebase';
import { loginRoute } from '../utils/consts';
import Button from './ui/Button';

const Navbar = () => {
  const {auth} = useContext(FirebaseContext)
  const [user, loading, error] = useAuthState(auth)
  
  return ( 
    <div className='flex justify-end bg-cyan-600 px-10 py-5'>
      {
        user ?
        <Button clickHandler={() => auth.signOut()} As='button'>Выйти</Button>
        :
        <Button href={loginRoute}>Логин</Button>
      }
      
    </div>
  );
}
 
export default Navbar;