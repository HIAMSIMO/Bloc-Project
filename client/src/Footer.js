import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} - Bfs | Licence HIAMSIMO</p>
      <p>
        <a href="https://github.com/HIAMSIMO/Bloc-Project/issues" target="_blank" rel="noopener noreferrer">
          REPORT A BUG
        </a>
      </p>
    </footer>
  );
}

export default Footer;