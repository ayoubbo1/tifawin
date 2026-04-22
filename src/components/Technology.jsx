export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-primary mb-12">
          Technologie Innovante
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="p-8 bg-white rounded-2xl shadow-md 
                          transition-all duration-300 
                          hover:shadow-xl 
                          hover:-translate-y-2 
                          hover:border hover:border-primary/20">

            <h3 className="text-xl font-bold mb-4 text-secondary">
              Micro‑Turbines
            </h3>
            <p className="text-gray-600">
              Captent le vent dans toutes les directions.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 bg-white rounded-2xl shadow-md 
                          transition-all duration-300 
                          hover:shadow-xl 
                          hover:-translate-y-2 
                          hover:border hover:border-primary/20">

            <h3 className="text-xl font-bold mb-4 text-secondary">
              Silencieux
            </h3>
            <p className="text-gray-600">
              Système optimisé pour zéro nuisance sonore.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 bg-white rounded-2xl shadow-md 
                          transition-all duration-300 
                          hover:shadow-xl 
                          hover:-translate-y-2 
                          hover:border hover:border-primary/20">

            <h3 className="text-xl font-bold mb-4 text-secondary">
              Smart Control
            </h3>
            <p className="text-gray-600">
              Gestion intelligente de la production d'énergie.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}