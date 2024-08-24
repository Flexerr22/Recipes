import { MouseEvent } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function App() {
  const addCounter = (e: MouseEvent) => {
    console.log(e)
  }
  return (
    <>
      <Button onClick={addCounter}>Добавить рецепт</Button>
      <Button appearence='big' onClick={addCounter} children={undefined}></Button>
      <Input placeholder='Name'/>
    </>
  )
}

export default App
