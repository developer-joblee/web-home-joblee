import { useSearchParams, Link } from "react-router-dom";
import { AlertTriangle, Mail, Smartphone } from "lucide-react";
import banner from "@/assets/banner-variant.png";
import { Seo } from "@/components/Seo";
import { CONTACT } from "@/constants/links";

const deletionMailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Solicitação de exclusão de conta")}`;

export const DeleteAccount = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const accountType = type === "client" || type === "professional" ? type : null;

  const getAccountTypeLabel = () => {
    return accountType === "client" ? "Cliente" : "Profissional";
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Seo
        title="Excluir conta — Joblee"
        description="Saiba como solicitar a exclusão da sua conta Joblee de forma rápida e segura."
        path="/delete-account"
        noIndex
      />
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="inline-block">
            <img
              src={banner}
              alt="Joblee logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
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
                {accountType && (
                  <p className="text-red-700 text-sm mt-1">
                    Conta tipo: <span className="font-semibold">{getAccountTypeLabel()}</span>
                  </p>
                )}
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
                Ao excluir sua conta, você perderá acesso a todos os seus dados, histórico e informações associadas à plataforma Joblee.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Como solicitar a exclusão da sua conta:
              </h3>

              {/* Opção 1: pelo app */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">1. Pelo aplicativo (recomendado)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Abra o app da Joblee, acesse a aba <span className="font-semibold">Mais</span> e toque em{" "}
                      <span className="font-semibold">Excluir Conta</span>. Siga as instruções na tela para confirmar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Opção 2: por e-mail */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">2. Por e-mail</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Envie uma solicitação para{" "}
                      <a href={deletionMailto} className="text-blue-600 hover:underline font-medium">
                        {CONTACT.email}
                      </a>{" "}
                      informando o e-mail ou telefone cadastrado na sua conta.
                    </p>
                    <a
                      href={deletionMailto}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Solicitar exclusão por e-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">
                Prazo de exclusão
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Após a solicitação, sua conta e seus dados serão excluídos definitivamente em até{" "}
                <span className="font-semibold">15 dias</span>. Caso mude de ideia durante esse período,
                entre em contato pelo e-mail{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-blue-600 hover:underline font-medium">
                  {CONTACT.email}
                </a>{" "}
                para cancelar o processo.
              </p>
            </div>

            <p className="text-gray-600 text-sm">
              <Link to="/account-deletion" className="text-blue-600 hover:underline font-medium">
                Saiba mais sobre quais dados são removidos e quais são retidos
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Precisa de ajuda? Entre em contato:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
