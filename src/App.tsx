import { useEffect } from 'react'
import { useAppDispatch } from './modules/redux/hooks'

import './App.css'
import { AppAction } from './modules/app/actions'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(AppAction.bootstrapApp())
  }, [])

  return <div className='App'>hello</div>
}

export default App
