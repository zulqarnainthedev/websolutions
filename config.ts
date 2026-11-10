export const siteConfig = {
  name: "Digital Studio",
  tagline: "Transforming Ideas Into Digital Experiences.",
  whatsapp: "917983757174",
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const generalMessage = "Hello! I visited your website and would like to know more about your web development services.";
