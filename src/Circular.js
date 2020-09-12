import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  circle: {
    color: "#03DAC5",
    marginTop: "60px",
  }
}));

export default function Circular() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.circle}/>
    </div>
  );
}