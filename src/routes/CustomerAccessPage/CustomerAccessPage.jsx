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
            ></Tabs.Item>
            <Tabs.Item title="Shorlisted Candidates">
              <div className="max-w-sm">
                <Card>
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-md">
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                              alt="Neil image"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Neil Sims
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              email@windster.com
                            </p>
                          </div>
                          <div className="inline-flex items-center rounded-full bg-black h-2"></div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                              alt="Bonnie image"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Bonnie Green
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              email@windster.com
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $3467
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Michael image"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Michael Gough
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              email@windster.com
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $67
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                              alt="Lana image"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Lana Byrd
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              email@windster.com
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $367
                          </div>
                        </div>
                      </li>
                      <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                              alt="Thomas image"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              Thomes Lean
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              email@windster.com
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $2367
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </Card>
        <Candidate></Candidate>
        <Tabbed> </Tabbed>
        <h1>hello!</h1>
      </InnerPageContainer>
    </PageContainer>
  );
}
