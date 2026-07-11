import { FlowBox, FlowArrow } from "./flow-diagram-parts";

export interface SimpleFlowNode {
  label: string;
  sublabel?: string;
  accent?: boolean;
}

export function SimpleFlowDiagram({
  nodes,
  caption,
}: {
  nodes: SimpleFlowNode[];
  caption?: string;
}) {
  return (
    <div className="my-6 rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-2.5">
            {i > 0 ? <FlowArrow /> : null}
            <FlowBox label={node.label} sublabel={node.sublabel} accent={node.accent} compact />
          </div>
        ))}
      </div>
      {caption ? (
        <p className="mt-4 text-xs text-muted-foreground text-center">{caption}</p>
      ) : null}
    </div>
  );
}
