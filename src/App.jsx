import React, { useState, useEffect } from 'react';
import './index.css';

// Header Component
const Header = ({ activeSection, setActiveSection }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', !isDarkTheme ? 'dark' : 'light');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img 
            src="/Assets/kalry_logo.png" 
            alt="Kalry Logo" 
            className="h-12 w-12"
          />
          <h2 className="font-lexend text-2xl font-bold">Kalry</h2>
          
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-base">
          <a className={`transition-colors duration-300 ${activeSection === 'features' ? 'active-link' : ''}`} href="#features">Features</a>
          <a className={`transition-colors duration-300 ${activeSection === 'testimonials' ? 'active-link' : ''}`} href="#testimonials">Testimonials</a>
          <a className={`transition-colors duration-300 ${activeSection === 'pricing' ? 'active-link' : ''}`} href="#pricing">Pricing</a>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="h-10 w-10 hidden md:flex items-center justify-center rounded-full glassmorphism" 
            title="Toggle theme"
          >
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <button className="hidden md:flex items-center justify-center rounded-full h-12 px-6 bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] text-white font-bold text-base shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            Download App
          </button>
        </div>
        
        <button className="md:hidden text-[#1C161F]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <div className="absolute -top-80 -left-80 w-[800px] h-[800px] bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full opacity-30 animate-pulse" style={{clipPath: 'ellipse(50% 40% at 50% 50%)'}} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-3/4 position:relative text-center lg:text-left">
              <h1 className="font-lexend text-[100px] md:text-8xl font-bold text-[#1C161F] tracking-tighter leading-tight">
                One App.<br /> Every Step of Your Routine.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#4A4458] max-w-lg mx-auto lg:mx-0">
                Your body, your goals, your journey. Kalry is here to guide you, every step of the way.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center rounded-full h-14 px-8 bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  Download App
                </button>
                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full sm:w-auto flex items-center justify-center rounded-full h-14 px-8 bg-white/50 backdrop-blur-sm border border-white/20 text-[#1C161F] font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative w-[60%] max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#FBCFE8] to-[#FECDD3] rounded-3xl opacity-60 blur-xl" />
                <div className="relative animated-phone-scroll glassmorphism rounded-3xl p-3">
                  <img alt="Kalry App Screenshot" className="rounded-3xl shadow-2xl" src="./mockup/2.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden glassmorphism">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
              <h3 className="font-lexend text-xl">Kalry Demo</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-full hover:bg-black/5">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo" frameBorder="0" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: "restaurant",
      title: "Food Ritual Journal",
      description: "Track your daily meals, calories, and nutritional intake effortlessly.",
      color: "var(--c-lavender)",
      iconColor: "#8b5cf6"
    },
    {
      icon: "fitness_center",
      title: "Workout & Cardio Player",
      description: "Access a library of workouts and cardio routines, with progress tracking.",
      color: "var(--c-mint)",
      iconColor: "#10b981"
    },
    {
      icon: "bedtime",
      title: "Sleep + Weight Tracker",
      description: "Monitor your sleep patterns, weight, and body measurements over time.",
      color: "var(--c-coral)",
      iconColor: "#fb7185"
    },
    {
      icon: "timeline",
      title: "Reflection Timeline",
      description: "Visualize your health journey with a timeline of your progress and reflections.",
      color: "var(--c-blush)",
      iconColor: "#f472b6"
    },
    {
      icon: "auto_awesome",
      title: "AI Insights & Rewards",
      description: "Receive personalized insights and rewards based on your health data.",
      color: "var(--c-lavender)",
      iconColor: "#8b5cf6"
    },
    {
      icon: "sentiment_satisfied",
      title: "Mood & Journal Integration",
      description: "Integrate your mood and journal entries for a holistic view of your well-being.",
      color: "var(--c-mint)",
      iconColor: "#10b981"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-lexend text-4xl md:text-5xl font-bold text-[#1C161F] tracking-tight">
            Your Personal Wellness Hub
          </h2>
          <p className="mt-4 text-lg text-[#4A4458]">
            Kalry isn't just an app; it's a partner in your health journey. Discover features designed to make fitness intuitive and enjoyable.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card rounded-3xl p-8 text-center flex flex-col items-center border-none shadow-lg">
              <div className="glow" style={{backgroundColor: feature.color}} />
              <div className="icon-container mb-4" style={{color: feature.iconColor}}>
                <span className="material-symbols-outlined" style={{fontSize: '3rem'}}>{feature.icon}</span>
              </div>
              <h3 className="font-lexend text-2xl font-bold text-[#1C161F]">{feature.title}</h3>
              <p className="mt-2 text-[#4A4458]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Kalry Section Component
const WhyKalrySection = () => {
  const reasons = [
    {
      icon: "tune",
      title: "100% User-Led",
      description: "No forced routines. Kalry adapts to your preferences and goals, putting you in control of your health journey."
    },
    {
      icon: "pie_chart",
      title: "All-in-One Tracking",
      description: "Track food, fitness, sleep, and mood in one intuitive app. Get a holistic view of your well-being."
    },
    {
      icon: "celebration",
      title: "Fun + Sustainable",
      description: "Feels like a game, not a chore. Stay motivated with challenges, rewards, and a supportive community."
    }
  ];

  return (
    <section id="why" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-lexend text-4xl md:text-5xl font-bold tracking-tighter text-[#1C161F]">Why Kalry?</h2>
          <p className="text-[#4A4458] text-lg mt-4 max-w-2xl mx-auto">
            Kalry is designed to fit seamlessly into your life, making healthy habits enjoyable and rewarding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col gap-4 p-8 rounded-2xl glassmorphism transition-all duration-300 hover:border-white/20 hover:scale-105">
              <div className="w-12 h-12 flex items-center justify-center rounded-full soft-gradient-bg mb-4">
                <span className="material-symbols-outlined text-black text-2xl">{reason.icon}</span>
              </div>
              <h3 className="text-[#1C161F] text-xl font-bold font-lexend">{reason.title}</h3>
              <p className="text-[#4A4458] text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Promo Section Component
const PromoSection = () => {
  return (
    <section id="promo" className="py-10">
      <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden p-4">
        <div className="blob1-hero" />
        <div className="blob2-hero" />
        <div className="promo-grid" />
        
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 rounded-3xl bg-gradient-to-br from-[#E0C3FC]/80 to-[#8EC5FC]/80 p-8 md:p-12 shadow-2xl md:flex-row promo-surface">
          <div className="w-full max-w-xl flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-lexend font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                Elevate Your Fitness
              </span>
              <span className="block text-white/90">with Kalry</span>
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Track your progress, personalize workouts, and reach your goals with an experience that feels delightful every day.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-black/80 px-5 py-3 text-white hover:bg-black transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5" fill="currentColor">
                  <path d="M318.7 268.7c-.5-37.4 16.7-65.7 51-86.6-19.2-27.9-48.2-43.3-86.7-46.3-36.4-2.9-76.1 21.3-90.6 21.3-15 0-50.2-20.6-77.8-20.6-57.3.9-118.4 41.8-118.4 124.8 0 27.3 5 55.6 15.1 84.9 13.4 37.4 61.8 128.8 112 127.1 26.4-.6 45.1-18.8 79.6-18.8 33.8 0 51.5 18.8 77.8 18.8 50.7-.8 95.9-84.7 108.9-122.1-69.3-32.7-80.9-96-80.9-101.5zM255.9 64.7c27.3-32.4 24.8-61.8 24-72.7-24.1 1.4-52 16.4-68.3 35.8-17.7 20.9-28.8 46.9-26.5 74.4 25.8 2 49.5-13 70.8-37.5z" />
                </svg>
                <span className="text-sm font-semibold">App Store</span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-black/80 px-5 py-3 text-white hover:bg-black transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13.7C98.3 7.4 88 11.9 88 20.8V491.2c0 8.9 10.3 13.4 16.6 7.1l220.7-220.7c9.4-9.4 9.4-24.6 0-33.9zM356.7 203l59.8-59.8C451.7 108 440.9 88 422.5 88H205.5L356.7 203zM205.5 424H422.5c18.4 0 29.2-20 17.1-35.2L356.7 329 205.5 424z" />
                </svg>
                <span className="text-sm font-semibold">Google Play</span>
              </a>
            </div>
            
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3 text-white/80 text-sm">
              <span className="material-symbols-outlined animate-glowing-arrow">arrow_forward</span>
              <span>Download now — free to get started</span>
            </div>
          </div>
          
          <div className="relative flex-shrink-0" id="promo-phone">
            <div className="absolute -top-6 -left-6 stat-chip rounded-2xl px-4 py-2 text-white text-sm shadow">
              +1k daily streaks
            </div>
            <div className="absolute -bottom-6 -right-6 stat-chip rounded-2xl px-4 py-2 text-white text-sm shadow">
              4.9★ rating
            </div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABS1AUjB_Q8gsCHeEQIgGjatB68L49DWP9OrKZClt2CM_DUNjqzX3ILPZgpQwyxssvGSj_oCfzsNuVXpvg9Jz_BoouzVasK_Xouo8NaI-AJ2-_H3UcYokSgIFz4Ub__EI7un_UPfvERENmf9ADO2-UJl6sfcZRpnlAKN1XVq7B8FXiL2Vpqz9XbZDMdmuDraT4-zd1z7_wM3qGTaOX4ag43M4ZmWPIXWSyGKQRIHHnUdBH8Fjy3OG9EjK71N-8HW03VRdeVeCBloJX"
              alt="Kalry App on a Phone" 
              className="relative z-10 w-64 md:w-80 drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Journey Section Component

  


// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      content: "Kalry has completely changed my approach to fitness. The personalized routines are challenging yet achievable, and the tracking features keep me motivated.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAjHOIZ0z8iV_k7SQn-mAphAjVv7KE8567Ykwg_CltW93ljfSFmSt8cCWbAob2LggXrMxycvsP1wJJUumWjqVhIFV4o3EGw8J0v-qH4drb2h27wCUkKOfbzmYDe2Wd9EoNSwuvxiWmAFInRoCXVbePEPn_hW81RobKUCERm7OlNDPiluiZklA9GQDvbbPQoh4H62tXMOSaLUclfoz9H7tAsKNKgWiUr3SY6eGsz-BnH5FTNMihnA2sxfChdpcXMwekoW98rbYZ_AdQ"
    },
    {
      name: "David L.",
      content: "I love how Kalry integrates seamlessly into my daily life. The app is intuitive, and the community support is fantastic. I've never felt more in control of my health.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuXdtfc31K5JJdGkC0Ll6UwNrTJgUx78wYvEE_79W6ooBJmhqy0V8c9bUdPemWMB9HOpVDjAmL96tSXMYvevmBjLxvWA83aIYZk4FSUynyWKfBilwnGUkdqdSnMlp6tHK8c1W9oSTZ5wTlGDYBoMWOYTGpVaX2_RjTHVJqzt4STcd6CTQIA-ExBZ7MUSGsmwHLqCkIUg2MXlGR-UO5OGW-uHLxR8at8qV3kZkhf9TRE0cu4101Oc6n3AAjo99xdlt4p6bRHV2s_rla"
    },
    {
      name: "Emily R.",
      content: "As a busy professional, finding time for fitness was a struggle. Kalry's flexible routines and progress tracking have made it possible for me to prioritize my well-being.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDd7HdfYDpcSqif52KNMDMbPMzmkmeCGEcjnyRuGX29rffbfTXGX6Ev3TNETct4VZJy4uR4p4iIFUsOvf2RVwBzALsdBmc4nyIt8m0KAjFxDWS-xp0ZDdf0aJMxyAmbg9GU96WgRuu4jrYh_h11n2HxTQq3eVjR6uUzCkdVHp75yBqykjPxwCvaH2XrvbYiMjBoER_dw72xB0m32sERGaK6k1eAjYw6gZcDBXWd2iXchSWDL_B7xZ947kzzcRcK-nwTyp4nrnCe6It"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-lexend text-4xl md:text-5xl font-bold text-[#1C161F]">
            Loved by our community
          </h2>
          <p className="text-lg text-[#4A4458] max-w-2xl mx-auto">
            Discover how Kalry is transforming lives, one healthy habit at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-[460px]">
              <div className="glass-card w-full h-full flex flex-col justify-between p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                  alt={`Profile picture of ${testimonial.name}`}
                  src={testimonial.imageUrl}
                />
                <blockquote className="flex-grow">
                  <p className="text-[#1C161F] text-lg leading-relaxed">"{testimonial.content}"</p>
                </blockquote>
                <footer className="mt-6">
                  <p className="font-lexend text-[#1C161F] text-lg font-bold">- {testimonial.name}</p>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = [
    {
      id: 'weekly',
      title: 'Weekly Plan',
      originalPrice: '$2.50',
      price: '$1.75',
      period: '/week',
      badge: 'Intro Offer',
      badgeColor: 'from-yellow-300 to-orange-400'
    },
    {
      id: 'yearly',
      title: 'Yearly Plan',
      originalPrice: '$96',
      price: '$35',
      period: '/year',
      badge: 'Launch Offer',
      badgeColor: 'from-green-300 to-cyan-400',
      popular: true
    },
    {
      id: 'monthly',
      title: 'Monthly Plan',
      price: '$8',
      period: '/month'
    }
  ];

  const features = [
    "Access to all workouts",
    "Personalized training plans",
    "Progress tracking",
    "Community support"
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="relative min-h-[60vh] p-10 overflow-hidden">
        <div className="blob1-pricing" />
        <div className="blob2-pricing" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-lexend text-4xl md:text-5xl font-bold tracking-tighter text-[#1C161F] mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your fitness journey with Kalry today. Cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card rounded-3xl p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  plan.popular 
                    ? 'relative transform scale-105 bg-white border-2 border-purple-400 shadow-2xl' 
                    : 'glassmorphism border border-gray-200/50'
                } ${selectedPlan === plan.id ? 'plan-selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col gap-6 text-center">
                  <h3 className={`font-lexend font-bold text-[#1C161F] ${plan.popular ? 'text-2xl' : 'text-xl'}`}>
                    {plan.title}
                  </h3>
                  
                  <div className="relative">
                    {plan.originalPrice && (
                      <p className="text-gray-500 line-through">{plan.originalPrice}</p>
                    )}
                    <p className={`font-bold font-lexend text-[#1C161F] ${plan.popular ? 'text-6xl' : 'text-5xl'}`}>
                      {plan.price}
                      <span className={`font-medium text-gray-600 ${plan.popular ? 'text-xl' : 'text-lg'}`}>
                        {plan.period}
                      </span>
                    </p>
                    {plan.badge && (
                      <span className={`absolute top-0 right-0 bg-gradient-to-r ${plan.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full -translate-y-1/2 translate-x-1/4`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  
                  <button className={`w-full rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'h-14 bg-black text-white hover:bg-gray-800' 
                      : 'h-12 bg-white text-black hover:bg-gray-200'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-600">
            <p className="font-bold mb-2">All plans include:</p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center rounded-3xl p-10 md:p-16 relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-lexend text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-[#1C161F]">
            Ready to take control?
          </h2>
          <p className="text-[#4A4458] text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of others who are transforming their lives with Kalry.
          </p>
          <button className="flex mx-auto min-w-[150px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/30">
            <span className="truncate">Get Started For Free</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = ["About", "Blog", "Terms", "Privacy", "Contact"];

  return (
    <footer id="footer" className="w-full mt-2">
      <div className="relative py-12 px-6 overflow-hidden">
        <div className="blob1-footer" />
        <div className="blob2-footer" />
        
        <div className="glassmorphism-container max-w-5xl mx-auto z-10">
          <div className="relative z-20 flex flex-col items-center gap-8 px-6 py-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-base font-medium text-[#4B5563]">
              {footerLinks.map((link) => (
                <a key={link} className="hover:text-[#1C161F] transition-colors" href="#">
                  {link}
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-[#4B5563] hover:text-[#1C161F] transition-colors" href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                </svg>
              </a>
              <a className="text-[#4B5563] hover:text-[#1C161F] transition-colors" href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </a>
              <a className="text-[#4B5563] hover:text-[#1C161F] transition-colors" href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </a>
            </div>
            
            <p className="text-[#4B5563] text-sm">© 2024 Kalry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Intersection Observer for active navigation
    const sectionIds = ['features', 'why', 'journey', 'testimonials', 'pricing'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Reveal on scroll animation
    const revealElements = document.querySelectorAll('.glassmorphism, .glass-card, .feature-card, [data-reveal]');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    revealElements.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });

    // Parallax effect
    const promoPhone = document.getElementById('promo-phone');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReduced && promoPhone) {
      const handleScroll = () => {
        const y = window.scrollY || window.pageYOffset;
        promoPhone.style.transform = `translateY(${Math.min(30, y * 0.05)}px)`;
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="organic-blob-1" />
      <div className="organic-blob-2" />
      
      <div className="relative z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <WhyKalrySection />
          <PromoSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
