import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (serchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX={3} marginY={3}>
      <Image src={logo} boxSize="60px" marginRight={3} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
