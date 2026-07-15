import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Universal Stream" }, { name: "description", content: "The terms governing your use of Universal Stream products and services." }] }),
  component: () => (
    <LegalLayout
      title="Terms & Conditions"
      updated="May 2026"
      sections={[
        { id: "agreement", heading: "Agreement", body: <p>By using Universal Stream products and services you agree to these Terms. If you don't agree, please don't use the services.</p> },
        { id: "accounts", heading: "Accounts", body: <p>You are responsible for activity on your account. Keep your credentials confidential and notify us of unauthorized use.</p> },
        { id: "subscriptions", heading: "Subscriptions", body: <p>Subscriptions auto-renew until canceled. You may cancel anytime in Settings → Billing.</p> },
        { id: "ip", heading: "Intellectual property", body: <p>All software, designs and content are owned by Universal Stream or its licensors and are protected by law.</p> },
        { id: "liability", heading: "Liability", body: <p>To the fullest extent allowed by law, our liability is limited to the amount you paid for the service in the past 12 months.</p> },
        { id: "changes", heading: "Changes", body: <p>We may update these terms. Material changes will be notified via email or in-app at least 30 days in advance.</p> },
      ]}
    />
  ),
});
