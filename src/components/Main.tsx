import React, { FC, ReactNode, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Editor from './Editor';
import Sidebar from './SideBar';

import { styles } from './Main.styles';

interface MainChildren {
  children?: ReactNode;
}

const notes = [
  { title: 'Ma note', content: 'Le contenu de ma première note' },
  {
    title: 'Ma deuxième note',
    content:
      'Le contenu de ma deuxième note, un peu plus long que le premier pour tester que ça ne déborde pas.'
  }
];

const Main: FC<MainChildren> = () => {
  const classes = styles();
  const [currentNote, setCurrentNote] = useState(notes[0]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Sidebar notes={notes} setCurrentNote={setCurrentNote}></Sidebar>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Editor currentNote={currentNote}></Editor>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
