import * as React from 'react';

interface IMessageProps{
    name: string,
    text: string,
    img: string,
    isOwn?: boolean
}

const Message = ({ name, text, img, isOwn = false }: IMessageProps) => {
    return (
        <div className={`border-2 border-cyan-700 p-4 w-fit mb-4 last:mb-0 ${isOwn ? '' : 'ml-auto'}`}>
            <div className="flex items-center mb-1">
                <img src={img} alt="" className='w-10 h-10 rounded-full'/>
                <h3 className='ml-3 font-bold text-lg'>{name}</h3>
            </div>
            <p>{text}</p>
        </div>
    );
}
 
export default Message;