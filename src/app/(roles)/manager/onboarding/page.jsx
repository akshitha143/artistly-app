import LazyOnbordComp from "./LazyOnbordComp";

export const metadata = {
  title: "Artist Onboarding | Manager",
  description: "Onboard new artists by providing their details, categories, languages, and fee range.",
  keywords: "artist onboarding, artist registration, artist profile, event management",
};

const OnboardingServerPage = () => {
  return (
    <LazyOnbordComp />
  );
}   

export default OnboardingServerPage;