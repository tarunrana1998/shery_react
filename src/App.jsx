import './App.css'
import Card from './Card'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Meet Our Team</h1>
      <p className="app-subtitle">The creative minds behind the magic</p>
      
      <div className="card-grid">
        <Card 
          name="Tarun" 
          role="Lead Developer" 
          bio="Architecting elegant solutions for complex problems with a passion for clean code and performance."
          image="https://i.pravatar.cc/150?img=11"
        />
        <Card 
          name="Himani" 
          role="UX/UI Designer" 
          bio="Crafting pixel-perfect, intuitive interfaces that users love, with a keen eye for modern aesthetics."
          image="https://i.pravatar.cc/150?img=5"
        />
        <Card 
          name="Aisha" 
          role="Product Manager" 
          bio="Bridging the gap between engineering and user needs to deliver impactful software experiences."
          image="https://i.pravatar.cc/150?img=44"
        />
      </div>
    </div>
  )
}

export default App
