import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/27551684/pexels-photo-27551684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Mesa de doces decorada',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/8498186/pexels-photo-8498186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Brigadeiros gourmet',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Cupcake de chocolate',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/30205964/pexels-photo-30205964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Brigadeiros artesanais',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Cupcake especial',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5665639/pexels-photo-5665639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Doces decorados',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/34718258/pexels-photo-34718258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Bolo de chocolate',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/9329433/pexels-photo-9329433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Doce artesanal',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Galeria
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-pink-600">doces</span> em destaque
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Confira algumas das delícias que já preparamos com muito carinho para nossos clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100049147020318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
          >
            📸 Ver mais fotos no Facebook
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
