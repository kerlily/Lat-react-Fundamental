import './App.css'
import Article from './components/Article'

function App() {
  return (
    <>
      <h1>My Blog</h1>
      <Article title="My First Post" content={["First Paragraph", "Second Paragraph"]} />
      <br />
      <Article title="My First Post" content={["First Paragraph", "Second Paragraph"]} />
    </>
  )
}

export default App
