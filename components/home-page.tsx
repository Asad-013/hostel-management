'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Home, Settings, LogOut, BedDouble, Wrench, MessageSquare, CreditCard } from 'lucide-react'

const Dashboard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Dashboard</CardTitle>
      <CardDescription>Overview of your hostel status</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
            <BedDouble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100</div>
            <p className="text-xs text-muted-foreground">20 available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">5 urgent</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Complaints</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 new today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,500</div>
            <p className="text-xs text-muted-foreground">10 students</p>
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
)

const RoomAllocation = () => (
  <Card>
    <CardHeader>
      <CardTitle>Room Allocation</CardTitle>
      <CardDescription>Manage room assignments</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Room 101</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Occupants: 2/2</p>
              <p>Status: Full</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Room 102</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Occupants: 1/2</p>
              <p>Status: Available</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Room 103</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Occupants: 0/2</p>
              <p>Status: Vacant</p>
            </CardContent>
          </Card>
        </div>
        <Button>Assign Room</Button>
      </div>
    </CardContent>
  </Card>
)

const Maintenance = () => (
  <Card>
    <CardHeader>
      <CardTitle>Maintenance</CardTitle>
      <CardDescription>Track and manage maintenance requests</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Broken Shower - Room 105</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Status: Pending</p>
            <p>Reported: 2 days ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Faulty Light - Room 203</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Status: In Progress</p>
            <p>Reported: 1 week ago</p>
          </CardContent>
        </Card>
        <Button>Add New Request</Button>
      </div>
    </CardContent>
  </Card>
)

const Complaints = () => (
  <Card>
    <CardHeader>
      <CardTitle>Complaints</CardTitle>
      <CardDescription>Handle student complaints</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Noise Complaint - Floor 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Status: Under Investigation</p>
            <p>Reported: Yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Wi-Fi Issues - Room 301</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Status: Resolved</p>
            <p>Reported: 3 days ago</p>
          </CardContent>
        </Card>
        <Button>File New Complaint</Button>
      </div>
    </CardContent>
  </Card>
)

const Payments = () => (
  <Card>
    <CardHeader>
      <CardTitle>Payments</CardTitle>
      <CardDescription>Manage student payments</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">John Doe - Room 201</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Amount Due: $500</p>
            <p>Due Date: 05/15/2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Jane Smith - Room 305</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Amount Due: $0</p>
            <p>Last Payment: 04/30/2023</p>
          </CardContent>
        </Card>
        <Button>Record Payment</Button>
      </div>
    </CardContent>
  </Card>
)

const SettingsComponent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Settings</CardTitle>
      <CardDescription>Adjust your preferences</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <Button variant="outline">Configure</Button>
        </div>
        <div className="flex items-center justify-between">
          <span>Change Password</span>
          <Button variant="outline">Update</Button>
        </div>
        <div className="flex items-center justify-between">
          <span>Language</span>
          <Button variant="outline">Select</Button>
        </div>
      </div>
    </CardContent>
  </Card>
)

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const contentVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function HomePageComponent() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState({ name: 'John Doe', role: 'student' })

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', component: Dashboard },
    { id: 'rooms', label: 'Rooms', component: RoomAllocation },
    { id: 'maintenance', label: 'Maintenance', component: Maintenance },
    { id: 'complaints', label: 'Complaints', component: Complaints },
    { id: 'payments', label: 'Payments', component: Payments },
    { id: 'settings', label: 'Settings', component: SettingsComponent },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Hostel Manager</h1>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-600 cursor-pointer" />
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Welcome, {user.name}</CardTitle>
              <CardDescription>Manage your hostel experience with ease</CardDescription>
            </CardHeader>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex min-w-full sm:min-w-0">
                {tabs.map((tab) => (
                  <motion.div key={tab.id} variants={tabVariants}>
                    <TabsTrigger 
                      value={tab.id} 
                      className="px-4 py-2 text-sm whitespace-nowrap"
                    >
                      {tab.label}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </div>

            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  {tab.component()}
                </TabsContent>
              ))}
            </motion.div>
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}