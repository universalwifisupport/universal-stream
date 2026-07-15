import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Universal Stream" }, { name: "description", content: "How Universal Stream collects, uses and protects your data." }] }),
  component: () => (
    <LegalLayout
      title="Privacy Policy"
      updated="May 2026"
      sections={[
        { id: "overview", heading: "Overview", body: <p>We respect your privacy and are committed to protecting your personal information. This policy describes what we collect, how we use it and the choices you have.</p> },
        { id: "data", heading: "Data we collect", body: <p>Account details (name, email), device identifiers, viewing activity within Universal Stream apps, and diagnostic logs needed to operate our services.</p> },
        { id: "use", heading: "How we use your data", body: <p>To deliver and improve our services, personalize recommendations, prevent fraud, comply with the law and communicate with you about your account.</p> },
        { id: "sharing", heading: "Sharing", body: <p>We do not sell your viewing history. We share data only with vetted processors under strict contracts, and where required by law.</p> },
        { id: "rights", heading: "Your rights", body: <p>You may access, export or delete your data at any time from Settings → Privacy, or by emailing privacy@heavencast.com.</p> },
        { id: "contact", heading: "Contact", body: <p>Questions? Reach our DPO at privacy@heavencast.com.</p> },
      ]}
    />
  ),
});
