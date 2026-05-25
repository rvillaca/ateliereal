import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '5541998962647';

const categories = ['Todos', 'Bolos', 'Brigadeiros', 'Trufas', 'Cupcakes', 'Salgados', 'Docinhos Finos'];

const products = [
  {
    id: 1,
    name: 'Brigadeiro Gourmet Tradicional',
    description: 'O clássico brigadeiro com chocolate belga, feito com muito carinho.',
    price: 'R$ 3,50',
    priceUnit: 'unidade',
    category: 'Brigadeiros',
    image: 'https://images.pexels.com/photos/8498186/pexels-photo-8498186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: true,
    rating: 5,
  },
  {
    id: 2,
    name: 'Brigadeiro de Ninho',
    description: 'Brigadeiro cremoso de leite ninho com granulado branco.',
    price: 'R$ 4,00',
    priceUnit: 'unidade',
    category: 'Brigadeiros',
    image: 'https://images.pexels.com/photos/18784856/pexels-photo-18784856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: true,
    rating: 5,
  },
  {
    id: 3,
    name: 'Trufa de Morango',
    description: 'Trufa artesanal recheada com creme de morango fresco.',
    price: 'R$ 5,00',
    priceUnit: 'unidade',
    category: 'Trufas',
    image: 'https://images.pexels.com/photos/5665639/pexels-photo-5665639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: false,
    rating: 5,
  },
  {
    id: 4,
    name: 'Trufa de Maracujá',
    description: 'Combinação perfeita de chocolate e maracujá. Irresistível!',
    price: 'R$ 5,00',
    priceUnit: 'unidade',
    category: 'Trufas',
    image: 'https://images.pexels.com/photos/26341195/pexels-photo-26341195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: false,
    rating: 4,
  },
  {
    id: 5,
    name: 'Cupcake Red Velvet',
    description: 'Cupcake macio de red velvet com cobertura de cream cheese.',
    price: 'R$ 8,00',
    priceUnit: 'unidade',
    category: 'Cupcakes',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: true,
    rating: 5,
  },
  {
    id: 6,
    name: 'Cupcake de Baunilha',
    description: 'Cupcake fofinho de baunilha com chantilly e frutas frescas.',
    price: 'R$ 7,00',
    priceUnit: 'unidade',
    category: 'Cupcakes',
    image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: false,
    rating: 5,
  },
  {
    id: 7,
    name: 'Bolo de Chocolate',
    description: 'Bolo de chocolate com cobertura cremosa. Perfeito para festas!',
    price: 'A partir de R$ 80',
    priceUnit: '',
    category: 'Bolos',
    image: 'https://images.pexels.com/photos/34718258/pexels-photo-34718258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: true,
    rating: 5,
  },
  {
    id: 8,
    name: 'Kit Docinhos para Festa',
    description: 'Cento de docinhos sortidos: brigadeiros, beijinhos, cajuzinhos e mais.',
    price: 'R$ 120',
    priceUnit: 'cento',
    category: 'Docinhos Finos',
    image: 'https://images.pexels.com/photos/30205964/pexels-photo-30205964.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    popular: true,
    rating: 5,
  },
  {
    id: 9,
    name: 'Cupcake Chocolate Premium',
    description: 'Cupcake intenso de chocolate com raspas e cobertura aveludada.',
    price: 'R$ 8,50',
    priceUnit: 'unidade',
    category: 'Cupcakes',
    image: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: false,
    rating: 4,
  },
  {
    id: 10,
    name: 'Cento de Salgados Fritos',
    description: 'Coxinhas, risoles, quibes e pastéis crocantes feitos na hora.',
    price: 'R$ 100',
    priceUnit: 'cento',
    category: 'Salgados',
    image: 'https://images.pexels.com/photos/34203198/pexels-photo-34203198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: true,
    rating: 5,
  },
  {
    id: 11,
    name: 'Salgados Assados Gourmet',
    description: 'Empadas, esfihas e enroladinhos assados com massa artesanal.',
    price: 'R$ 110',
    priceUnit: 'cento',
    category: 'Salgados',
    image: 'https://images.pexels.com/photos/29631422/pexels-photo-29631422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: false,
    rating: 5,
  },
  {
    id: 12,
    name: 'Kit Festa Completo',
    description: 'Salgados + docinhos finos + bolo. O combo perfeito para sua festa!',
    price: 'A partir de R$ 250',
    priceUnit: '',
    category: 'Salgados',
    image: 'https://images.pexels.com/photos/18784892/pexels-photo-18784892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    popular: true,
    rating: 5,
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleOrder = (productName: string) => {
    const message = `Olá! Gostaria de encomendar: *${productName}* 🍫\nPoderia me informar sobre disponibilidade e entrega?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nosso Cardápio
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Doces que fazem{' '}
            <span className="gradient-text">seus olhos brilharem</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Escolha seus favoritos e faça sua encomenda pelo WhatsApp. Produção fresquinha e sob medida para você!
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-pink-200 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {product.popular && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-pink-600 font-bold px-3 py-1 rounded-full text-sm">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1.5 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  {product.priceUnit && (
                    <p className="text-xs text-gray-400 mb-3">Preço por {product.priceUnit}</p>
                  )}
                  <button
                    onClick={() => handleOrder(product.name)}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group-hover:scale-[1.02]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Encomendar
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Não encontrou o que procura? Monte seu pedido personalizado!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido personalizado 🎂')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-100 transition-all duration-300"
          >
            💬 Fale conosco para personalizar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
