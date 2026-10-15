"use client"

import {
  OrganizationSwitcher,
  OrganizationList,
  CreateOrganization,
  OrganizationProfile,
} from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChooseOrganizationPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Choose Organization</h1>
          <p className="mt-2 text-muted-foreground">
            Select an organization or create a new one
          </p>
        </div>

        {/* Main Content - Tabs for different organization views */}
        <Tabs defaultValue="switcher" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="switcher" className="flex-1">
              Organization Switcher
            </TabsTrigger>
            <TabsTrigger value="list" className="flex-1">
              My Organizations
            </TabsTrigger>
            <TabsTrigger value="create" className="flex-1">
              Create New
            </TabsTrigger>
          </TabsList>

          {/* Organization Switcher Tab */}
          <TabsContent value="switcher" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Switch</CardTitle>
              </CardHeader>
              <CardContent>
                <OrganizationSwitcher />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Organization List Tab */}
          <TabsContent value="list" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Your Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <OrganizationList />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create Organization Tab */}
          <TabsContent value="create" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <CreateOrganization />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Organization Profile Section (shows when org is selected) */}
        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Organization Details</h2>
          <Card>
            <CardContent className="pt-0">
              <OrganizationProfile />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}