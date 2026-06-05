import FeaturesPage from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Feather } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FeaturesPage />
      <Footer />
    </div>
  );
}