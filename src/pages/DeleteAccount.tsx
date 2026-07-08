import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AlertTriangle, CheckCircle, Trash2 } from "lucide-react";
import banner from "@/assets/banner-variant.png";
import { Seo } from "@/components/Seo";

export const DeleteAccount = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState<"client" | "professional" | null>(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "client" || type === "professional") {
      setAccountType(type);
    } else {
      // If no valid type is provided, redirect to home
      navigate("/");
    }
  }, [searchParams, navigate]);

  const handleDeleteAccount = async () => {
    setIsLoading(true);

    // Simulate API call - replace with actual API integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsDeleted(true);
  };

  const getAccountTypeLabel = () => {
    return accountType === "client" ? "Cliente" : "Profissional";
  };

  if (!accountType) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Seo
        title="Excluir conta — Joblee"
        description="Solicite a exclusão da sua conta Joblee de forma rápida e segura."
        path="/delete-account"
        noIndex
      />
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="/" className="inline-block">
            <img
              src={banner}
              alt="Joblee logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
          {!isDeleted ? (
            <>
              {/* Header with warning */}
              <div className="bg-red-50 border-b border-red-100 px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 rounded-full p-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-red-900">
                      Excluir Conta
                    </h1>
                    <p className="text-red-700 text-sm mt-1">
                      Conta tipo: <span className="font-semibold">{getAccountTypeLabel()}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-8 space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
                  <h2 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Esta ação é irreversível
                  </h2>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Ao confirmar a exclusão da sua conta, você perderá acesso a todos os seus dados, histórico e informações associadas à plataforma Joblee.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    O que acontecerá após a confirmação:
                  </h3>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Período de 5 dias úteis:</span> Sua conta será excluída definitivamente após 5 dias úteis.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Acesso limitado:</span> Durante este período, você ainda poderá acessar sua conta para visualizar informações.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Restrições aplicadas:</span> {accountType === "client"
                            ? "Você não poderá criar novos pedidos de serviço."
                            : "Você não poderá aceitar novos agendamentos ou solicitações."}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Exclusão permanente:</span> Após os 5 dias úteis, todos os seus dados serão permanentemente removidos de nossos sistemas.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Deseja cancelar a exclusão?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Caso mude de ideia durante o período de 5 dias úteis, você pode entrar em contato conosco através do e-mail{" "}
                    <a
                      href="mailto:joblee@joblee.com.br"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      joblee@joblee.com.br
                    </a>{" "}
                    para cancelar o processo de exclusão.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-gray-50 border-t border-gray-200 px-8 py-6 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={isLoading}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processando...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-5 h-5" />
                      Confirmar Exclusão
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="px-8 py-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 rounded-full p-4">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Solicitação de Exclusão Confirmada
                </h2>

                <div className="max-w-xl mx-auto space-y-6 text-left">
                  <p className="text-gray-700 leading-relaxed">
                    Sua conta foi marcada para exclusão e será removida permanentemente em <span className="font-bold text-gray-900">5 dias úteis</span>.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">
                      O que você pode fazer durante este período:
                    </h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Acessar sua conta normalmente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Visualizar seu histórico e informações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Fazer download dos seus dados</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg">
                    <h3 className="font-semibold text-red-900 mb-3">
                      Restrições aplicadas:
                    </h3>
                    <ul className="space-y-2 text-red-800 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>
                          {accountType === "client"
                            ? "Não é possível criar novos pedidos de serviço"
                            : "Não é possível aceitar novos agendamentos"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Não é possível atualizar informações do perfil</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-5">
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Mudou de ideia?</span> Entre em contato conosco em{" "}
                      <a
                        href="mailto:joblee@joblee.com.br"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        joblee@joblee.com.br
                      </a>{" "}
                      antes do prazo final para cancelar a exclusão.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Voltar para Página Inicial
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Precisa de ajuda? Entre em contato:{" "}
            <a
              href="mailto:joblee@joblee.com.br"
              className="text-blue-600 hover:underline"
            >
              joblee@joblee.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
