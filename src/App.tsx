import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 600,
        padding: 20,
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontWeight: '700', fontSize: '1.4rem' }}>Hello, I'm</div>
        <h1>Gokulaselvan Anandhan</h1>
        <p># Full Stack Developer | React Enthusiast | Django Explorer</p>
      </header>

      <section style={{ marginBottom: 30 }}>
        <h2>About Me</h2>
        <p>
          I am a passionate developer with 6.9 years of experience building
          modern web applications using Django, Fast API, React, Node.js, and
          TypeScript as a full-stack development. I thrive on solving complex
          problems and am constantly striving to enhance my skills and deliver
          high-quality solutions.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
          >
            <FaEnvelope style={{ marginRight: 8 }} />
            <a
              href="mailto:gokula@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gokul.erdesign@gmail.com
            </a>
          </li>
          <li
            style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
          >
            <FaLinkedin style={{ marginRight: 8 }} />
            <a
              href="https://linkedin.com/in/gokulaselvan"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gokulaselvan
            </a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <FaGithub style={{ marginRight: 8 }} />
            <a
              href="https://github.com/gokulaselvan"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/gokulaselvan
            </a>
          </li>
        </ul>
      </section>

      <footer
        style={{
          textAlign: 'center',
          marginTop: 40,
          fontSize: 12,
          color: '#666',
        }}
      >
        &copy; {new Date().getFullYear()} Gokulaselvan. All rights reserved.
      </footer>
    </div>
  )
}

export default App
