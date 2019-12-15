import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import './Editor.css';

interface EditorContainerProps {
  editorState: EditorState;
  dispatch: Function;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  editorState,
  dispatch
}) => {
  let timeout: any = null;

  const handleChange = (state: any) =>
    dispatch({
      type: 'NK_UPDATE_NOTE_CONTENT',
      content: state.getCurrentContent(),
      editorState: state
    });

  return (
    <Container component="main" maxWidth={false} style={{ marginTop: '15px' }}>
      <Paper>
        <Editor
          editorState={editorState}
          editorClassName="editorClassName"
          onEditorStateChange={handleChange}
          placeholder="Commencez à taper ici..."
        ></Editor>
      </Paper>
    </Container>
  );
};

export default EditorContainer;
