import { Container } from "@chakra-ui/react";
import HeroSection from "../components/Home/HeroSection";
import TrashTypeSection from "../components/Home/TrashTypeSection";
import AboutSection from "../components/Home/AboutSection";
import JoinUsSection from "../components/Home/JoinUsSection";

function HomePage() {
	return (
		<Container maxW="container.xl" px={{ base: 4, md: 8 }}>
			<HeroSection />
			<TrashTypeSection />
			<AboutSection />
			<JoinUsSection />
		</Container>
	);
}

export default HomePage;
