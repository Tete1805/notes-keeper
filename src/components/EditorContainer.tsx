import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Note from '../types/Note';

import './Editor.css';

interface EditorContainerProps {
  content: ContentState;
  setContent: Function;
}

function getTextFromContent(content: ContentState) {
  return content
    .getBlocksAsArray()
    .map(block => block.getText())
    .join(' ');
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  content,
  setContent
}) => {
  const defaultState = content
    ? EditorState.createWithContent(content)
    : EditorState.createEmpty();

  const [editorState, setEditorState] = useState(defaultState);

  let timeout: any = null;

  useEffect(() => {
    timeout = setTimeout(
      () => setContent(editorState.getCurrentContent()),
      100
    );
    return () => clearTimeout(timeout);
  }, [editorState]);

  useEffect(() => {
    debugger;
    content &&
      getTextFromContent(content) !=
        getTextFromContent(editorState.getCurrentContent()) &&
      setEditorState(EditorState.createWithContent(content));
  }, [content]);

  return (
    <Container component="main" maxWidth={false} style={{ marginTop: '15px' }}>
      <Paper>
        <Editor
          editorState={editorState}
          editorClassName="editorClassName"
          onEditorStateChange={state => setEditorState(state)}
        ></Editor>
      </Paper>
    </Container>
  );
};

export default EditorContainer;
