import React from 'react';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Profile from './sections/Profile';
import Skills from './sections/Skills';

function App() {
    return (
        <div>
            <Profile />
            <Experience />
            <Education />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
