import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy — Universal Stream" }, { name: "description", content: "How Universal Stream uses cookies and similar technologies." }] }),
  component: () => (
    <LegalLayout
      title="Cookie Policy"
      updated="May 2026"
      sections={[
        { id: "what", heading: "What are cookies?", body: <p>Cookies are small text files stored on your device. They help us remember preferences, secure your session and measure performance.</p> },
        { id: "types", heading: "Types we use", body: <p>Strictly necessary, performance, functional and analytics cookies. We do not use advertising cookies.</p> },
        { id: "control", heading: "Your choices", body: <p>You can manage cookies in your browser settings or via our consent banner. Disabling cookies may affect site features.</p> },
        { id: "changes", heading: "Updates", body: <p>We may update this policy periodically. The "Last updated" date above reflects the latest version.</p> },
      ]}
    />
  ),
});
