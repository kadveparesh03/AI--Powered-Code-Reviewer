import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [review])

  const reviewCode = async () => {
    try {
      setLoading(true)
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      console.log("Backend Response:", response.data)

      if (response.data && response.data.data) {
        setReview(response.data.data)
      } else if (typeof response.data === "string") {
        setReview(response.data)
      } else {
        setReview("⚠️ Unexpected response from server.")
      }
    } catch (err) {
      console.error(err)
      setReview("❌ Error: Unable to fetch review. Check backend server.")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      reviewCode()
    }
  }

  return (
    <>
      <main onKeyDown={handleKeyDown}>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflowY: "auto"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">
            {loading ? "Reviewing..." : "Review"}
          </div>
        </div>
        <div className="right">
          {loading ? (
            <p>⏳ Generating review...</p>
          ) : review ? (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          ) : (
            <p>📝 No review yet. Press Review button or Ctrl+Enter.</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
