import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore'
import { collection, query, orderBy, addDoc, serverTimestamp } from "firebase/firestore"; 
import { FirebaseContext } from '../firebase';
import Button from './ui/Button';
import Loader from './ui/Loader';
import Message from './Message';

const Chat = () => {
    const {auth, firestore} = useContext(FirebaseContext)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const messagesRef = collection(firestore, 'messages')
    const messagesQuery = query(messagesRef , orderBy('createdAt', 'desc') )
    const [messages, loading, error] = useCollectionData( messagesQuery )

    const sendMessage = async () => {
        if (!user)
         return

        const docRef = await addDoc(messagesRef, {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp()
        })
        setValue('')
    }

    if (loading || !user)
        return(
            <Loader></Loader>
        )

    return (
    <div className='flex flex-col items-center justify-center py-8 grow'>
        <div className="flex flex-col w-3/4 mx-auto grow">
            <div className="grow px-4 py-5 h-5/6 border-[1px] border-green-500">
                {messages?.map( message => 
                    <Message key={message.createdAt} name={message.displayName} img={message.photoURL} text={message.text} isOwn={user.uid === message.uid}/>
                )}
            </div>
            <div className="flex flex-col items-end justify-end mt-4 ">
                <textarea value={value} onChange={(event) => setValue(event.target.value)} className='border-[1px] border-slate-700 w-full h-20 p-3 resize-none mb-2'></textarea>
                <Button clickHandler={sendMessage} As='button'>Отправить</Button>
            </div>
        </div>
    </div>
    );
}
 
export default Chat;