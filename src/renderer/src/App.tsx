import { Button } from './components/ui/button'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>
        <Button onClick={ipcHandle}>Ping</Button>
      </div>
    </>
  )
}

export default App
