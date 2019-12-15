import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);

interface NotePreviewProps {
  note: {
    title: string;
    content: string;
  };
}

export default function NotePreview(props: NotePreviewProps) {
  const classes = useStyles();

  const {
    note: { title, content }
  } = props;

  return (
    <Paper className={classes.root} style={{ padding: '20px' }}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="p">{content}</Typography>
    </Paper>
  );
}
