export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-primary mb-12">
          Une Solution Révolutionnaire
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* PROBLEME */}
          <div className="p-10 rounded-2xl bg-white shadow-lg
                          transition-all duration-300
                          hover:shadow-2xl
                          hover:-translate-y-2
                          hover:border hover:border-red-400/30">

            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Problème
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Les éoliennes traditionnelles sont bruyantes,
              volumineuses et difficiles à intégrer en milieu urbain.
            </p>
          </div>


          {/* SOLUTION */}
          <div className="p-10 rounded-2xl bg-green-50 shadow-lg
                          transition-all duration-300
                          hover:shadow-2xl
                          hover:-translate-y-2
                          hover:border hover:border-primary/30">

            <h3 className="text-2xl font-bold text-primary mb-4">
              Solution
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Un arbre éolien intelligent, silencieux et esthétique,
              conçu spécialement pour s'intégrer harmonieusement
              dans les espaces urbains.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}