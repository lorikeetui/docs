import React from 'react'
import styled from 'styled-components'
import { Text, colors } from '@aragon/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from '../ui-components/Text/README.md'

const Container = styled(DemoContainer)`
  p {
    margin: 0;
  }
  p + p {
    margin-top: 20px;
  }
`

const PageText = ({ title }) => (
  <Page title={title}>
    
  </Page>
)

export default PageText
