import CoreService from "@/components/CoreService";
import Feedback from "@/components/Feedback";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Working from "@/components/Working";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <Services/>
    <Working/>
    <CoreService/>
    <Feedback/>
    <Footer/>
    </>
  );
}
