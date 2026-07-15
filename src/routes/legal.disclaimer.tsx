import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => ({ meta: [{ title: "Disclaimer — Universal Stream" }, { name: "description", content: "Disclaimer for Universal Stream content, services and third-party apps." }] }),
  component: () => (
    <LegalLayout
      title="Disclaimer"
      updated="May 2026"
      sections={[
        { id: "general", heading: "General information", body: <p>The information on this site is provided "as is" for general informational purposes only. We make no warranties of any kind regarding completeness or accuracy.</p> },
        { id: "third-party", heading: "Third-party content", body: <p>Universal Stream devices may surface content from third-party providers. We are not responsible for that content, its availability, or any subscription terms set by those providers.</p> },
        { id: "external", heading: "External links", body: <p>Links to external sites are provided for convenience. We don't endorse the content or practices of external sites.</p> },
        { id: "professional", heading: "No professional advice", body: <p>Nothing on this site constitutes legal, financial or professional advice.</p> },
      ]}
    />
  ),
});
