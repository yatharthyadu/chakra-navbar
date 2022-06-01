// import logo from './logo.svg';
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex minWidth="max-content" alignItems="center" gap="2" padding="6px">
        <Box p="2">
          <Heading size="md">Logo</Heading>
        </Box>
        <Box p="2">
          <Heading size="sm" >Inspiration Find Work </Heading>
        </Box>
        <Box p="2">
          <Heading size="sm">Find Work </Heading>
        </Box>
        <Box p="2">
          <Heading size="sm">Learn Design </Heading>
        </Box>
        <Box p="2">
          <Heading size="sm">Hire Designers</Heading>
        </Box>
        <Spacer />

        <ButtonGroup gap="2">
          <Button colorScheme="white" color="black">
            Sign in
          </Button>
          <Button colorScheme="pink">Sign Up</Button>
        </ButtonGroup>
      </Flex>
      <hr />
    </div>
  );
}

export default App;
