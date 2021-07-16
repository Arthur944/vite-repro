import React from 'react'
import { TempTestFormikk } from '@litbase/alexandria';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
        <h1 style={{fontSize: 128 }}>
            {String(TempTestFormikk === Formik)}
        </h1>
    </div>
  )
}

export default App
