import { CornerUpLeft } from "lucide-react";
import { FlowBox, FlowArrow } from "./flow-diagram-parts";

export function PlatformArchitectureDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex flex-col gap-1.5">
          <FlowBox label="EHR" sublabel="Cerbo" compact />
          <FlowBox label="CRM" sublabel="GoHighLevel" compact />
          <FlowBox label="Lab Results" compact />
        </div>
        <FlowArrow />
        <FlowBox label="AI Pipeline" sublabel="LangGraph · Claude on Bedrock" accent />
        <FlowArrow />
        <FlowBox label="Treatment Plan" sublabel="Generated draft" />
        <FlowArrow />
        <FlowBox label="Provider Review" sublabel="Approve, edit, or flag" />
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground text-center">
        <CornerUpLeft className="size-3.5 text-primary shrink-0" />
        Clinician corrections feed back into the AI pipeline through the feedback-classification service
      </div>
    </div>
  );
}
