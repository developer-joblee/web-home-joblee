/* eslint-disable @typescript-eslint/no-explicit-any */
import { Seo } from "@/components/Seo";

const termsData = [
  {
    title: 'OBJETO',
    content: [
      {
        title: 'Os serviços objeto dos presentes Termos consistem em',
        content: [
          'Permitir aos usuários que utilizem a Plataforma para que livremente e sem direcionamento ou imposição busquem orçamentos de Anunciantes e/ou Ofertar seus serviços',
          'Os usuários prestadores de serviço poderão enviar seus orçamentos requeridos pelos Contratantes que poderão aceitar ou não e aprovar os seus orçamentos e contratar o respectivo Serviço',
          'Facilitar a conexão direta entre anunciantes e contratantes, compartilhando mutuamente seus dados de contato',
        ],
      },
      'A Joblee atua como facilitadora, permitindo que os Usuários negociem diretamente entre si. Nesta qualidade, a Plataforma não intervém nas tratativas ou na prestação dos serviços, não sendo responsável pela qualidade, execução ou fornecimento dos itens anunciados.',
      'Como plataforma de classificados, a Joblee não interfere nas condições, valores ou prazos estipulados entre as partes, não possuindo qualquer ingerência sobre a qualidade ou a entrega dos serviços contratados, que permanecem sob inteira responsabilidade dos Usuários.',
      'Ao concluir o cadastro, o Usuário estará habilitado a utilizar as funcionalidades da Plataforma em sua região, declarando ter lido, compreendido e aceitado integralmente os presentes Termos de Uso.',
    ],
    endElement: (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md text-sm">
        <p>
          A <strong>Joblee</strong> atua apenas como facilitadora e
          classificados. Não intervimos na prestação, qualidade ou execução dos
          serviços, que são de inteira responsabilidade dos Usuários.
        </p>
      </div>
    ),
  },
  {
    title: 'QUEM PODE SE CADASTRAR',
    content: [
      {
        title:
          'Os serviços da Joblee são destinados a pessoas físicas e jurídicas regularmente inscritas nos cadastros de contribuintes (CPF/CNPJ) e que possuam plena capacidade legal para contratar. É vedada a utilização por menores de idade ou por Usuários que tenham sido inabilitados pela Joblee, seja temporária ou definitivamente. O descumprimento destas condições sujeitará o infrator às sanções previstas no Código Civil.',
        content: [
          'omente será permitida a vinculação de um cadastro por CPF, telefone ou e-mail, não podendo haver duplicidade de dados em nenhum caso.',
        ],
      },
      'A Plataforma poderá suspender ou excluir contas que violem as normas de conduta, agindo unilateralmente sempre que verificar práticas ofensivas ou danos potenciais aos Usuários, colaboradores e demais parceiros.',
    ],
  },
  {
    title: 'CADASTRO',
    content: [
      'Para realização do cadastro, é obrigatório o preenchimento completo de todos os dados pessoais exigidos pela Joblee no momento do cadastramento, para que o Usuário seja habilitado a utilizar a Plataforma.',
      'É obrigação do Usuário manter seus dados cadastrais exatos e atualizados. A Joblee não se responsabiliza por eventuais prejuízos — civis ou criminais — causados pela inserção de informações falsas, incompletas ou equivocadas por parte dos Usuários.',
      'Reservamo-nos o direito de utilizar todos os meios válidos e possíveis para identificar seus Usuários, e ainda, caso necessário, solicitar dados e informações adicionais e documentos que entenda serem pertinentes, a fim de conferir os dados pessoais informados.',
      'Caso a Joblee identifique inconsistências ou suspeitas de inveracidade nos dados cadastrais, reserva-se o direito de suspender ou cancelar o acesso do Usuário de forma temporária ou definitiva. Tal medida inclui o bloqueio de anúncios e a interrupção de qualquer publicidade ativa, sem prejuízo de outras providências legais cabíveis. A aplicação destas sanções não ensejará ao Usuário qualquer direito a indenização, ressarcimento por perdas e danos, lucros cessantes ou danos morais.',
      'O Usuário acessará sua conta por meio de apelido (login) e senha, comprometendo-se a não informar a terceiros esses dados, responsabilizando-se integralmente pelo uso que deles seja feito.',
      'O Usuário é o único responsável pelas operações efetuadas em sua conta, acessível apenas mediante senha pessoal. Em caso de uso não autorizado ou quebra de segurança, o Usuário deverá informar a Joblee imediatamente através dos canais de contato da Plataforma.',
      'A conta do Usuário é pessoal e intransferível, sendo estritamente proibida sua cessão, venda, locação ou qualquer outra forma de transferência. Adicionalmente, não será permitida a criação de novos cadastros por indivíduos cujas contas originais tenham sido suspensas ou canceladas devido a violações das políticas da Joblee.',
      'É expressamente proibido aos Anunciantes apresentarem-se como prepostos, funcionários ou colaboradores da Joblee, sendo vedada qualquer utilização do nome, marca ou logotipo da Plataforma sem autorização prévia. Os Contratantes reconhecem a inexistência de qualquer vínculo de subordinação ou dependência econômica entre os Anunciantes e a Joblee.',
      'A Joblee se reserva o direito de, unilateralmente e sem prévio aviso, recusar qualquer solicitação de cadastro e de cancelar um cadastro previamente aceito.',
    ],
  },
  {
    title: 'ALTERAÇÕES DOS TERMOS E CONDIÇÕES GERAIS',
    content: [
      {
        title:
          'A Joblee reserva-se o direito de alterar estes Termos a qualquer momento e a seu exclusivo critério. As novas versões entrarão em vigor 10 (dez) dias após sua publicação. Caso não concorde com as alterações, o Usuário deverá manifestar sua discordância via e-mail no prazo de 5 (cinco) dias após a publicação, o que resultará no encerramento do vínculo contratual, desde que não haja obrigações ou débitos pendentes. A ausência de manifestação no prazo estipulado será considerada aceitação tácita dos novos Termos.',
        content: [
          'As alterações não retroagirão para negociações já iniciadas antes da data de publicação, as quais permanecerão regidas pela redação anterior dos Termos.',
          'Os serviços da Joblee podem variar conforme a região. Estes Termos serão interpretados e aplicados de acordo com as especificidades da localidade onde o cadastro do Usuário foi efetuado.',
        ],
      },
    ],
  },
  {
    title: 'ACEITE DE ORÇAMENTOS',
    content: [
      'O prestador de serviço terá acesso a solicitação de orçamento sem precisar pagar nada por isso, e será sua responsabilidade enviar os preços ao usuário contratante e fazer a devida negociação dentro da plataforma.',
      'Após o envio do orçamento, o usuário contratante poderá contratar os serviços do prestador de serviços, e o respectivo pagamento será efetuado dentro da plataforma Joblee. Após a realização do serviço, o prestador sinalizará no aplicativo que realizou a atividade, para que a Joblee possa liberar o saldo.',
    ],
  },
  {
    title: 'PRIVACIDADE DA INFORMAÇÃO',
    content: [
      'Todas as informações e dados pessoais fornecidos pelos Usuários são protegidos por rigorosos padrões de segurança. Para obter detalhes sobre o tratamento, armazenamento e proteção de seus dados, consulte a Política de Privacidade da Joblee.',
    ],
  },
  {
    title: 'TARIFAS E PAGAMENTO',
    content: [
      'Os Prestadores de serviços não pagarão para acessar as solicitações de orçamento dos usuários contratantes, ou para o envio de seus orçamentos. A plataforma cobrará uma taxa no valor de R$10,00 por serviço contratado + 10% de taxa administrativa. Em caso de pagamento via cartão de crédito será acrescido uma taxa de 1,99%. Esses custos podem ser acrescentados no orçamento enviado ao contratante.  Para mais detalhes consulte a Política de Pagamentos e Recebimentos da Joblee.',
    ],
  },
  {
    title: 'POLÍTICA DE CANCELAMENTO',
    content: [
      {
        title:
          'O Usuário Contratante poderá exercer seu direito de arrependimento no prazo de até 7 (sete) dias após a contratação, com a devolução integral dos valores pagos, desde que a execução do serviço não tenha sido iniciada. \n\n Fora do prazo de arrependimento, o cancelamento pelo Contratante observará as seguintes regras de reembolso, calculadas sobre o valor total pago, conforme a antecedência em relação ao horário agendado para a execução do serviço',
        content: [
          <>
            <strong>Mais de 24 horas antes</strong> : reembolso integral (100%)
            do valor pago.
          </>,
          <>
            <strong>Entre 24 e 12 horas antes</strong> : reembolso de 90% do
            valor pago, sendo retida uma multa compensatória de 10%.
          </>,
          <>
            <strong>Entre 12 e 6 horas antes</strong> : reembolso de 50% do
            valor pago, sendo os 50% restantes retidos a título de multa
            compensatória.
          </>,
          <>
            <strong>Com menos de 6 horas de antecedência</strong> : não haverá
            reembolso do valor pago.
          </>,
        ],
      },
      'O valor não reembolsado (multa) destina-se à compensação do Prestador de serviço pelo período reservado e não utilizado e à cobertura dos custos operacionais da Plataforma.',
      'Caso o cancelamento ou a ausência (no-show) seja por parte do Prestador de serviço, o Contratante terá direito ao reembolso integral (100%) do valor pago. O incidente será registrado no histórico do Prestador, podendo ensejar advertência, suspensão ou exclusão definitiva da Plataforma.',
    ],
    endElement: (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md text-sm">
        <p>
          Em qualquer hipótese, se o serviço já tiver sido integralmente
          prestado, não caberá cancelamento ou reembolso
        </p>
      </div>
    ),
  },
  {
    title: 'SERVIÇOS E ANÚNCIOS E ORÇAMENTOS PROIBIDOS',
    content: [
      'A Joblee atua exclusivamente como uma plataforma de classificados de Serviços. É estritamente vedada a veiculação de anúncios ou solicitações que envolvam a venda, locação, troca ou transferência de posse e propriedade de bens móveis ou imóveis.',
      'É igualmente proibida a divulgação de serviços que violem a legislação vigente, bem como aqueles considerados ilícitos, nocivos, abusivos ou que infrinjam direitos de terceiros.',
      'A Joblee reserva-se o direito de suspender ou excluir, unilateralmente e independente de prévia notificação, o Usuário que descumprir qualquer das diretrizes estabelecidas nesta seção, sem que isso gere direito a qualquer tipo de indenização.',
    ],
  },
  {
    title: 'SISTEMA DE QUALIFICAÇÃO DOS PRESTADORES',
    content: [
      'Os Anunciantes reconhecem e aceitam submeter-se ao sistema de avaliação e qualificação da Joblee, declarando estar cientes de que as pontuações e comentários são inseridos pelos Usuários Contratantes com base em sua experiência pessoal.',
      'Os Prestadores concordam que a plataforma poderá cancelar, excluir ou suspender por tempo indeterminado cadastros que apresentem qualificações negativas de maneira contínua.',
      'Os usuários entendem que as contas são pessoais e intransferíveis.',
      'Em nenhuma hipótese a Joblee será responsabilizada por indenizações ou ressarcimentos a título de danos morais, materiais ou lucros cessantes decorrentes das qualificações e comentários atribuídos aos serviços. O Prestador reconhece que as avaliações refletem a opinião exclusiva dos Contratantes.',
      'Os Usuários são integral e exclusivamente responsáveis pelas opiniões e comentários publicados na Plataforma, respondendo civil e criminalmente perante a Joblee, demais Usuários, órgãos governamentais ou terceiros. É estritamente proibida a publicação de conteúdos que contenham cunho discriminatório ou preconceituoso relativo à cor, raça, etnia, religião, orientação sexual, gênero ou qualquer outra forma de discriminação. A Joblee isenta-se de qualquer responsabilidade pelo teor de tais mensagens, reservando-se o direito de remover conteúdos ofensivos e banir os infratores imediatamente.',
    ],
  },
  {
    title: 'OBRIGAÇÕES DOS USUÁRIOS',
    content: [
      'O Prestador deve ter capacidade legal para prestar o Serviço.',
      {
        title:
          'Pelo fato de a Joblee não figurar como parte nas transações celebradas entre os Usuários, recai exclusivamente sobre o Contratante e o Anunciante a responsabilidade por todas as obrigações delas decorrentes — sejam fiscais, trabalhistas, consumeristas ou de qualquer outra natureza.',
        content: [
          'Caso a Joblee seja interpelada judicialmente por atos praticados pelo Anunciante, este deverá assumir o polo passivo da ação ou garantir o direito de regresso, arcando com todos os ônus processuais, incluindo taxas, emolumentos, custas, acordos e honorários advocatícios.',
          'A Joblee não possui poder de coerção para obrigar os Usuários ao cumprimento de obrigações contratuais ou à efetivação de negociações iniciadas na Plataforma.',
          'O Anunciante reconhece que, na qualidade de fornecedor, sua oferta é vinculante, conforme o Artigo 30 do Código de Defesa do Consumidor e o Artigo 429 do Código Civil, podendo o seu cumprimento integral ser exigido judicialmente pelo Contratante.',
        ],
      },
    ],
  },
  {
    title: 'PRÁTICAS VEDADAS',
    content: [
      {
        title: ' É terminantemente vedado aos Usuários:',
        content: [
          'Coletar, armazenar, divulgar ou comercializar dados pessoais de outros Usuários para fins ilícitos ou estranhos à finalidade da Plataforma; ',
          'Utilizar ferramentas automatizadas (como spiders, robôs ou crawlers) para extração de dados da Joblee, salvo em indexações de busca pública não comercial;',
          'Burlar, ou tentar fraudar por qualquer meio, os sistemas de segurança e os mecanismos de funcionamento da Plataforma; ',
          'Incluir dados de contato direto, tais como números de telefone, e-mails, endereços residenciais ou links para redes sociais em anúncios, propostas ou perfis. Toda e qualquer comunicação entre Anunciante e Contratante deverá ocorrer exclusivamente por meio do chat oficial da Joblee, sob pena de suspensão imediata da conta.',
        ],
      },
    ],
  },
  {
    title: 'SANÇÕES',
    content: [
      {
        title:
          'Sem prejuízo de outras medidas, a Joblee poderá, a seu exclusivo critério e independente de aviso prévio ou anuência, advertir, suspender ou cancelar — temporária ou definitivamente — o cadastro e as solicitações de qualquer Usuário. A plataforma poderá ainda aplicar sanções que impactem a reputação do perfil e iniciar as ações legais cabíveis, caso o Usuário',
        content: [
          'Descumpra qualquer disposição destes Termos ou das demais políticas da Joblee;',
          'Infrinja seus deveres fundamentais de conduta e ética na plataforma;',
          'Pratique atos ilícitos, delituosos ou criminais;',
          'Forneça dados cuja identidade não possa ser verificada, informações incorretas, falsas ou que pertençam a terceiros;',
          'Adote comportamentos ou publique anúncios que, no entendimento da Joblee, tenham causado dano a terceiros ou à própria Plataforma, ou que possuam potencialidade para tal.',
        ],
      },
      'Em caso de suspensão ou cancelamento do cadastro, todos os anúncios ativos do Usuário serão automaticamente removidos, sem direito a qualquer tipo de ressarcimento.',
    ],
  },
  {
    title: 'RESPONSABILIDADES',
    content: [
      'A Joblee não é responsável por vícios ou defeitos técnicos e/ou operacionais oriundos do sistema do Usuário ou de terceiros.',
      'A Joblee não se responsabiliza pela entrega dos Serviços anunciados pelos Anunciantes na Plataforma.',
      'A Joblee não se responsabiliza pela existência, quantidade, qualidade, integridade ou legitimidade dos serviços ofertados ou contratados entre os Usuários. A Plataforma não garante a capacidade civil dos Usuários, nem a veracidade de seus dados pessoais. Na qualidade de intermediadora, a Joblee não detém a posse ou propriedade dos itens e serviços orçados, não outorgando, portanto, qualquer garantia por vícios ocultos ou aparentes. O Usuário reconhece e aceita ser o único e exclusivo responsável pelos serviços que orça e pelas negociações que formaliza.',
      'Sob nenhuma circunstância a Joblee será responsabilizada por lucros cessantes, perdas e danos ou quaisquer prejuízos sofridos pelo Usuário em decorrência de negociações realizadas, ou frustradas, por meio da Plataforma. A responsabilidade por qualquer dano resultante da conduta de terceiros ou de outros Usuários recai exclusivamente sobre os agentes envolvidos, permanecendo a Joblee isenta de qualquer ônus indenizatório.',
      {
        title:
          'Considerando que as negociações ocorrem em ambiente eletrônico entre partes sem vínculo prévio, a Joblee recomenda que toda transação seja pautada pela cautela e prudência. Para maior segurança, os Usuários devem observar as seguintes diretrizes:',
        content: [
          <>
            <strong>Comunicação:</strong> Utilize exclusivamente o chat oficial
            da Joblee para todas as tratativas e registros.
          </>,
          <>
            <strong>Identificação:</strong> Solicite a apresentação de documento
            de identidade com foto no momento da prestação do serviço.
          </>,
          <>
            <strong>Acompanhamento:</strong> Sempre que possível, o Contratante
            deve estar acompanhado por terceiros ou em locais seguros durante a
            execução do serviço.
          </>,
          <>
            <strong>Pagamentos:</strong> Nunca realize pagamentos antecipados
            diretamente ao prestador por fora da Plataforma.
          </>,
          <>
            <strong>Avaliações:</strong> Verifique sempre o histórico e as
            qualificações de outros usuários antes de fechar o negócio.
          </>,
        ],
      },
    ],
  },
  {
    title: 'ÂMBITO DE APLICAÇÃO',
    content: [
      'Independência das Partes: A aceitação destes Termos não estabelece qualquer relação de sociedade, mandato, franquia, parceria ou vínculo empregatício entre a Joblee e os Usuários. O Usuário reconhece que a Joblee atua apenas como uma plataforma de intermediação, não sendo parte das transações, tampouco exercendo controle sobre a qualidade, segurança, legalidade ou veracidade dos serviços e anúncios.',
      'Fraude no Sistema de Verificação: Qualquer tentativa de burlar ou manipular o sistema de conferência para obter vantagens indevidas resultará na exclusão imediata e definitiva do Usuário da Plataforma, sem prejuízo das medidas judiciais cabíveis, inclusive nas esferas cível e criminal.',
    ],
  },
  {
    title: 'DO USO DO SISTEMA',
    content: [
      'Instabilidades Técnicas: A Joblee não se responsabiliza por danos, prejuízos ou perdas sofridos pelo Usuário em decorrência de falhas na conexão de internet, interrupções em provedores de acesso, falhas no sistema de SMS, redes telefônicas ou servidores de terceiros. A isenção estende-se a casos fortuitos, eventos de força maior ou condutas indevidas de terceiros.',
      'Segurança Digital: A Joblee não será responsabilizada por qualquer dano causado por vírus, cavalos de troia (trojans), malwares, spywares ou softwares maliciosos que possam infectar ou alterar as configurações dos equipamentos do Usuário em decorrência da navegação na internet ou da transferência de arquivos, dados e mídias externos à Plataforma.',
    ],
  },
  {
    title: 'PROPRIEDADE INTELECTUAL',
    content: [
      "A expressão 'JOBLEE', suas marcas, logotipos, nomes empresariais e domínios, bem como o código-fonte, bancos de dados, arquitetura de rede, layouts de tela e toda a propriedade intelectual contida na Plataforma são de titularidade exclusiva da Joblee. Tais ativos estão protegidos pela legislação nacional e tratados internacionais de direitos autorais, marcas, patentes e desenhos industriais. É estritamente proibida a reprodução, modificação ou exploração comercial, total ou parcial, de qualquer conteúdo ou tecnologia da Plataforma sem a prévia e expressa autorização por escrito da Joblee.",
    ],
  },
  {
    title: 'INDENIZAÇÃO POR DESCUMPRIMENTO',
    content: [
      {
        title:
          'O Usuário obriga-se a indenizar e manter indenes a Joblee, suas subsidiárias, afiliadas, sociedades controladoras, diretores, administradores, colaboradores e representantes, face a quaisquer demandas, reclamações ou processos judiciais e administrativos movidos por outros Usuários ou terceiros. Esta obrigação de indenizar abrange, sem limitação, custas processuais, despesas judiciais e honorários advocatícios, decorrentes:',
        content: [
          'das atividades e condutas do Usuário na Plataforma',
          'da inobservância destes Termos de Uso ou demais políticas vigentes',
          'da violação de preceitos legais e direitos de terceiros por parte do Usuário',
        ],
      },
    ],
  },
  {
    title: 'LEGISLAÇÃO APLICÁVEL E FORO',
    content: [
      'Estes Termos de Uso são regidos e interpretados em conformidade com as leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias, dúvidas ou questões decorrentes deste instrumento, as partes elegem, de forma irrevogável e irretratável, o Foro da Comarca de São Paulo/SP, com expressa renúncia a qualquer outro, por mais privilegiado que seja ou venha a ser.',
    ],
  },
  {
    title: 'ACEITE',
    content: [
      "Ao clicar em 'Aceito os Termos' ou utilizar os serviços da plataforma, o Usuário declara ter lido, compreendido e concordado integralmente com todas as disposições aqui estabelecidas. Este documento constitui o acordo vinculante entre a Joblee e o Usuário, produzindo efeitos jurídicos imediatos. O Usuário reconhece que o uso continuado da plataforma após qualquer atualização destes Termos constituirá a aceitação tácita das novas condições.",
    ],
  },
];

