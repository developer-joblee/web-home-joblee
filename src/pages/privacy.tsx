export const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-12">
        {/* Cabeçalho */}
        <header className="border-b border-gray-100 pb-8 mb-8">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-900 mb-4 tracking-tight">
            POLÍTICA DE PRIVACIDADE - JOBLEE
          </h1>
          <p className="text-gray-500 text-sm italic">
            <strong>Última atualização:</strong> 15 de Fevereiro de 2026
          </p>
        </header>

        {/* Introdução */}
        <section className="mb-10 text-gray-700 leading-relaxed">
          <p>
            A <span className="font-semibold text-blue-700">JOBLEE</span>{' '}
            respeita a privacidade e a proteção dos dados pessoais de seus
            usuários, comprometendo-se a tratá-los em conformidade com a{' '}
            <span className="underline decoration-blue-200">
              Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD)
            </span>{' '}
            e demais normas aplicáveis.
          </p>
        </section>

        {/* Conteúdo Principal */}
        <ol className="space-y-10 list-none counter-reset-section">
          {/* Item 1 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                1
              </span>
              CONTROLADOR DOS DADOS
            </h2>
            <ul className="list-disc pl-11 space-y-2 text-gray-600">
              <li>
                A JOBLEE atua como Controladora dos dados pessoais tratados no
                âmbito da plataforma.
              </li>
              <li>
                Contato do Encarregado (DPO):
                <a
                  href="mailto:joblee@joblee.com.br"
                  className="text-blue-600 hover:underline ml-1"
                >
                  joblee@joblee.com.br
                </a>
              </li>
            </ul>
          </li>

          {/* Item 2 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                2
              </span>
              DADOS PESSOAIS COLETADOS
            </h2>
            <div className="pl-11 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 underline decoration-gray-200">
                  2.1. Dados fornecidos no cadastro
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 list-disc pl-5 text-gray-600">
                  <li>Nome completo</li>
                  <li>CPF</li>
                  <li>CNPJ (quando aplicável ao Prestador)</li>
                  <li>Data de nascimento</li>
                  <li>Telefone</li>
                  <li>E-mail</li>
                  <li>Endereço completo</li>
                  <li>Foto de perfil (Prestadores)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2 underline decoration-gray-200">
                  2.2. Dados coletados automaticamente
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Endereço IP</li>
                  <li>Logs de acesso</li>
                  <li>Dados de dispositivo e navegador</li>
                  <li>Dados de navegação</li>
                  <li>Informações obtidas por ferramentas de analytics</li>
                </ul>
              </div>
            </div>
          </li>

          {/* Item 3 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                3
              </span>
              FINALIDADE DO TRATAMENTO
            </h2>
            <div className="pl-11">
              <ul className="list-disc space-y-2 text-gray-600 mb-4">
                <li>Permitir criação e gerenciamento de conta;</li>
                <li>Viabilizar a conexão entre Contratantes e Prestadores;</li>
                <li>Processar pagamentos;</li>
                <li>
                  Compartilhar informações necessárias para execução do serviço;
                </li>
                <li>Prevenir fraudes e garantir segurança da plataforma;</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>
                  Exercer direitos em processos judiciais, administrativos ou
                  arbitrais;
                </li>
                <li>Aprimorar funcionalidades e experiência do usuário.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
                <p className="font-semibold text-blue-900 mb-2">
                  Bases legais aplicáveis:
                </p>
                <p className="text-blue-800 text-sm">
                  Execução de contrato, cumprimento de obrigação legal, legítimo
                  interesse, exercício regular de direitos e consentimento.
                </p>
              </div>
            </div>
          </li>

          {/* Item 4 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                4
              </span>
              COMPARTILHAMENTO DE DADOS
            </h2>
            <div className="pl-11 space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  4.1. Entre Usuários
                </h3>
                <ul className="list-disc pl-5 text-gray-600 mb-2">
                  <li>Nome e endereço do Contratante;</li>
                  <li>Comunicação exclusiva via chat interno.</li>
                </ul>
                <p className="text-sm font-medium text-red-600 italic">
                  Não são compartilhados CPF, CNPJ ou e-mail entre usuários.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  4.2. Com Operadores e Terceiros
                </h3>
                <ul className="list-disc pl-5 text-gray-600 mb-3">
                  <li>Asaas, AWS (região us-east-1), Supabase e Analytics.</li>
                </ul>
                <p className="text-sm text-gray-500">
                  Tais terceiros tratam dados sob contrato e conforme instruções
                  da JOBLEE.
                </p>
              </div>
            </div>
          </li>

          {/* Itens Simples com Estilo Unificado */}
          {[
            {
              title: 'TRANSFERÊNCIA INTERNACIONAL',
              content:
                'Os dados poderão ser armazenados em servidores localizados nos Estados Unidos (AWS – us-east-1), observando as garantias da LGPD.',
            },
            {
              title: 'RETENÇÃO DOS DADOS',
              content:
                'Mantidos enquanto durar a relação contratual ou pelo prazo necessário ao cumprimento de obrigações legais/fiscais e exercício de direitos.',
            },
            {
              title: 'DIREITOS DO TITULAR',
              content:
                'Acesso, correção, anonimização, portabilidade e revogação de consentimento. Solicitações via joblee@joblee.com.br.',
              highlight: true,
            },
            {
              title: 'SEGURANÇA DA INFORMAÇÃO',
              content:
                'Adotamos medidas técnicas e administrativas, contudo, nenhum sistema é absolutamente seguro contra eventos externos imprevisíveis.',
            },
            {
              title: 'PROIBIÇÃO DE MENORES',
              content:
                'Plataforma exclusiva para maiores de 18 anos. Cadastros irregulares serão suspensos ou excluídos imediatamente.',
            },
            {
              title: 'COOKIES',
              content:
                'Utilizamos para segurança e desempenho. O usuário pode configurar seu navegador para bloqueá-los, o que pode afetar a experiência.',
            },
          ].map((item, idx) => (
            <li key={idx}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  {idx + 5}
                </span>
                {item.title}
              </h2>
              <div
                className={`pl-11 text-gray-600 leading-relaxed ${item.highlight ? 'font-medium text-gray-800' : ''}`}
              >
                {item.content}
              </div>
            </li>
          ))}

          {/* Item Final */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                11
              </span>
              ALTERAÇÕES DESTA POLÍTICA
            </h2>
            <ul className="list-disc pl-11 space-y-2 text-gray-600 italic">
              <li>Esta Política poderá ser modificada a qualquer tempo.</li>
              <li>A versão atualizada será publicada com a data de revisão.</li>
              <li>O uso contínuo implica ciência das novas disposições.</li>
            </ul>
          </li>
        </ol>

        <footer className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm italic">
          © {new Date().getFullYear()} JOBLEE - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
};
