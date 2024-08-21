import React, { Fragment } from 'react'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import Usecontext from './Usecontext'
import Useref from './Useref'
import Reducer from './Reducer'

function HooksPage() {
  return (
    <Fragment>
        <Usestate />
        <Useeffect />
        <Usecontext />
        <Reducer />
        <Useref />
    </Fragment>
  )
}

export default HooksPage