const TermsItem = ({
  chapter,
  term,
}: {
  chapter: number;
  term: {
    title: string;
    content: any[];
    endElement?: React.ReactNode;
  };
}) => {
  const EndElement = () => {
    return term.endElement || <></>;
  };

  return (
    <li>
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-sm flex items-center justify-center mr-3 text-sm shrink-0">
          {chapter}
        </span>
        {term.title}
      </h2>
      <ol className="list-[lower-alpha] pl-11 space-y-4 text-gray-600">
        {term.content.map((item, index) => (
          <li key={index} className="list-item">
            {typeof item === 'string' ? (
              <>{item}</>
            ) : (
              <>
                {item.title}
                <ol className="list-[lower-roman] pl-5 space-y-2 mt-3">
                  {item.content.map(
                    (contentItem: any, contentIndex: number) => (
                      <li key={contentIndex} className="text-sm">
                        {contentItem}
                      </li>
                    ),
                  )}
                </ol>
              </>
            )}
          </li>
        ))}
        <EndElement />
      </ol>
    </li>
  );
};

export const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Seo
        title="Termos e Condições de Uso — Joblee"
        description="Leia os Termos e Condições Gerais de Uso da plataforma Joblee."
        path="/terms-and-conditions"
      />
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-12">
        <header className="border-b border-gray-100 pb-8 mb-8">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-900 mb-4 tracking-tight uppercase">
            Termos e Condições Gerais de Uso - JOBLEE
          </h1>
          <p className="text-gray-500 text-sm italic">
            Ao utilizar a plataforma, você concorda com os termos abaixo
            descritos.
          </p>
          <p className="text-gray-500 text-sm italic">
            <strong>Última atualização:</strong> 20 de Junho de 2026
          </p>
        </header>

        <ol className="space-y-10 list-none">
          {termsData.map((term, index) => (
            <TermsItem chapter={index + 1} term={term} />
          ))}
        </ol>
      </div>
    </div>
  );
};
