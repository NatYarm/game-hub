import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
        marginLeft={3}
      ></Switch>
      <Text fontSize="14px" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
