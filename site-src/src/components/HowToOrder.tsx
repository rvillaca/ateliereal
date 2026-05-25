import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList, CreditCard, Truck } from 'lucide-react';

const WHATSAPP_NUMBER = '5541998962647';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um pedido 🍫`;

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Escolha seus doces',
    description: 'Confira nosso cardápio e escolha seus doces favoritos ou crie um pedido personalizado.',
    color: 'from-pink-400 to-rose-400',
  },
  {
    icon: MessageCircle,
    number: '02',
    title: 'Fale pelo WhatsApp',
    description: 'Envie seu pedido pelo WhatsApp com os itens desejados, quantidade e data de entrega.',
    color: 'from-green-400 to-emerald-400',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Confirme e pague',
    description: 'Aceitamos Pix, transferência e dinheiro. Confirme seu pedido e aguarde a magia acontecer!',
    color: 'from-purple-400 to-indigo-400',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Receba seus doces',
    description: 'Retire no local combinado ou receba em casa. Tudo fresquinho e pronto para saborear!',
    color: 'from-orange-400 to-amber-400',
  },
];

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="py-20 lg:py-28 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-400 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            Como Funciona
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como fazer seu pedido
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            É super fácil! Siga os passos abaixo e receba seus doces favoritos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-white/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-white/40 text-5xl font-bold font-playfair absolute top-4 right-6">
                  {step.number}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
          >
            <svg className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fazer Pedido Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
