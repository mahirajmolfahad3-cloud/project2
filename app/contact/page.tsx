import { Contact } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
}