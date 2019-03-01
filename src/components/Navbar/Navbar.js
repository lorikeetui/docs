import React from "react";
import styled from "styled-components";
import { Text, breakpoint, BreakPoint, SafeLink } from "@aragon/ui";
import MenuItem from "./MenuItem";
import MenuPanel from "./MenuPanel";
import Logo from "./assets/lorikeet-logo.svg";
const medium = css => breakpoint("medium", css);

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith("/") ? (
    <SafeLink href={url}>
      <Text size="xlarge">{children}</Text>
    </SafeLink>
  ) : (
    <SafeLink href={url}>
      <Text size="xlarge">{children}</Text>
    </SafeLink>
  );

class Navbar extends React.Component {
  render() {
    const { onOpen, title } = this.props;
    const menuItems = [
      ["https://lorikeet.design", "Overview"],
      ["/docs", "Docs", true],
      ["https://lorikeet.design/downloads/", "Downloads"]
    ];

    return (
      <LorikeetNav id="navbar">
        <BreakPoint from="medium">
          <SafeLink href="https://lorikeet.design/">
            <LogoImg src={Logo} />
          </SafeLink>
        </BreakPoint>
        <End>
          <BreakPoint from="medium">
            <ul>
              {menuItems.map((item, i) => (
                <MenuItem
                  key={i}
                  url={item[0]}
                  label={item[1]}
                  active={item[2]}
                  renderLink={renderMenuItemLink}
                />
              ))}
            </ul>
          </BreakPoint>
          <BreakPoint to="medium">
            <MenuPanel
              items={menuItems}
              renderLink={renderMenuItemLink}
              onOpen={onOpen}
            />
            <h1>{title && title.name}</h1>
          </BreakPoint>
        </End>
      </LorikeetNav>
    );
  }
}

const LorikeetNav = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 5;
  background: rgb(248, 251, 253, 1);
  ${medium("background: rgb(248, 251, 253, 0.9);")};
  backdrop-filter: blur(3px);
  .brand {
    display: flex;
  }
  .brand img {
    height: 25px;
  }
  a {
    outline: none;
  }
  h1 {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 24px;
    color: #000;
  }
`;

const End = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
  }
  button {
    margin: 0 15px 0 0;
  }
`;

const LogoImg = styled.img`
  max-width: 123px;
`;
export default Navbar;
