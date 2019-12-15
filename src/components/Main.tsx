import React, { FC, ReactNode, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ContentState } from 'draft-js';
import EditorContainer from './EditorContainer';
import Sidebar from './SideBar';
import { styles } from './Main.styles';

interface MainChildren {
  children?: ReactNode;
}

const Main: FC<MainChildren> = () => {
  const classes = styles();

  const initialNotes: ContentState[] = [ContentState.createFromText('')];

  const [notes, setNotes] = useState(initialNotes);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [currentNoteContent, setCurrentNoteContent] = useState(initialNotes[0]);

  const addNewNote = () => {
    setNotes([...notes, ContentState.createFromText('')]);
    setCurrentNoteIndex(notes.length);
  };

  useEffect(() => {
    setCurrentNoteContent(notes[currentNoteIndex]);
  }, [currentNoteIndex]);

  useEffect(() => {
    notes[currentNoteIndex] = currentNoteContent;
    setNotes([...notes]);
  }, [currentNoteContent]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <br></br>
          <Button onClick={addNewNote} variant="contained" color="secondary">
            Add
          </Button>
          <Sidebar
            notes={notes}
            setCurrentNoteIndex={setCurrentNoteIndex}
            currentNoteIndex={currentNoteIndex}
          ></Sidebar>
        </Grid>
        <Grid item xs={12} sm={9}>
          <EditorContainer
            content={currentNoteContent}
            setContent={setCurrentNoteContent}
          ></EditorContainer>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
