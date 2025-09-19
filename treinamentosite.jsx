import React, { useState } from 'react';

const App = () => {
  const [copied, setCopied] = useState({});

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text.replace(/<br\/?>/g, '\n').replace(/&nbsp;/g, ' '))
      .then(() => {
        setCopied(prev => ({ ...prev, [id]: true }));
        setTimeout(() => {
          setCopied(prev => ({ ...prev, [id]: false }));
        }, 2000);
      })
      .catch(err => {
        console.error('Erro ao copiar: ', err);
      });
  };

  const whatsappScript = `"Oi [Nome]! Tudo bem?
Sou especialista em criar sites lindos e funcionais para [tipo de negócio] — tudo feito com inteligência artificial, então fica pronto em poucos dias e com preço justo.
Vi seu trabalho e amei! Mas notei que você ainda não tem um site profissional — isso pode estar fazendo você perder clientes que não salvam seu WhatsApp ou não te encontram no Google.
Posso criar um site completo pra você por R$ 897 à vista (com 10% OFF no Pix).
Quer ver um exemplo do que faria pra você? É rapidinho 😊"`;

  const emailScript = `Assunto: 🎯 Oportunidade para [Nome do Negócio] atrair mais clientes

Olá [Nome],

Me chamo [Seu Nome] e ajudo empreendedores como você a terem um site profissional — sem complicação, sem mensalidade alta, e entregue em até 5 dias.

Imagine:
- Clientes encontrando você no Google
- Pedidos entrando 24h por dia (mesmo quando você dorme)
- Um cartão de visitas digital que impressiona

Posso criar isso pra você por R$ 897 à vista (Pix).

Quer ver um protótipo grátis do que faria pra você? Basta responder "QUERO VER" 😊

Abraços,
[Seu Nome]
[Seu WhatsApp]`;

  const googleMapsScript = `"Oi [Nome]! Vi seu estabelecimento no Google Maps e adorei seu trabalho!
Percebi que você ainda não tem um site profissional conectado — isso pode estar fazendo você perder clientes que buscam serviços como o seu online.
Sua concorrência já está na web, e os clientes estão cada vez mais digitais. Não fique para trás!
Posso criar um site moderno e funcional pra você em apenas 5 dias, por R$ 897 à vista (com 10% OFF no Pix).
Quer ver como ficaria? É rapidinho! 😊"`;

  const proposalTemplate = `PROPOSTA COMERCIAL

Cliente: [Nome do Cliente]
Serviço: Criação de Site Profissional
Prazo: 5 dias úteis após aprovação do conteúdo
Investimento: R$ 897,00 (à vista via Pix)

O que inclui:
✅ Design moderno com IA
✅ 4 páginas (Home, Sobre, Serviços, Contato)
✅ Botão de WhatsApp + Formulário
✅ Versão mobile otimizada
✅ Domínio .com.br incluso
✅ Hospedagem por 1 ano
✅ Treinamento de 15min
✅ Manual de uso

Aceito? Responda "ACEITO" que começo hoje mesmo! 😊`;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-900 py-6 px-4 md:px-8 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-white flex items-center">
            <span className="mr-2">🚀</span>
            K4MARKETING
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#capitulo1" className="hover:text-yellow-400 transition-colors font-medium">Vendas</a>
            <a href="#estrategia" className="hover:text-yellow-400 transition-colors font-medium">Prospecção</a>
            <a href="#capitulo2" className="hover:text-yellow-400 transition-colors font-medium">Pós-Venda</a>
            <a href="#bonus" className="hover:text-yellow-400 transition-colors font-medium">Bônus</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            VENDA DE SITES
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estratégias comprovadas para prospectar, vender e escalar seu negócio de criação de sites
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#estrategia" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg">
              🎯 Estratégia de Prospecção
            </a>
            <a href="#capitulo1" className="border-2 border-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              💰 Scripts de Venda
            </a>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section id="capitulo1" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 mb-12 border border-yellow-500/30">
            <h2 className="text-4xl font-bold mb-2 text-yellow-400">💰 CAPÍTULO 1</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">Como Vender o Site para Clientes</h3>
            
            {/* Estratégias de prospecção */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <span className="mr-3">🎯</span>
                Estratégias de prospecção
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* WhatsApp */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-green-400 text-2xl mr-2">📱</span>
                    <h4 className="text-xl font-bold text-green-400">WhatsApp (o mais eficaz)</h4>
                  </div>
                  <div className="bg-black p-4 rounded-lg text-sm">
                    <p className="text-gray-300 leading-relaxed">
                      "Oi [Nome], vi seu Instagram e amei seu trabalho!<br/><br/>
                      Notei que você ainda não tem um site profissional — isso pode estar fazendo você perder clientes que não salvam seu WhatsApp.<br/><br/>
                      Posso criar um site lindo e funcional pra você em 5 dias, por R$ 897 à vista.<br/><br/>
                      Quer ver um exemplo do que faria pra você? 😊"
                    </p>
                  </div>
                </div>
                
                {/* Instagram */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-400 text-2xl mr-2">📸</span>
                    <h4 className="text-xl font-bold text-blue-400">Instagram</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-black p-3 rounded">
                      <p className="text-sm text-gray-300">
                        Comente em posts: "Lindo trabalho! Já pensou em ter um site só seu pra receber pedidos direto? Posso te ajudar 😉"
                      </p>
                    </div>
                    <div className="bg-black p-3 rounded">
                      <p className="text-sm text-gray-300">
                        Stories: "Mais um site entregue! 🎉 Dessa vez para a @confeitariaflor — agora ela recebe pedidos 24h! Quer o seu? Me chama!"
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Indicações */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-purple-400 text-2xl mr-2">🤝</span>
                    <h4 className="text-xl font-bold text-purple-400">Indicações</h4>
                  </div>
                  <div className="bg-black p-4 rounded-lg text-sm">
                    <p className="text-gray-300">
                      "Adorei seu site! Quem fez?" → "Fui eu! 😊 Se conhecer alguém que precisa, manda aqui — dou 10% de desconto pra você!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Como precificar */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <span className="mr-3">💰</span>
                Como precificar (3 modelos)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="border border-gray-700 p-4 text-left font-bold text-yellow-400">Modelo</th>
                      <th className="border border-gray-700 p-4 text-left font-bold text-yellow-400">Como funciona</th>
                      <th className="border border-gray-700 p-4 text-left font-bold text-yellow-400">Preço sugerido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                      <td className="p-4 font-semibold text-green-400">Preço fixo</td>
                      <td className="p-4">Site completo, entrega final</td>
                      <td className="p-4">R$ 897 a R$ 2.500</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                      <td className="p-4 font-semibold text-blue-400">Pacotes</td>
                      <td className="p-4">Básico (R$ 697), Premium (R$ 1.297), Completo (R$ 1.997)</td>
                      <td className="p-4">Crie 3 opções</td>
                    </tr>
                    <tr className="hover:bg-gray-800/50">
                      <td className="p-4 font-semibold text-purple-400">Recorrência</td>
                      <td className="p-4">Site + manutenção mensal</td>
                      <td className="p-4">R$ 297/mês (site incluso na 1ª mensalidade)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-yellow-900/30 border border-yellow-500 p-4 rounded-lg">
                <p className="font-bold text-yellow-400 flex items-center">
                  <span className="mr-2">💡</span>
                  Dica: Ofereça Pix com 10% de desconto — fecha venda mais rápido.
                </p>
              </div>
            </div>
            
            {/* Scripts de vendas */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <span className="mr-3">📋</span>
                Scripts de vendas (CLIQUE PARA COPIAR!)
              </h3>
              
              <div className="space-y-8">
                {/* WhatsApp script */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-green-400 text-xl mr-2">📱</span>
                      <h4 className="text-xl font-bold">WhatsApp (primeiro contato)</h4>
                    </div>
                    <button
                      onClick={() => copyToClipboard(whatsappScript, 'whatsapp1')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
                    >
                      {copied.whatsapp1 ? 'Copiado! ✅' : 'Copiar'}
                    </button>
                  </div>
                  <div className="bg-black p-4 rounded-lg text-sm">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {whatsappScript}
                    </p>
                  </div>
                </div>
                
                {/* Email script */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-blue-400 text-xl mr-2">✉️</span>
                      <h4 className="text-xl font-bold">E-mail (follow-up)</h4>
                    </div>
                    <button
                      onClick={() => copyToClipboard(emailScript, 'email')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
                    >
                      {copied.email ? 'Copiado! ✅' : 'Copiar'}
                    </button>
                  </div>
                  <div className="bg-black p-4 rounded-lg text-sm">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {emailScript}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Strategy Section */}
      <section id="estrategia" className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 mb-12 border border-yellow-500/30">
            <h2 className="text-4xl font-bold mb-2 text-yellow-400">🔍 ESTRATÉGIA AVANÇADA</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">Como Encontrar Clientes Perfeitos</h3>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                <span className="mr-3">🚀</span>
                Método Google Maps + Instagram
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-start mb-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-green-400">Pesquisa no Google Maps</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Pesquise por negócios locais como "odontologia próximos a mim", "confeitaria perto de mim", "salão de beleza na minha região".<br/><br/>
                        <strong className="text-yellow-400">Dica crucial:</strong> Verifique se o estabelecimento tem um site conectado ao Google Maps. Se não tiver, já é um sinal de que eles estão perdendo oportunidades!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-start mb-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-blue-400">Verificação nas Redes Sociais</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Acesse o perfil do Instagram do negócio (se estiver disponível no Maps).<br/><br/>
                        Verifique se:<br/>
                        • Possuem link para site na bio<br/>
                        • Utilizam ferramentas profissionais de agendamento<br/>
                        • Têm botão de WhatsApp funcionando<br/><br/>
                        <strong className="text-yellow-400">Se não tiverem nenhum desses elementos, você encontrou um cliente perfeito!</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-start mb-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-purple-400">Contato Estratégico</h4>
                      <div className="bg-black p-4 rounded-lg mt-4">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-bold text-white">Script de Contato via WhatsApp/Instagram</h5>
                          <button
                            onClick={() => copyToClipboard(googleMapsScript, 'googlemaps')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
                          >
                            {copied.googlemaps ? 'Copiado! ✅' : 'Copiar'}
                          </button>
                        </div>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                          {googleMapsScript}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-bold mb-4 text-red-300 flex items-center">
                <span className="mr-2">⚠️</span>
                Argumento Poderoso de Venda
              </h4>
              <p className="text-gray-200 leading-relaxed text-lg">
                "Sua concorrência está se ingressando na web e investindo em presença digital. Clientes hoje pesquisam online antes de comprar. Se você não estiver lá, eles escolherão seus concorrentes.<br/><br/>
                <strong className="text-yellow-400">Não fique para trás neste mercado atual!</strong> Um site profissional é como ter uma vitrine aberta 24h por dia, 7 dias por semana, mostrando seu trabalho para milhares de potenciais clientes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section id="capitulo2" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 mb-12 border border-yellow-500/30">
            <h2 className="text-4xl font-bold mb-2 text-yellow-400">📈 CAPÍTULO 2</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">Pós-Venda e Escala</h3>
            
            <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <span className="mr-3">🔧</span>
                Como oferecer manutenção mensal
              </h3>
              <div className="bg-black p-6 rounded-lg">
                <p className="text-lg leading-relaxed mb-4">
                  "Seu site está no ar! 🎉 Agora, para manter tudo atualizado, seguro e no topo do Google, ofereço um plano de manutenção por apenas R$ 97/mês. Inclui:
                </p>
                <ul className="space-y-2 ml-6 mb-4 text-gray-300">
                  <li className="list-disc">Atualizações de conteúdo (textos, fotos)</li>
                  <li className="list-disc">Backup semanal</li>
                  <li className="list-disc">Suporte prioritário por WhatsApp</li>
                  <li className="list-disc">Relatório mensal de visitas</li>
                </ul>
                <p className="font-bold text-yellow-400 text-lg">
                  ✅ Venda como "seguro do site" — o cliente paga para não ter dor de cabeça.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section id="bonus" className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 mb-12 border border-yellow-500/30">
            <h2 className="text-4xl font-bold mb-2 text-yellow-400">🎁 BÔNUS</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">Modelos Prontos + FAQs + Cronograma</h3>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                <span className="mr-3">📄</span>
                MODELO 1: Proposta Simples (CLIQUE PARA COPIAR!)
              </h3>
              <div className="bg-black p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-yellow-400">PROPOSTA COMERCIAL</h4>
                  <button
                    onClick={() => copyToClipboard(proposalTemplate, 'proposal')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
                  >
                    {copied.proposal ? 'Copiado! ✅' : 'Copiar'}
                  </button>
                </div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                  {proposalTemplate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Pronto para começar?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Use essas estratégias hoje mesmo e comece a vender seus sites com mais eficiência!
          </p>
          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/50">
            <p className="text-lg text-gray-300 mb-6">
              Lembre-se: cada cliente que você prospecta usando esses métodos é uma oportunidade de negócio real.
            </p>
            <div className="text-2xl font-bold text-yellow-400 animate-pulse">
              💡 Ação gera resultado!
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 md:px-8 mt-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-2">🚀</span>
            K4MARKETING
          </div>
          <p className="text-gray-400 text-lg mb-6">Transformando ideias em resultados digitais</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a href="#capitulo1" className="text-gray-300 hover:text-yellow-400 transition-colors">Estratégias de Venda</a>
            <a href="#estrategia" className="text-gray-300 hover:text-yellow-400 transition-colors">Prospecção Avançada</a>
            <a href="#capitulo2" className="text-gray-300 hover:text-yellow-400 transition-colors">Pós-Venda</a>
            <a href="#bonus" className="text-gray-300 hover:text-yellow-400 transition-colors">Modelos Prontos</a>
          </div>
          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 K4MARKETING. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;