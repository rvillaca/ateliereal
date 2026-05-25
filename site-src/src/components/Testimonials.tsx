import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Clara',
    role: 'Festa de Aniversário',
    text: 'Os brigadeiros gourmet estavam simplesmente DIVINOS! Todos os convidados da festa elogiaram. Com certeza vou pedir novamente! 🤩',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Ana Paula',
    role: 'Encomenda de Casamento',
    text: 'Encomendei os docinhos finos para meu casamento e foi um sucesso absoluto! Tudo perfeito, no prazo e com uma apresentação linda.',
    rating: 5,
    avatar: '👰',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Presente Especial',
    text: 'Comprei uma caixa de trufas para presentear minha esposa e ela adorou! A qualidade dos doces é incomparável. Super recomendo!',
    rating: 5,
    avatar: '🧑',
  },
  {
    name: 'Juliana Santos',
    role: 'Festa Infantil',
    text: 'Os cupcakes e o bolo de chocolate foram o destaque da festa do meu filho! As crianças amaram e os adultos também. Obrigada! ❤️',
    rating: 5,
    avatar: '👩‍👦',
  },
  {
    name: 'Fernanda Lima',
    role: 'Chá de Bebê',
    text: 'Mesa de doces impecável! Tudo muito bonito e gostoso. A Rê é muito caprichosa e atenciosa. Amei cada detalhe!',
    rating: 5,
    avatar: '🤰',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-pink-600">clientes</span> dizem
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl shadow-xl border border-pink-100 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative quote */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-pink-100" />
            
            <div className="relative z-10">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center text-3xl">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-pink-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-pink-100">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-pink-500 w-8' : 'bg-pink-200 hover:bg-pink-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '500+', label: 'Clientes Felizes', emoji: '😍' },
            { number: '1000+', label: 'Pedidos Entregues', emoji: '🍫' },
            { number: '100%', label: 'Satisfação', emoji: '⭐' },
            { number: '50+', label: 'Festas Atendidas', emoji: '🎉' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-pink-50 hover:shadow-md hover:border-pink-200 transition-all duration-300"
            >
              <span className="text-3xl mb-2 block">{stat.emoji}</span>
              <p className="font-playfair text-2xl md:text-3xl font-bold text-pink-600">
                {stat.number}
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
