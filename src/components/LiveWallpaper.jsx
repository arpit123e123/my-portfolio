import { useEffect, useRef } from "react";
import wallpaper from "../assets/mac-wallpaper.png";

function LiveWallpaper() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!sceneRef.current) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;

      sceneRef.current.style.setProperty("--mouse-x", `${x}px`);
      sceneRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
      style={{
        "--mouse-x": "0px",
        "--mouse-y": "0px",
      }}
    >
      {/* =====================================================
          MAIN LANDSCAPE
      ====================================================== */}

      <img
        src={wallpaper}
        alt=""
        className="absolute -inset-[4%] h-[108%] w-[108%] object-cover"
        style={{
          transform:
            "translate3d(var(--mouse-x), var(--mouse-y), 0) scale(1.04)",
          transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "landscapeDrift 18s ease-in-out infinite alternate",
        }}
      />

      {/* =====================================================
          ATMOSPHERIC LIGHT
      ====================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 78% 40%, rgba(255,190,90,0.08), transparent 25%), radial-gradient(circle at 30% 45%, rgba(80,130,255,0.08), transparent 30%)",
          animation: "atmosphere 10s ease-in-out infinite alternate",
        }}
      />

      {/* =====================================================
          MOVING CLOUDS
      ====================================================== */}

      <div
        className="absolute -left-[320px] top-[20%] h-16 w-[330px] rounded-full bg-white/15 blur-2xl"
        style={{
          animation: "cloudOne 55s linear infinite",
        }}
      />

      <div
        className="absolute -left-[450px] top-[33%] h-14 w-[280px] rounded-full bg-white/10 blur-2xl"
        style={{
          animation: "cloudTwo 75s linear infinite 7s",
        }}
      />

      <div
        className="absolute -left-[500px] top-[15%] h-20 w-[380px] rounded-full bg-white/10 blur-3xl"
        style={{
          animation: "cloudThree 95s linear infinite 12s",
        }}
      />

      {/* =====================================================
          REALISTIC BIRD SILHOUETTES
      ====================================================== */}

      <div
        className="absolute -left-20 top-[29%] h-6 w-12"
        style={{
          animation: "birdOne 25s linear infinite",
        }}
      >
        <span className="absolute left-0 top-2 h-[2px] w-6 rotate-[22deg] rounded-full bg-black/80" />
        <span className="absolute right-0 top-2 h-[2px] w-6 -rotate-[22deg] rounded-full bg-black/80" />
      </div>

      <div
        className="absolute -left-20 top-[38%] h-5 w-10"
        style={{
          animation: "birdTwo 34s linear infinite 5s",
        }}
      >
        <span className="absolute left-0 top-2 h-[2px] w-5 rotate-[20deg] rounded-full bg-black/65" />
        <span className="absolute right-0 top-2 h-[2px] w-5 -rotate-[20deg] rounded-full bg-black/65" />
      </div>

      <div
        className="absolute -left-20 top-[25%] h-4 w-8"
        style={{
          animation: "birdThree 42s linear infinite 11s",
        }}
      >
        <span className="absolute left-0 top-2 h-[2px] w-4 rotate-[18deg] rounded-full bg-black/60" />
        <span className="absolute right-0 top-2 h-[2px] w-4 -rotate-[18deg] rounded-full bg-black/60" />
      </div>

      {/* =====================================================
          LAKE WATER ANIMATION
      ====================================================== */}

      <div
        className="absolute left-[37%] top-[61%] h-[22%] w-[48%] opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 2px, transparent 8px)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          animation: "waterMove 4s ease-in-out infinite alternate",
        }}
      />

      {/* Additional water reflection */}
      <div
        className="absolute right-[18%] top-[62%] h-32 w-48 rounded-full bg-orange-300/10 blur-2xl"
        style={{
          animation: "reflectionMove 5s ease-in-out infinite alternate",
        }}
      />

      {/* =====================================================
          MOVING MIST
      ====================================================== */}

      <div
        className="absolute left-[15%] top-[51%] h-20 w-[430px] rounded-full bg-white/10 blur-3xl"
        style={{
          animation: "mistOne 13s ease-in-out infinite alternate",
        }}
      />

      <div
        className="absolute right-[15%] top-[48%] h-16 w-[360px] rounded-full bg-white/10 blur-3xl"
        style={{
          animation: "mistTwo 16s ease-in-out infinite alternate",
        }}
      />

      {/* =====================================================
          SUN GLOW
      ====================================================== */}

      <div
        className="absolute right-[16%] top-[32%] h-40 w-40 rounded-full bg-orange-300/15 blur-[55px]"
        style={{
          animation: "sunPulse 6s ease-in-out infinite alternate",
        }}
      />

      {/* =====================================================
          FOREGROUND PARALLAX
      ====================================================== */}

      <div
        className="absolute inset-[-3%]"
        style={{
          transform:
            "translate3d(calc(var(--mouse-x) * -0.35), calc(var(--mouse-y) * -0.35), 0)",
          transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* =====================================================
          UI READABILITY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/[0.06]" />

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-black/20 to-transparent" />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.34)_100%)]" />

      {/* =====================================================
          ANIMATION KEYFRAMES
      ====================================================== */}

      <style>
        {`
          @keyframes landscapeDrift {
            0% {
              transform:
                translate3d(
                  calc(var(--mouse-x) - 5px),
                  calc(var(--mouse-y) + 2px),
                  0
                )
                scale(1.04);
            }

            100% {
              transform:
                translate3d(
                  calc(var(--mouse-x) + 5px),
                  calc(var(--mouse-y) - 2px),
                  0
                )
                scale(1.07);
            }
          }

          @keyframes atmosphere {
            0% {
              opacity: 0.35;
            }

            100% {
              opacity: 0.75;
            }
          }

          @keyframes cloudOne {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(calc(100vw + 700px));
            }
          }

          @keyframes cloudTwo {
            0% {
              transform: translateX(0) scale(0.8);
            }

            100% {
              transform: translateX(calc(100vw + 850px)) scale(0.8);
            }
          }

          @keyframes cloudThree {
            0% {
              transform: translateX(0) scale(1.2);
            }

            100% {
              transform: translateX(calc(100vw + 950px)) scale(1.2);
            }
          }

          @keyframes birdOne {
            0% {
              transform: translateX(0) translateY(0) scale(0.9);
            }

            30% {
              transform: translateX(30vw) translateY(-25px) scale(1);
            }

            60% {
              transform: translateX(65vw) translateY(15px) scale(0.9);
            }

            100% {
              transform: translateX(calc(100vw + 150px)) translateY(-10px) scale(0.8);
            }
          }

          @keyframes birdTwo {
            0% {
              transform: translateX(0) translateY(0) scale(0.7);
            }

            50% {
              transform: translateX(55vw) translateY(-35px) scale(0.8);
            }

            100% {
              transform: translateX(calc(100vw + 150px)) translateY(10px) scale(0.6);
            }
          }

          @keyframes birdThree {
            0% {
              transform: translateX(0) translateY(0) scale(0.5);
            }

            40% {
              transform: translateX(40vw) translateY(20px) scale(0.6);
            }

            100% {
              transform: translateX(calc(100vw + 150px)) translateY(-25px) scale(0.45);
            }
          }

          @keyframes waterMove {
            0% {
              transform: translateX(-18px) scaleX(0.98);
              opacity: 0.15;
            }

            100% {
              transform: translateX(18px) scaleX(1.04);
              opacity: 0.4;
            }
          }

          @keyframes reflectionMove {
            0% {
              transform: translateX(-15px) scaleX(0.9);
              opacity: 0.15;
            }

            100% {
              transform: translateX(15px) scaleX(1.1);
              opacity: 0.35;
            }
          }

          @keyframes mistOne {
            0% {
              transform: translateX(-35px);
              opacity: 0.08;
            }

            100% {
              transform: translateX(45px);
              opacity: 0.3;
            }
          }

          @keyframes mistTwo {
            0% {
              transform: translateX(30px);
              opacity: 0.08;
            }

            100% {
              transform: translateX(-40px);
              opacity: 0.28;
            }
          }

          @keyframes sunPulse {
            0% {
              transform: scale(0.9);
              opacity: 0.35;
            }

            100% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .live-wallpaper *,
            .live-wallpaper {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default LiveWallpaper;