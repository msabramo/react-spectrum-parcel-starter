import {
  ActionButton,
  Button,
  ButtonGroup,
  Heading,
  Item,
  Menu,
  MenuTrigger,
  Provider,
  defaultTheme,
} from "@adobe/react-spectrum";

import classes from "./App.module.css";

const handlePress = (str) => {
  alert(`You pressed: ${str}`);
};

export function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className={classes.container}>
        <div className={classes.container}>
          <Heading level={1}>Hello React Spectrum!</Heading>

          <Heading level={2}>Buttons</Heading>
          <ButtonGroup>
            <Button variant="cta" onPress={() => handlePress("Button")}>
              Button (cta)
            </Button>
            <Button variant="primary" onPress={() => handlePress("Button")}>
              Button (primary)
            </Button>
            <Button variant="secondary" onPress={() => handlePress("Button")}>
              Button (secondary)
            </Button>
            <Button variant="negative" onPress={() => handlePress("Button")}>
              Button (negative)
            </Button>
          </ButtonGroup>

          <Heading level={2}>Menu</Heading>
          <MenuTrigger>
            <ActionButton>Edit</ActionButton>
            <Menu onAction={(key) => alert(key)}>
              <Item key="cut">Cut</Item>
              <Item key="copy">Copy</Item>
              <Item key="paste">Paste</Item>
              <Item key="replace">Replace</Item>
            </Menu>
          </MenuTrigger>
        </div>
      </div>
    </Provider>
  );
}
