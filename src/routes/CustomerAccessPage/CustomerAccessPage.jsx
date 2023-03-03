import React from "react";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Card } from "flowbite-react";

import TabsRender from "../../components/tabbed";

export function CustomerAccessPage(props) {
  return (
    <PageContainer>
      <InnerPageContainer>
        <Card href="#" className="rounded-xl">
          <TabsRender></TabsRender>
        </Card>
      </InnerPageContainer>
    </PageContainer>
  );
}
