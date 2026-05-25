import { motion } from 'framer-motion';
import { Heart, Award, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada doce é preparado com carinho e dedicação, usando as melhores receitas de família.',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Ingredientes selecionados e de alta qualidade para garantir o melhor sabor.',
  },
  {
    icon: Clock,
    title: 'Sempre Fresquinho',
    description: 'Produção feita sob encomenda para você receber tudo fresquinho e perfeito.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes Naturais',
    description: 'Sem conservantes artificiais. Nossos doces são feitos com ingredientes naturais.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-gradient-to-b from-white to-pink-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="./images/about-bg.jpg"
                alt="Nossa confeitaria"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-2xl shadow-xl p-5 border border-pink-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">+500</p>
                  <p className="text-sm text-gray-500">Clientes satisfeitos</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200/30 rounded-full blur-xl" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Sobre Nós
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Uma paixão que virou{' '}
              <span className="text-pink-600 font-dancing text-4xl sm:text-5xl lg:text-6xl">doce negócio</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              O <strong className="text-pink-600">Atelie Real</strong> nasceu do amor pela confeitaria e da vontade de levar alegria através dos nossos bolos, doces e salgados. Cada receita é pensada com carinho, testada e aprovada para garantir uma experiência única de sabor.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Trabalhamos com encomendas para festas, eventos, presentes e para quem simplesmente quer se deliciar com um doce especial. Nosso compromisso é com a qualidade e a satisfação de cada cliente. 💕
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-pink-50 hover:shadow-md hover:border-pink-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
