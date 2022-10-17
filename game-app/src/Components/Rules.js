import { useState } from 'react';

import "../CSS/style.css"

export default function Rules() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div className='help' id="help">
      <Panel
        title="Help"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
       Welcome to Help
      </Panel>
      <Panel
        title="Rules"
        isActive={activeIndex === 1 }
        onShow={() => setActiveIndex(1)}
      ><p>
        Only two cards can be opened at any given time.<br /> 
        You need to find all the Matched Pairs to Complete the Game.<br />
        To restart the Game, Press the "Restart" button found below the card board.</p>
      </Panel>
      <Panel
        title="How to Play"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <p>
        Flip cards over two at a time.<br />
        Memorise where each image appeared inorder to flip its matching pair.<br />
        Find all the pairs to Win the game.</p>
      </Panel>
      </div>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3 onClick={onShow}>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) 
      : (
        <h5>
          {null}
        </h5>
      )
    }
    </section>
  );
}
