import React, { ReactNode } from 'react';

import Note from '../types/Note';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

interface EditorProps {
  currentNote: Note;
}

const Editor: React.FC<EditorProps> = ({ currentNote: { title, content } }) => (
  <Container
    component="main"
    style={{
      height: '100%',
      minHeight: '600px',
      marginTop: '15px',
      width: '100%'
    }}
  >
    <Paper style={{ minHeight: '100%' }}>
      <h1>{title}</h1>
      <p>{content}</p>
    </Paper>
  </Container>
);

export default Editor;
