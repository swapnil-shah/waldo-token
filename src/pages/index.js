import Layout from "../layout/layout";
import Hero from "../sections/hero";
import Partners from "../sections/partners";
import Tokenomics from "../sections/tokenomics";
import Roadmap from "../sections/roadmap";
import HowItWorks from "../sections/howItWorks";
const Index = () => (
  <Layout>
    <main>
      <Hero />
      <HowItWorks />
      <Partners />
      <Tokenomics />
      <Roadmap />
    </main>
  </Layout>
);

export default Index;
