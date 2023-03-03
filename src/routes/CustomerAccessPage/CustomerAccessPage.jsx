import React from "react";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Tabs, Card } from "flowbite-react";
import { Candidate } from "../../components/candidate";
import { Tabbed } from "../../components/tabbed";

export function CustomerAccessPage(props) {
  return (
    <PageContainer>
      <InnerPageContainer>
        <Card href="#" className="rounded-xl">
          <Tabs.Group>
            <Tabs.Item
              className="w-full rounded-xl"
              title="Upcoming Interviews (17)"
            >
              <Candidate></Candidate>
              <Candidate></Candidate>
            </Tabs.Item>
            <Tabs.Item title="Shorlisted Candidates"></Tabs.Item>
          </Tabs.Group>
        </Card>

        <Tabbed> </Tabbed>
      </InnerPageContainer>
    </PageContainer>
  );
}
