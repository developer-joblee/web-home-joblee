import { Helmet } from "react-helmet-async";

const SITE_URL = "https://joblee.com.br";
const DEFAULT_IMAGE = `${SITE_URL}/joblee.png`;

type Props = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
};

export const Seo = ({ title, description, path, noIndex = false, image = DEFAULT_IMAGE }: Props) => {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Joblee" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
