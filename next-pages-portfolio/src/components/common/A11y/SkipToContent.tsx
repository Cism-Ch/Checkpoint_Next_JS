import { Button } from '@mantine/core';
import classes from './SkipToContent.module.css';

export default function SkipToContent() {
  return (
    <Button
      component="a"
      href="#main-content"
      className={classes.skipLink}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('main-content')?.focus();
      }}
    >
      Aller au contenu principal
    </Button>
  );
}
