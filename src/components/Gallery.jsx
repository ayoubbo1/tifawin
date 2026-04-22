import tree1 from "../assets/tree1.jpeg"
import tree2 from "../assets/tree2.jpeg"
import tree3 from "../assets/tree3.jpeg"
import tree4 from "../assets/tree4.jpeg"
import tree5 from "../assets/tree5.jpeg"

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Galerie du Projet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10 items-center">
            <img
              src={tree1}
              className="w-3/4 rounded-2xl shadow-lg object-cover hover:scale-105 transition duration-500"
            />
            <img
              src={tree2}
              className="w-3/4 rounded-2xl shadow-lg object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src={tree5}
              className="w-3/4 rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10 items-center">
            <img
              src={tree4}
              className="w-4/4 rounded-2xl shadow-lg object-cover hover:scale-105 transition duration-500"
            />
            <img
              src={tree3}
              className="w-4/4 rounded-2xl shadow-lg object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  )
}