import React from 'react';

import NotePreview from './NotePreview';

import { ContentState } from 'draft-js';

interface SideBarProps {
  notes?: ContentState[];
  currentNoteIndex: number;
  dispatch: Function;
}

const SideBar: React.FC<SideBarProps> = ({ notes, dispatch }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', margin: 0, padding: '10px' }}>
        {notes &&
          notes.map((note, index) => (
            <li
              key={index}
              style={{ padding: '5px 0' }}
              onClick={() =>
                dispatch({ type: 'NK_SET_CURRENT_NOTE', content: note, index })
              }
            >
              <NotePreview note={note}></NotePreview>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideBar;
