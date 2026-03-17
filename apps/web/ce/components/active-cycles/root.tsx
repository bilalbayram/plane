/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { ContentWrapper } from "@plane/ui";

export function WorkspaceActiveCyclesRoot() {
  return (
    <ContentWrapper>
      <div className="grid h-full place-items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <h3 className="text-lg font-semibold">No active cycles</h3>
          <p className="text-sm text-tertiary">
            Active cycles from all your projects will appear here. Go to a project and start a cycle to see it listed.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
