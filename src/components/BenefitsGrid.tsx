import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skeleton } from "@/components/ui/skeleton";
import experienceCare from "@/assets/experience-care.jpg";
import medicalTech from "@/assets/medical-tech.jpg";
import patientRelationship from "@/assets/patient-relationship.jpg";
import incomeStreams from "@/assets/income-streams.jpg";
import flexibleWork from "@/assets/flexible-work.jpg";
import supportSystem from "@/assets/support-system.jpg";

gsap.registerPlugin(ScrollTrigger);

interface BenefitCard {
  image: string;
  title: string;
  description: string;
  size: "large" | "medium" | "small";
  badges?: { text: string; style: string }[];
}

const benefits: BenefitCard[] = [
  {
    image: experienceCare,
    title: "Leverage Your Existing Experience",
    description: `Use your years of care home, palliative care, nursing home, or home-visit experience to build your own practice without starting from scratch.
Turn your free time into meaningful service that genuinely helps people in need.
Make a positive impact on society by supporting families who depend on reliable, compassionate care.
Give back to your community while earning for the skills you’ve spent years perfecting.
Become a trusted pillar of support for seniors, patients with chronic conditions, and those seeking comfort.
                                                                                              
Experience the satisfaction of seeing lives improve because of your presence and expertise.
Grow professionally while contributing to a healthier, safer, and more supported society.
Empower yourself, uplift others, and join a movement that brings care closer to every home `,
    size: "large",
    badges: [
      { text: "No Startup Costs", style: "bg-primary/10 border border-primary/20 text-primary" },
      { text: "Your Skills Matter", style: "bg-secondary/10 border border-secondary/20 text-secondary" },
    ],
  },
  {
    image: medicalTech,
    title: "Modern Technology, No Overhead for Basic Care",
    description: `Get access to AI-assisted diagnostics, Point-of-Care testing devices, and telemedicine connectivity. 
Use AI-assisted diagnostics, Point-of-Care testing devices, and instant telemedicine connectivity to deliver accurate care.
Our basic kit comes with essential tools that help you diagnose, monitor, and treat patients efficiently.
`,
    size: "medium",
  },
  {
    image: patientRelationship,
    title: "Keep Your Patients for Life",
    description: "Build real relationships that last. Your patients stay YOUR patients. Provide continuous care and earn recurring income from those who trust you most. Provide personalized care at your own pace — flexible, fulfilling, and deeply rewarding Start with our basic kit at no overhead cost Access modern medical technology without any upfront burden.",
    size: "medium",
  },
  {
    image: incomeStreams,
    title: "Multiple Income Streams",
    description: "Earn from home visits (₹300-500 per visit), care plan subscriptions (₹1,000-2,000/month per client), and patient referral incentives.",
    size: "small",
  },
  {
    image: flexibleWork,
    title: "Work On Your Terms",
    description: "Choose your hours, choose your clients, choose your service areas. Do this full-time or alongside your current position. You decide.",
    size: "small",
  },
  {
    image: supportSystem,
    title: "Complete Support System",
    description: "We handle insurance processing, provide business tools, and give you access to a network of patients across your city.",
    size: "small",
  },
];

const BenefitCardSkeleton = ({ size }: { size: "large" | "medium" | "small" }) => {
  const heights = {
    large: "h-[400px]",
    medium: "h-[320px]",
    small: "h-[240px]",
  };

  return (
    <div className={`${heights[size]} rounded-3xl border-2 border-border/50 p-8 bg-card/50 backdrop-blur-sm`}>
      <Skeleton className="w-14 h-14 rounded-xl mb-6" />
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
};

export const BenefitsGrid = () => {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 20);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (loading || !sectionRef.current) return;

  const ctx = gsap.context(() => {
    const animateRow = (row: HTMLDivElement | null) => {
      if (!row) return;
      const cards = row.querySelectorAll(".benefit-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    animateRow(row1Ref.current);
    animateRow(row2Ref.current);
  }, sectionRef);

  return () => ctx.revert();
}, [loading]);


  const getSizeClasses = (size: "large" | "medium" | "small") => {
    switch (size) {
      case "large":
        return "lg:col-span-2 lg:row-span-2 h-[400px]";
      case "medium":
        return "lg:col-span-1 lg:row-span-2 h-[320px] lg:h-[400px]";
      case "small":
        return "lg:col-span-1 lg:row-span-1 h-[240px] lg:h-[190px]";
    }
  };

  if (loading) {
    return (
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
        {/* Row 1 Skeletons */}
        <div ref={row1Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <BenefitCardSkeleton size="large" />
          </div>
          <div className="lg:col-span-1">
            <BenefitCardSkeleton size="medium" />
          </div>
        </div>

        {/* Row 2 Skeletons */}
        <div ref={row2Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BenefitCardSkeleton size="medium" />
          <BenefitCardSkeleton size="small" />
          <BenefitCardSkeleton size="small" />
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
      {/* Row 1: Large card + Medium card */}
      <div ref={row1Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {benefits.slice(0, 2).map((benefit, index) => (
          <div
            key={index}
         className={`benefit-card group ${getSizeClasses(benefit.size)}
relative overflow-hidden rounded-3xl 
border border-white/10 bg-card/80 backdrop-blur-xl
shadow-xl shadow-black/20
hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1
transition-all duration-300`}

          >
            {/* Image Overlay */}
            <div className="absolute inset-0">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/90 to-card/80" />
            </div>

            <div className="relative z-10 h-full flex flex-col p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-auto">
                {benefit.description}
              </p>
              {benefit.badges && (
                <div className="mt-6 flex gap-3 flex-wrap">
                  {benefit.badges.map((badge, bidx) => (
                    <div key={bidx} className={`px-4 py-2 rounded-lg ${badge.style} font-semibold text-sm`}>
                      {badge.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Medium card + Two Small cards */}
      <div ref={row2Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {benefits.slice(2).map((benefit, index) => (
          <div
            key={index}
          className={`benefit-card group ${getSizeClasses(benefit.size)}
relative overflow-hidden rounded-3xl 
border border-white/10 bg-card/80 backdrop-blur-xl
shadow-xl shadow-black/20
hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1
transition-all duration-300`}

          >
            {/* Image Overlay */}
            <div className="absolute inset-0">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/90 to-card/80" />
            </div>

            <div className="relative z-10 h-full flex flex-col p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
