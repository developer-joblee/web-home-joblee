import { Star } from "lucide-react";
import appMockup from "/device-app.webp";
import { STORE_LINKS } from "@/constants/links";

const AppDownload = () => {
  return (
    <section id="download" className="py-16 md:py-24 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-hero rounded-3xl lg:rounded-[3rem] overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
            {/* Content */}
            <div className="text-primary-foreground space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Baixe nosso App
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-md mx-auto lg:mx-0">
                Acesse milhares de profissionais. Agende serviços quando e onde quiser com nosso aplicativo fácil de usar.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <img width="155px" height="auto" src="/store-button-apple-soon.svg" alt="Apple Store (em breve)" />
                {STORE_LINKS.googlePlay && (
                  <a href={STORE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer">
                    <img width="178px" height="auto" src="/store-button-google.png" alt="Google Play" />
                  </a>
                )}
              </div>

              {/* Ratings */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                  <span className="opacity-70">App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.8/5</span>
                  <span className="opacity-70">Play Store</span>
                </div>
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={appMockup}
                  alt="Joblee Mobile App"
                  className="w-64 md:w-80 h-auto drop-shadow-2xl animate-float"
                />
                {/* Decorative circle */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
