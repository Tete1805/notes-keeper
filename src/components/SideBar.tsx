import React, { ReactNode } from 'react';

import NotePreview from './NotePreview';

import Note from '../types/Note';

interface SideBarProps {
  notes: Note[];
  setCurrentNote: Function;
}

const SideBar: React.FC<SideBarProps> = ({ notes, setCurrentNote }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', margin: 0, padding: '10px' }}>
        {notes.map(note => (
          <li
            key={note.title}
            style={{ padding: '5px 0' }}
            onClick={() => setCurrentNote(note)}
          >
            <NotePreview note={note}></NotePreview>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
