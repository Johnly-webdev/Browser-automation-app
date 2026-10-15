"use client"

import { UserButton, OrganizationSwitcher } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
          <p className="mt-2 text-muted-foreground">
            Your Clerk + Next.js application with Organizations
          </p>
        </div>

        {/* User & Organization Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Account & Organization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>User Profile</span>
              <UserButton />
            </div>
            <div className="flex items-center justify-between">
              <span>Quick Organization Switch</span>
              <OrganizationSwitcher />
            </div>
          </CardContent>
        </Card>

        {/* Navigation to Choose Organization Page */}
        <Card>
          <CardHeader>
            <CardTitle>Organization Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/choose-organization">
              <Button className="w-full" size="lg">
                Choose Organization
              </Button>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              View all organizations, create new ones, and manage organization settings
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}