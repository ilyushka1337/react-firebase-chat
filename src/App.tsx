import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar'
import './App.css'
import { useContext } from 'react';
import { FirebaseContext } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/ui/Loader';

function App() {
    const {auth} = useContext(FirebaseContext)
    const [user, loading, error] = useAuthState(auth)
    
    if (loading)
        return (
            <Loader></Loader>
        )

    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;