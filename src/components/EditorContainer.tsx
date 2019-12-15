import React, { ReactNode } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Note from '../types/Note';

interface EditorContainerProps {
  currentNote: Note;
  setCurrentNote: Function;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  currentNote,
  setCurrentNote
}) => {
  const editorState = EditorState.createEmpty();

  return (
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
        <h1>{currentNote.title}</h1>
      </Paper>
    </Container>
  );
};

export default EditorContainer;
