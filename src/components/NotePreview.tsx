import React from 'react';
import { ContentState } from 'draft-js';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Note from '../types/Note';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);

interface NotePreviewProps {
  note: ContentState;
}

export default function NotePreview(props: NotePreviewProps) {
  const classes = useStyles();

  const content = props.note
    .getBlocksAsArray()
    .map(block => block.getText())
    .join(' ');

  return (
    <Paper className={classes.root} style={{ padding: '20px' }}>
      <Typography component="p">
        {content.slice(0, 220)}
        {content.length > 220 ? '...' : ''}
      </Typography>
    </Paper>
  );
}
