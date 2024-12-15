"use client";

import Header from "@/components/sections/Header";
import Home from "@/components/sections/Home";
import Experiences from "@/components/sections/Experiences";
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function App() {

  return (
    <div className="w-full overflow-hidden">
      <header>
        <Header/>
      </header>
      <main>
        <Home />
        <Experiences />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
