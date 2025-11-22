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
    description: "Use your years of care home, palliative care, nursing home, or home visit experience to build your own practice - without starting from scratch.",
    size: "large",
    badges: [
      { text: "No Startup Costs", style: "bg-primary/10 border border-primary/20 text-primary" },
      { text: "Your Skills Matter", style: "bg-secondary/10 border border-secondary/20 text-secondary" },
    ],
  },
  {
    image: medicalTech,
    title: "Modern Technology, No Overhead for Basic Care",
    description: "Get access to AI-assisted diagnostics, Point-of-Care testing devices, and telemedicine connectivity. Start with our basic kit at no overhead cost.",
    size: "medium",
  },
  {
    image: patientRelationship,
    title: "Keep Your Patients for Life",
    description: "Build real relationships that last. Your patients stay YOUR patients. Provide continuous care and earn recurring income from those who trust you most.",
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
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Row 1 animation - grouped ease-in
      if (row1Ref.current) {
        const row1Cards = row1Ref.current.querySelectorAll(".benefit-card");
        gsap.fromTo(
          row1Cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: row1Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Row 2 animation - grouped ease-in
      if (row2Ref.current) {
        const row2Cards = row2Ref.current.querySelectorAll(".benefit-card");
        gsap.fromTo(
          row2Cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: row2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
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
            className={`benefit-card group ${getSizeClasses(benefit.size)} rounded-3xl border-2 border-border/50 
              bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10
              transition-all duration-500 backdrop-blur-sm
              relative overflow-hidden`}
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
            className={`benefit-card group ${getSizeClasses(benefit.size)} rounded-3xl border-2 border-border/50 
              bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10
              transition-all duration-500 backdrop-blur-sm
              relative overflow-hidden`}
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
