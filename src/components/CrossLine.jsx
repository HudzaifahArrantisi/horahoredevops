import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaExclamationTriangle, FaBolt } from "react-icons/fa";

const CrossLineSticker = () => {
  // Config untuk tekstur garis-garis hitam tipis (Caution Tape Texture)
  const stripPattern = {
    backgroundImage:
      "repeating-linear-gradient(45deg, #000 0, #000 4px, transparent 4px, transparent 12px)",
    opacity: 0.15,
  };

  // Animation variants untuk efisiensi
  const glitchVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0, 1, 0],
      x: [0, -2, 2, -2, 0],
      transition: { duration: 0.3, repeat: Infinity, repeatDelay: 5 },
    },
  };

  return (
    // Container utama (Floating & Centered)
    <div className="w-full h-0 flex justify-center items-center overflow-visible z-50">
      {/* Wrapper relatif agar garis-garis bertumpuk di titik tengah yang sama */}
      <div className="relative flex justify-center items-center">
        {/* Sparks/Particles Effect - Minimalis */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              y: [Math.random() * 60 - 30, Math.random() * 60 - 30],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}

        {/* --- LINE 1 (175 Derajat) - Posisi di Belakang --- */}
        <motion.div
          className="absolute transform rotate-175 w-[120vw] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-2 border-y-[3px] border-black shadow-lg flex justify-center items-center"
          initial={{ x: "-100%", opacity: 0, rotateY: -90 }}
          animate={{
            x: 0,
            opacity: 1,
            rotateY: 0,
            rotate: [175, 176, 175, 174, 175],
          }}
          transition={{
            x: { duration: 1, ease: "easeOut" },
            opacity: { duration: 0.8 },
            rotateY: { duration: 0.8, ease: "backOut" },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Pattern Texture */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={stripPattern}
          ></div>

          {/* Content Line 1 - Scrolling Animation */}
          <motion.div
            className="flex items-center gap-8 opacity-80"
            animate={{ x: [0, -200] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Kita ulang teksnya agar memenuhi lebar layar */}
            {new Array(15).fill(0).map((_, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 min-w-max"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.08,
                  }}
                >
                  <FaExclamationTriangle className="text-black text-lg drop-shadow-sm" />
                </motion.div>
                <motion.span
                  className="text-xl md:text-2xl font-black text-black tracking-widest uppercase italic"
                  animate={{
                    textShadow: [
                      "0 0 0 rgba(0,0,0,0)",
                      "2px 2px 4px rgba(0,0,0,0.2)",
                      "0 0 0 rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                >
                  DO NOT CROSS
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- LINE 2 (15 Derajat) - Posisi di Depan (Utama) --- */}
        <motion.div
          className="absolute transform rotate-[15deg] w-[120vw] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 py-3 border-y-[4px] border-black shadow-[0_0_25px_rgba(0,0,0,0.6)] flex justify-center items-center z-10"
          initial={{ x: "100%", opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotate: [15, 14, 15, 16, 15],
          }}
          transition={{
            x: { duration: 1, ease: "easeOut", delay: 0.15 },
            opacity: { duration: 0.8, delay: 0.15 },
            scale: { duration: 0.6, delay: 0.15 },
            rotateY: { duration: 0.8, delay: 0.15, ease: "backOut" },
            rotate: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(0,0,0,0.8)",
            transition: { duration: 0.3 },
          }}
        >
          {/* Pattern Texture */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={stripPattern}
          ></div>

          {/* Glitch Effect Overlay */}
          <motion.div
            className="absolute inset-0 bg-red-500 mix-blend-screen"
            variants={glitchVariants}
            initial="initial"
            animate="animate"
          />

          {/* Content Line 2 (Brand Utama) */}
          <motion.div
            className="flex items-center gap-4 relative"
            initial={{ scale: 0, rotateX: -180 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{
              duration: 0.7,
              delay: 1,
              type: "spring",
              stiffness: 150,
            }}
          >
            {/* Left Cloud Icon dengan Lightning Effect */}
            <motion.div
              className="relative w-8 h-8 bg-black rounded-full flex items-center justify-center"
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.3, rotate: 0 }}
            >
              <FaCloud className="text-yellow-400 text-sm" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <FaBolt className="text-yellow-300 text-xs" />
              </motion.div>
            </motion.div>

            {/* Main Brand Text dengan efek lebih keren */}
            <motion.h2
              className="relative text-2xl md:text-4xl font-black text-black tracking-[0.2em] uppercase italic drop-shadow-lg"
              animate={{
                textShadow: [
                  "0 0 0px rgba(0,0,0,0)",
                  "0 0 15px rgba(0,0,0,0.4), 2px 2px 0 rgba(255,255,255,0.3)",
                  "0 0 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                letterSpacing: "0.25em",
                transition: { duration: 0.3 },
              }}
            >
              HORAHORE CLOUD
              {/* Glow effect di belakang text */}
              <motion.span
                className="absolute inset-0 blur-md opacity-30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                HORAHORE CLOUD
              </motion.span>
            </motion.h2>

            {/* Right Cloud Icon dengan Lightning Effect */}
            <motion.div
              className="relative w-8 h-8 bg-black rounded-full flex items-center justify-center"
              animate={{
                rotate: -360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              whileHover={{ scale: 1.3, rotate: 0 }}
            >
              <FaCloud className="text-yellow-400 text-sm" />
              <motion.div
                className="absolute -top-1 -left-1"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: 0.5,
                }}
              >
                <FaBolt className="text-yellow-300 text-xs" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dekorasi tambahan text berjalan kecil di dalam Line 2 */}
          <motion.div
            className="absolute inset-0 flex items-center gap-20 px-4 opacity-25 pointer-events-none overflow-hidden"
            animate={{ x: [0, -150, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                className="text-[10px] font-bold text-black whitespace-nowrap"
                animate={{
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                ⚡ SYSTEM SECURE ⚡
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CrossLineSticker;
