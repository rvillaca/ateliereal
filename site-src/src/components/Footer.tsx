import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">👑</span>
              <div>
                <h3 className="font-dancing text-2xl font-bold text-pink-400">Atelie Real</h3>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Bolos, Doces e Salgados</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bolos, doces e salgados feitos com amor e dedicação. Transformamos momentos em doces memórias. 💕
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Produtos', 'Galeria', 'Depoimentos', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment methods */}
          <div>
            <h4 className="font-semibold text-white mb-4">Formas de Pagamento</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-xl">💳</span>
                <span>Pix</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-xl">💵</span>
                <span>Dinheiro</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-xl">🏦</span>
                <span>Transferência Bancária</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Entrega</h4>
              <p className="text-gray-400 text-sm">🏠 Entrega e retirada disponíveis</p>
              <p className="text-gray-400 text-sm">📍 Consulte a área de cobertura</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Atelie Real. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> e muito açúcar
          </p>
        </div>
      </div>
    </footer>
  );
}
