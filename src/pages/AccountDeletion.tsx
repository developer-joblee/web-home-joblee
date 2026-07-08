import { Seo } from "@/components/Seo";

export const AccountDeletion = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Seo
        title="Exclusão de conta — Joblee"
        description="Entenda como solicitar a exclusão da sua conta Joblee e quais dados são removidos."
        path="/account-deletion"
        noIndex
      />
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-12">
        {/* Cabeçalho */}
        <header className="border-b border-gray-100 pb-8 mb-8">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-900 mb-4 tracking-tight">
            EXCLUSÃO DE CONTA - JOBLEE
          </h1>
          <p className="text-gray-500 text-sm italic">
            <strong>Última atualização:</strong> 11 de Junho de 2026
          </p>
        </header>

        {/* Introdução */}
        <section className="mb-10 text-gray-700 leading-relaxed">
          <p>
            Esta página explica como você, na condição de{' '}
            <span className="font-semibold text-blue-700">usuário</span> da{' '}
            <span className="font-semibold text-blue-700">JOBLEE</span>, pode
            solicitar a exclusão da sua conta, quais dados são removidos, quais
            informações podem ser mantidas por obrigação legal e qual o prazo
            para a exclusão.
          </p>
        </section>

        {/* Conteúdo Principal */}
        <ol className="space-y-10 list-none">
          {/* Item 1 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                1
              </span>
              COMO EXCLUIR SUA CONTA PELO APLICATIVO
            </h2>
            <div className="pl-11 text-gray-600 leading-relaxed">
              <p className="mb-4">Para excluir sua conta da Joblee:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Abra o aplicativo Joblee.</li>
                <li>
                  Acesse{' '}
                  <span className="font-semibold text-gray-800">
                    Mais &gt; Excluir Conta
                  </span>
                  .
                </li>
                <li>Confirme a exclusão.</li>
              </ol>
            </div>
          </li>

          {/* Item 2 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                2
              </span>
              QUAIS DADOS SÃO REMOVIDOS
            </h2>
            <div className="pl-11 text-gray-600 leading-relaxed">
              <p className="mb-4">
                Ao confirmar a solicitação,{' '}
                <span className="font-semibold text-gray-800">
                  todos os dados pessoais do usuário serão removidos do nosso
                  banco de dados
                </span>
                , incluindo:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 list-disc pl-5 space-y-1">
                <li>Nome completo</li>
                <li>CPF</li>
                <li>Data de nascimento</li>
                <li>Telefone</li>
                <li>E-mail</li>
                <li>Endereço completo</li>
                <li>Histórico de pedidos e serviços</li>
                <li>Mensagens trocadas no chat interno</li>
                <li>Dados de navegação associados à conta</li>
              </ul>
            </div>
          </li>

          {/* Item 3 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                3
              </span>
              DADOS MANTIDOS POR OBRIGAÇÃO LEGAL
            </h2>
            <div className="pl-11 text-gray-600 leading-relaxed">
              <p className="mb-4">
                Informações que precisam ser mantidas por exigências legais,
                fiscais ou regulatórias poderão ser armazenadas pelo prazo legal
                aplicável, mesmo após a exclusão da conta, tais como:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Registros fiscais e financeiros de pagamentos e transações;
                </li>
                <li>
                  Registros de acesso à aplicação, nos termos do Marco Civil da
                  Internet (Lei nº 12.965/2014);
                </li>
                <li>
                  Dados necessários ao cumprimento de obrigações legais ou ao
                  exercício regular de direitos em processos judiciais,
                  administrativos ou arbitrais.
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Esses dados são tratados em conformidade com a Lei nº
                13.709/2018 (LGPD) e descartados após o término do prazo legal
                de retenção.
              </p>
            </div>
          </li>

          {/* Item 4 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                4
              </span>
              PRAZO PARA EXCLUSÃO
            </h2>
            <div className="pl-11">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
                <p className="text-blue-900 font-medium">
                  A conta e os dados do usuário serão removidos do banco de
                  dados em{' '}
                  <span className="font-bold">
                    até 15 dias a partir da data da solicitação
                  </span>
                  .
                </p>
              </div>
            </div>
          </li>

          {/* Item 5 */}
          <li>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                5
              </span>
              DÚVIDAS E CONTATO
            </h2>
            <div className="pl-11 text-gray-600 leading-relaxed">
              <p>
                Em caso de dúvidas sobre a exclusão da sua conta ou sobre o
                tratamento dos seus dados, entre em contato pelo e-mail{' '}
                <a
                  href="mailto:joblee@joblee.com.br"
                  className="text-blue-600 hover:underline font-medium"
                >
                  joblee@joblee.com.br
                </a>
                .
              </p>
            </div>
          </li>
        </ol>

        <footer className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm italic">
          © {new Date().getFullYear()} JOBLEE - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
};
