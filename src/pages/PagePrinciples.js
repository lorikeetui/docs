import React from 'react'
import styled from 'styled-components'
import { colors, brand, breakpoint } from '@aragon/ui'
import Page from 'comps/Page/Page'
import mouse from './assets/mouse-click.svg'
import relaxation from './assets/relaxation.svg'
import parrot from './assets/parrot.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const PageButton = ({ title }) => (
  <Page title={title}>
    <Container>
      <div>
        <h2 className="short">Our mission is to advance a decentralised future, making it easy to use for everyone, regardless of their experience or location in the world.</h2>
        <p className="short">We want to give developers and designers useful tools to quickly create decentralised React apps with great baseline usability and code quality.</p>
      </div>
      </Container>
    <div className="divider"/>
    <Container>
      <div className="left">
        <h3>People First</h3>
        <p>The best interfaces are designed around people, not around technology. When building your interfaces, it’s very useful to try to imagine how someone else - not yourself - would use your app. Is it easy and understandable? Could it be easier still? Work on it more until it’s as easy as possible.</p>
        <p>User testing your app in 1-1 sessions with people with different backgrounds also very enlightening. You will quickly see what works and what’s difficult to use, and how to improve your app.</p>
      </div>
      <img src={mouse} />
    </Container>
    <Container>
      <img src={relaxation} />
      <div className="right">
        <h3>Assume Lazy</h3>
        <p>In nature things tend to optimise to use the least amount of energy possible. It is usually the same with people - if an app takes significant amount of effort to use, it won’t get used. If something can be achieved with 2 clicks instead of 6, that can make a huge difference to people actually bothering to use it. Try to remove anything that is unneccessary - whether it’s too much text, extra steps, or visual noise.</p>
      </div>
    </Container>
    <Container>
      <div className="left">
        <h3>Buidl something people love</h3>
        <p>The amount of consideration for users, and polish you put into your app will determine how people feel about your app. Anticipate what people want, and give it to them ahead of time. Your transitions should not only look sweet but also help users create a mental map of your navigation. If there’s a moment where a user could feel unsure, pre-empt it. Choose beautiful typefaces, but also use hierarchy, size and colour to make your messaging concise and easy to digest.</p>
        <p>So let’s get to it! We hope you will find Lorikeet useful to help you build things which will leave a positive impact on the world.</p>
      </div>
      <img src={parrot} />
    </Container>
  </Page>
)

const Container = styled.div `
  display: flex;
  flex-direction: column;
  ${large('flex-direction: row;')};
  margin: 30px 0;
  .left {
    width: 100%;
    ${large('width: 70%; padding-right: 60px;')};
  }
  .right {
    width: 100%;
    ${large('width: 70%; padding-left: 60px;')};
  }
`
export default PageButton
