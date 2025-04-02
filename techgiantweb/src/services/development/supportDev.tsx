const SupportDev = () => {
  const clients = [
    { id: 1, logo: "/api/placeholder/100/40", alt: "UBS" },
    { id: 2, logo: "/api/placeholder/100/40", alt: "Babbel" },
    { id: 3, logo: "/api/placeholder/100/40", alt: "Solaris" },
    { id: 4, logo: "/api/placeholder/100/40", alt: "Moonfare" },
    { id: 5, logo: "/api/placeholder/100/40", alt: "KW" },
    { id: 6, logo: "/api/placeholder/100/40", alt: "Merck" },
  ];

  return (
    <section className="bg-navBg text-white py-28 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Why seek support with{' '}
              <span className="text-carousel2">web development?</span>
            </h2>
            
            <p className="mt-6 text-gray-300">
              Businesses that we've worked with reported faster time-to-market, premium user experience, 
              and flawless performance. We build web solutions for:
            </p>
          </div>
          
          <div className="flex justify-end">
            <a 
              href="#clients" 
              className="border border-white rounded-md py-2 px-4 flex items-center hover:bg-gray-800 transition-colors"
            >
              See our clients
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center">
              <img 
                src={client.logo} 
                alt={client.alt} 
                className="h-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportDev;