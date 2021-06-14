import React from 'react'
import {FieldWrapper, InputField} from '@litbase/alexandria';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
        <Formik initialValues={{test: ""}} onSubmit={() => {}}>
            <FieldWrapper name={'test'} component={InputField} />
        </Formik>
    </div>
  )
}

export default App
