import './App.css'

function App() {


  return (
    <div className="container">
      <div className="header">
        Header
      </div>

      <div className="mainContent">
        <div className="sideColumn">
          <div className="hero">Hero</div>
          <div className="sidebar">Sidebar</div>
        </div>

        <div className="contentColumn">
          <div className="mainPanel">
            Main Content
            <p className="mainNote">
              ***If the page is not tall enough, make sure your browser is in "Experimental Mode".
            </p>
          </div>
          <div className="extraContent">Extra Content</div>
        </div>
      </div>

      <div className="relatedContent">
        <div className="relatedImages">Related Images</div>
        <div className="relatedPost">Related Posts</div>
      </div>

      <div className="footer">
        Footer
      </div>
    </div>
  )
}

export default App
