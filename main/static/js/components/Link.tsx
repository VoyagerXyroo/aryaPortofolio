import React from 'react'; // Ensure React is imported if you're using JSX
import { useCursor } from './CursorContext';

interface LinkProps {
  url: string;
  text: string;
  isCTA: boolean;
}

const Link: React.FC<LinkProps> = ({ url, text, isCTA }) => {
  const { enablePointerCursor, disablePointerCursor, enableGo, disableGo, enableEmail, disableEmail } = useCursor();

  return !isCTA ? (
    <a
      href={url}
      onMouseEnter={() => {enablePointerCursor(); enableGo();}}
      onMouseLeave={() => {disablePointerCursor(); disableGo();}}
      target="_blank"
      rel="noreferrer"
      className='inline-block relative'
    >
      <span className='plus absolute'>+</span>
      <span className='border-bottom absolute w-full'></span>
      <span className='link-text inline-block'>{text}</span>
    </a>
  ) : <a href='mailto:aryamaulana1230@gmail.com' 
        className='email inline-block relative overflow-hidden' 
        onMouseEnter={() => {enablePointerCursor(); enableEmail();}} 
        onMouseLeave={()=> {disablePointerCursor(); disableEmail();}}>
          <span className='plus absolute'>+</span>
          <span className='link-text inline-block'>
            AryaMaulana<br></br><span className='second-line relative'>aryamaulana1230@gmail.com</span>
          </span>
      </a>;
}

export default Link;
