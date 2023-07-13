import { useState } from 'react'
import './App.css'
import Header from './componentes/header/header.jsx'
import Footer from './componentes/footer/footer.jsx'
import List from './componentes/list/list.jsx'
import Form from './componentes/form/form.jsx'

const todos = [
  { id: 1, content: "Tomar agua", completed: true },
  { id: 2, content: "Finalizar práctica de estados y props", completed: false },
  { id: 3, content: "Tomar agua", completed: false },
  { id: 4, content: "Compartir lo aprendido con algún compañero", completed: false },
  { id: 5, content: "Probar pizza italiana", completed: false },
  { id: 6, content: "Completar el desafío del sprint 3", completed: false },
];

function App() {
    const [list, setList] = useState(todos);
    const [theme, setTheme] = useState("dark");

  return (
    <div className= {`wrapper ${theme === "dark" && 'wrapper-dark-mode' }`}  >
    <Header theme={theme} setTheme={setTheme}/>
    <main className={theme === "dark" ? 'dark-mode-bg' : ''}>
      <Form theme={theme} setList={setList} list={list}/>
      <List theme={theme} list={list} setList={setList}/>
      </main>
    <Footer theme={theme}/>
   
    </div>
  )
}

export default App;

// ### Primary

// - Bright Blue: hsl(220, 98%, 61%)
// - Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

// ### Neutral

// ### Light Theme

// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

// - Very Dark Blue: hsl(235, 21%, 11%)
// - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// - Light Grayish Blue: hsl(234, 39%, 85%)
// - Light Grayish Blue (hover): hsl(236, 33%, 92%)
// - Dark Grayish Blue: hsl(234, 11%, 52%)
// - Very Dark Grayish Blue: hsl(233, 14%, 35%)
// - Very Dark Grayish Blue: hsl(237, 14%, 26%)

