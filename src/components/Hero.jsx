import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Arbre Éolien Intelligent
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Une solution innovante, silencieuse et esthétique
            pour produire de l'énergie durable en milieu urbain.
          </p>

          <button
            onClick={() => {
              document.getElementById("solution").scrollIntoView({
                behavior: "smooth"
              })
            }}
            className="mt-8 bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition"
          >
            Découvrir
          </button>
        </motion.div>

        <motion.img
          src="/src/assets/tree6.jpeg"
          alt="Arbre éolien"
          className="rounded-2xl shadow-xl cursor-pointer
                     transition-all duration-300
                     hover:shadow-2xl
                     hover:-translate-y-2
                     hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

      </div>
    </section>
  )
}