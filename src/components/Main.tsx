import React, { FC, ReactNode, useState, useEffect, useReducer } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ContentState } from 'draft-js';
import { EditorState } from 'draft-js';
import EditorContainer from './EditorContainer';
import Sidebar from './SideBar';
import { styles } from './Main.styles';

interface MainChildren {
  children?: ReactNode;
}

interface MyState {
  currentNoteIndex: number;
  currentNoteContent: ContentState;
  editorState: EditorState;
  notes: ContentState[];
}

const Main: FC<MainChildren> = () => {
  const classes = styles();

  const reducer = (state: MyState, action: any) => {
    const newState: MyState = { ...state };
    switch (action.type) {
      case 'NK_SET_CURRENT_NOTE':
        newState.currentNoteIndex = action.index;
        newState.currentNoteContent = action.content;
        newState.editorState = EditorState.createWithContent(action.content);
        break;
      case 'NK_ADD_NEW_NOTE':
        const newNote = ContentState.createFromText('');
        newState.notes = [...state.notes, newNote];
        newState.currentNoteIndex = state.notes.length;
        newState.currentNoteContent = newNote;
        newState.editorState = EditorState.createEmpty();
        break;
      case 'NK_UPDATE_NOTE_CONTENT':
        newState.currentNoteContent = action.content;
        newState.notes[newState.currentNoteIndex] = action.content;
        newState.editorState = action.editorState;
        break;
      default:
        break;
    }
    return newState;
  };

  const emptyNote = ContentState.createFromText('');

  const initialState = {
    notes: [emptyNote],
    currentNoteContent: emptyNote,
    currentNoteIndex: 0,
    editorState: EditorState.createEmpty()
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={9}>
          <EditorContainer
            editorState={state.editorState}
            dispatch={dispatch}
          ></EditorContainer>
        </Grid>
        <Grid item xs={12} sm={3}>
          <br></br>
          <Button
            onClick={() => dispatch({ type: 'NK_ADD_NEW_NOTE' })}
            variant="contained"
            color="secondary"
          >
            Ajouter une nouvelle note
          </Button>
          <Sidebar
            notes={state.notes}
            dispatch={dispatch}
            currentNoteIndex={state.currentNoteIndex}
          ></Sidebar>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
