
import { Box, Flex, Text} from "@chakra-ui/react";
import icon from './img/school-svgrepo-com.svg'
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
          maxW="screen-xl"
          p="4"
        >
          <div>
            <Text as="span" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EZ.Exam
            </Text>
          </div>

          <Flex alignItems="center" className="rtl:space-x-reverse">
        <ul>
            
          <Link href="/" className="text-sm font-bold text-gray-700 mx-5 mb-2">
              Home |
            </Link>
            
            
            <Link href="/login" className="text-sm font-bold text-gray-700 mx-5 mb-2">
              Login |
            </Link>
            
        </ul>
          </Flex>
        </Flex>
      </nav>
      
    </>
  );
};

export default Navbar;