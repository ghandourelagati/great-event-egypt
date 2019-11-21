import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import NavBar from './features/nav/NavBar/NavBar';
import EventDashboard from './features/event/EventDashboard/EventDashboard';

function App() {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
