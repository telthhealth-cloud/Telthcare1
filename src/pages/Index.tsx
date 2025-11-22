import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { EarningsCalculator } from "@/components/EarningsCalculator";
// import { CategorySwitcher } from "@/components/CategorySwitcher";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { careManagerContent } from "@/data/careManagerContent";
import { doctorContent } from "@/data/doctorContent";
import {
  Heart,
  TrendingUp,
  Users,
  Stethoscope,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Award,
  BarChart3,
  Shield,
} from "lucide-react";
import heroImage from "@/assets/hero-care-manager.jpg";
import toolkitImage from "@/assets/care-toolkit.jpg";
import telthLogo from "@/assets/telth-logo.svg";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<"ccm-cm" | "doctor">("ccm-cm");
  
  const content = activeCategory === "ccm-cm" ? careManagerContent : doctorContent;

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/20 to-background">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={telthLogo} alt="Telth.Care" className="h-8" />
            <Button onClick={scrollToForm} variant="default" size="sm">
              Become a Care Manager
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>
      
      {/* <CategorySwitcher activeCategory={activeCategory} onCategoryChange={setActiveCategory} /> */}
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-6 lg:px-8 pt-2 pb-20 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block">
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                  {content.hero.badge}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {content.hero.headline}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {content.hero.headlineHighlight}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.hero.subheadline}
              </p>
              <p className="text-lg text-foreground/80">
                {content.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg" onClick={scrollToForm} className="text-lg px-8">
                  {content.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToCalculator} className="text-lg px-8">
                  {content.hero.secondaryCTA}
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt={activeCategory === "ccm-cm" ? "Professional care manager with tablet providing modern healthcare" : "Doctor providing modern healthcare consultations"}
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold">Your Experience Deserves More Recognition and Reward</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: DollarSign,
                  text: "Fixed institutional salaries that don't match your experience or dedication",
                },
                {
                  icon: Clock,
                  text: "No control over your schedule or the patients you care for",
                },
                {
                  icon: Heart,
                  text: "Building relationships with patients and families, but never keeping them long-term",
                },
                {
                  icon: TrendingUp,
                  text: "Years of palliative care, nursing home, or home visit experience with nowhere to grow",
                },
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-destructive/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <p className="text-left font-medium">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-2xl font-semibold text-primary pt-8">
              What if you could keep caring for people you love working with - and actually build something of your own?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Introducing Care Manager Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where Your Care Experience Becomes Your Business as a Telth Care Manager
            </p>
          </div>

          <BenefitsGrid />
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-accent/30 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {activeCategory === "ccm-cm" ? "From Care Home Salary to Care Manager Income" : "Expand Your Practice, Increase Your Earnings"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {activeCategory === "ccm-cm" 
                ? "See what your experience is actually worth as a Telth Care Manager"
                : "See your earning potential as a Telth Doctor"}
            </p>
          </div>
          <EarningsCalculator category={activeCategory} />
          <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border-2 border-secondary/20">
            <p className="text-lg font-semibold text-center mb-4">Plus: Every patient you bring to the platform becomes YOUR patient.</p>
            <p className="text-center text-muted-foreground">
              Build your own practice, build recurring revenue, build your future.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">From Care Worker to Telth Care Manager in 3 Simple Steps</h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up & Verify",
                description:
                  "Quick registration with your existing credentials. We verify your experience at care homes, nursing homes, palliative care facilities, or home visit work. Usually approved within 24 hours.",
              },
              {
                step: "02",
                title: "Get Your Kit",
                description:
                  "Choose your starter package and receive your Care-to-Home kit with Point-of-Care devices. Start with our basic kit at no overhead cost for basic care delivery.",
              },
              {
                step: "03",
                title: "Start Earning",
                description:
                  "Accept visits through the Telth.Care network. Use your years of experience to deliver excellent care. Build your client base. Get paid weekly.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl p-8 space-y-4 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-5xl font-bold opacity-20">{step.step}</div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-primary-foreground/90">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-primary">
              From signup to your first paid visit: Less than 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Complete Toolkit */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Everything You Need to Succeed as a Care Manager</h2>
            <p className="text-xl text-muted-foreground">You bring the experience. We provide everything else.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                  Technology
                </h3>
                <ul className="space-y-3">
                  {[
                    "AI-assisted diagnostics (P3DSC system) - suggests tests based on patient symptoms",
                    "Point-of-Care testing devices for immediate results",
                    "Telemedicine connectivity for remote consultations",
                    "Professional mobile app to manage your schedule and earnings",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Business Support
                </h3>
                <ul className="space-y-3">
                  {[
                    "Access to patient network across your city",
                    "Seamless payment processing - get paid weekly via bank transfer",
                    "Insurance handling - we take care of processing",
                    "Business dashboard to track your income, patients, and growth",
                    "Marketing support - we help patients find you",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Professional Growth
                </h3>
                <ul className="space-y-3">
                  {[
                    "Continuous training on new care techniques and equipment",
                    "Regular clinical updates and best practice guidelines",
                    "Community of fellow Care Managers - share experiences and learn",
                    "Certification programs to expand your service offerings",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent p-6 rounded-xl border-2 border-primary/20">
                <p className="font-semibold text-lg">
                  Everything included. Start with no overhead for basic care. Advanced equipment financing available as
                  you grow. No surprises. Just honest partnership.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={toolkitImage}
                alt="Modern medical care toolkit with devices and technology"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">Your Patients Are Waiting. Your Practice Is Calling.</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join Telth Care Managers across India who've turned years of experience into thriving independent practices
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              You've spent years building skills in care homes, nursing facilities, and patients' homes. Now it's time to
              build something for yourself as a Telth Care Manager.
            </p>
          </div>
          <LeadCaptureForm />
          <div className="text-center mt-8">
            <p className="text-sm font-semibold text-destructive">
              Limited onboarding spots this month in your city
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {content.finalCTA.headline}
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              {activeCategory === "ccm-cm" 
                ? "Every shift at the care home, every night with palliative patients, every home visit you've made - it's built something valuable. Your skills. Your compassion. Your reputation."
                : "Every consultation, every diagnosis, every patient you've helped - it's built your expertise. Your knowledge. Your reputation."}
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              Now it's time to build something that's truly yours.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Telth.Care gives you the platform, the technology, the patients, and the support. You bring the years of
              experience that can't be taught.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Together, we're creating a new model of care - one where the people who do the work get what they deserve.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToForm}
              className="mt-8 text-xl px-12 py-6 h-auto shadow-2xl"
            >
              {content.finalCTA.button}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm opacity-75 pt-4">
              {content.finalCTA.socialProof}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center md:text-left mb-12">
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start">
                  <img src={telthLogo} alt="Telth.Care" className="h-8" />
                </div>
                <p className="text-sm opacity-80">Empowering Care Workers to Build Their Own Future</p>
                <div className="pt-4">
                  <p className="text-sm font-semibold mb-2">Email:</p>
                  <p className="text-sm opacity-80">Info@telth.care</p>
                  <p className="text-sm font-semibold mt-3 mb-2">Web:</p>
                  <p className="text-sm opacity-80">www.mytelth.com</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-lg mb-4">UK Office</h4>
                <p className="text-sm opacity-80">Suite 14, Ditton Park,</p>
                <p className="text-sm opacity-80">Botanica, Riding Ct Rd,</p>
                <p className="text-sm opacity-80">Slough - SL3 9LL, UK</p>
                <p className="text-sm opacity-80 mt-3">Phone: +44 7554 469843</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-lg mb-4">USA Office</h4>
                <p className="text-sm opacity-80">Suite 400, 909 Rose Ave,</p>
                <p className="text-sm opacity-80">Rockville, Maryland</p>
                <p className="text-sm opacity-80">20852, USA</p>
                <p className="text-sm opacity-80 mt-3">Phone: +1 (234) 564-4564</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-lg mb-4">India Office</h4>
                <p className="text-sm opacity-80">The Chambers Vardhaman</p>
                <p className="text-sm opacity-80">Trade Center, 3rd Floor,</p>
                <p className="text-sm opacity-80">Nehru Place,</p>
                <p className="text-sm opacity-80">New Delhi 110019, India</p>
                <p className="text-sm opacity-80 mt-3">Phone: 1800-570-0140</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                variant="outline"
                onClick={scrollToForm}
                className="bg-transparent border-background text-background hover:bg-background hover:text-foreground mb-8"
              >
                Become a Care Manager
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm opacity-60">
            <p>© 2025 Telth.Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
