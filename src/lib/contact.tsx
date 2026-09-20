import type { MouseEvent, ReactNode } from "react";

// Replace both placeholders with the values supplied by Google Ads before publishing.
export const GOOGLE_ADS_CONVERSION_ID = "AW-YOUR_CONVERSION_ID";
export const GOOGLE_ADS_CONVERSION_LABEL = "YOUR_CONVERSION_LABEL";
export const BUSINESS_EMAIL = "reniuszema22@gmail.com";
export const WHATSAPP_NUMBER = "27728423412";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function quoteMessage(productName = "a project") {
  return `Hi, I would like to request a quote for ${productName}.`;
}
export function whatsappQuoteUrl(productName?: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quoteMessage(productName))}`;
}
export function emailQuoteUrl(productName?: string) {
  const subject = `Quote Request - ${productName ?? "Hot Mix Holdings project"}`;
  const body = `Hi,\n\nI would like to request a quote for ${productName ?? "a project"}.\n\nPlease provide more information.\n\nThank you.`;
  return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
};

export function quoteFormEmailUrl(request: QuoteRequest) {
  const subject = `Quote Request - ${request.service}`;
  const body = `Hi Hot Mix Holdings,\n\nI would like to request a quote.\n\nService: ${request.service}\nName: ${request.name}\nPhone: ${request.phone}\nEmail: ${request.email}\nProject location: ${request.location}\n\nProject details:\n${request.details}\n\nThank you.`;
  return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Reports the Ads conversion if gtag is available, but never blocks contact navigation. */
export function reportQuoteConversion(destination: string) {
  let navigated = false;
  const continueToContact = () => {
    if (!navigated) {
      navigated = true;
      window.location.assign(destination);
    }
  };
  if (typeof window.gtag !== "function") {
    continueToContact();
    return;
  }
  try {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      event_callback: continueToContact,
    });
    window.setTimeout(continueToContact, 700);
  } catch {
    continueToContact();
  }
}

type QuoteLinkProps = {
  channel: "whatsapp" | "email";
  productName?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};
export function QuoteLink({ channel, productName, className, children, ...props }: QuoteLinkProps) {
  const destination =
    channel === "whatsapp" ? whatsappQuoteUrl(productName) : emailQuoteUrl(productName);
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    reportQuoteConversion(destination);
  };
  return (
    <a href={destination} onClick={onClick} className={className} {...props}>
      {children}
    </a>
  );
}
