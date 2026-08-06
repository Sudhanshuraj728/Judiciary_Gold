import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedByStrip from './components/TrustedByStrip';
import SelectionsAcrossIndia from './components/SelectionsAcrossIndia';
import Statistics from './components/Statistics';
import WhyJudiciaryGold from './components/WhyJudiciaryGold';
import FeaturedCourses from './components/FeaturedCourses';
import SuccessStories from './components/SuccessStories';
import LearningJourney from './components/LearningJourney';
import FacultySection from './components/FacultySection';
import ClassroomGallery from './components/ClassroomGallery';
import DailyLearningHub from './components/DailyLearningHub';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedByStrip />
        <SelectionsAcrossIndia />
        <Statistics />
        <WhyJudiciaryGold />
        <FeaturedCourses />
        <SuccessStories />
        <LearningJourney />
        <FacultySection />
        <ClassroomGallery />
        <DailyLearningHub />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
}