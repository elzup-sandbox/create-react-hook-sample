import React from 'react'

import { useMyHook } from 'create-react-hook-sample'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
