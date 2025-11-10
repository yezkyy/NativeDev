import { Button, Container, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeButton() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container>
			<Button onClick={toggleColorMode} borderRadius={"full"}>
				{colorMode === "light" ? (
					<FaSun fontSize={20} />
				) : (
					<FaMoon fontSize={20} />
				)}
			</Button>
		</Container>
	);
}

export default ThemeButton;
