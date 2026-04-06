"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn, ensureGlobalStyleRule } from "./utils";

const progressRuleCache = new Set<string>();

function getProgressValueClass(value?: number) {
  const normalized = Math.max(0, Math.min(100, Math.round(value ?? 0)));
  const className = `progress-value-${normalized}`;

  if (!progressRuleCache.has(className)) {
    progressRuleCache.add(className);
    ensureGlobalStyleRule(
      `.${className} { transform: translateX(-${100 - normalized}%); }`,
    );
  }

  return className;
}

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const indicatorClass = getProgressValueClass(value);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1 transition-all progress-indicator",
          indicatorClass,
        )}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
