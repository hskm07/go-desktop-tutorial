import { Box, BoxProps, CloseButton, Drawer, DrawerContent, Flex, FlexProps, Icon, Link, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ReactNode, ReactText } from 'react';
import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiSettings, FiTrendingUp } from 'react-icons/fi';
import { HashRouter, Link as ReactRouterLink } from 'react-router-dom';
import './App.css';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Explore', icon: FiCompass },
  { name: 'Settings', icon: FiSettings }
]

function SidebarWithHeader({children,}: {children: ReactNode; }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60}} p="4">
          {children}
        </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60}}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'node' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest}: NavItemProps) => {
  return (
    <Link as={ReactRouterLink} to="/" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role='group'
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon mr="4" fontSize="16" _groupHover={{color:"white",}} as={icon}  />
        )}
        {children}
        </Flex>
    </Link>
  )
}


const Home = () => <h1>Welcome to the Home Page!</h1>
const About =  () => <h1>This is the about page!</h1>

function App() {
  return (
    <HashRouter>
      SidebarWithHeader
      {/* <div>
        <nav>
          <ul>
            <li>
              <ReactRouterLink to="/">Home</ReactRouterLink>
            </li>
            <li>
              <ReactRouterLink to="/about">About</ReactRouterLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </div> */}
    </HashRouter>
    );
};

export default App
