import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { HeroSection } from '@/components/sections/hero/hero-section'
import { SolutionsSection } from '@/components/sections/solutions/solutions-section'
import { MethodSection } from '@/components/sections/method/method-section'
import { ProjectSection } from '@/components/sections/projects/project-section'
import { ProcessSection } from '@/components/sections/process/process-section'
import { AboutSection } from '@/components/sections/about/about-section'
import { FaqSection } from '@/components/sections/faq/faq-section'
import { ContactSection } from '@/components/sections/contact/contact-section'

export default function Page() {
    return <main><Header /><HeroSection /><SolutionsSection /><MethodSection /><ProjectSection /><ProcessSection /><AboutSection /><FaqSection /><ContactSection /><Footer /><FloatingWhatsApp /></main>
}