export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "thePRDguy",
    url: "https://theprdguy.github.io",
    jobTitle: "Product Manager & Builder",
    description:
      "Product Manager & Builder creating digital products and sharing learnings through writing.",
    sameAs: [
      "https://github.com/theprdguy",
      "https://linkedin.com/in/theprdguy",
      "https://medium.com/@theprdguy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
