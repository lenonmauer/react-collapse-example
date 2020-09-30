import React, { useState } from 'react';

import Collapse from '../../components/Collapse';
import GlobalStyles from '../../styles/global'

import { Card } from './styles'

function App() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(!open)

  return (
    <div>
      <h2>My App</h2>

      <Card>
        <button onClick={handleToggle}>
          Toggle
        </button>

        <Collapse open={open}>
          <Card.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
            <br /><br />
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
            <br /><br />
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
            <br /><br />
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </Card.Body>
        </Collapse>
      </Card>

      <GlobalStyles />
    </div>
  );
}

export default App;
