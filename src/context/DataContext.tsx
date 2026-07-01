import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Order, OrderStatus, Service } from '../types'
import { defaultServices } from '../data/defaultServices'

const SERVICES_KEY = 'zafarbek_services'
const ORDERS_KEY = 'zafarbek_orders'

interface DataContextValue {
  services: Service[]
  orders: Order[]
  addService: (service: Omit<Service, 'id'>) => void
  updateService: (id: string, service: Omit<Service, 'id'>) => void
  deleteService: (id: string) => void
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => string
  updateOrderStatus: (id: string, status: OrderStatus) => void
  clearOrders: () => void
}

const DataContext = createContext<DataContextValue | null>(null)

function loadServices(): Service[] {
  try {
    const raw = localStorage.getItem(SERVICES_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // ignore corrupted storage, fall back to defaults
  }
  return defaultServices
}

function loadOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // ignore corrupted storage
  }
  return []
}

function generateId(prefix: string): string {
  const year = new Date().getFullYear()
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}-${year}-${rand}`
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>(loadServices)
  const [orders, setOrders] = useState<Order[]>(loadOrders)

  useEffect(() => {
    try {
      localStorage.setItem(SERVICES_KEY, JSON.stringify(services))
    } catch {
      // storage unavailable — data still lives in memory for this session
    }
  }, [services])

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
    } catch {
      // storage unavailable — data still lives in memory for this session
    }
  }, [orders])

  const addService: DataContextValue['addService'] = (service) => {
    setServices((prev) => [...prev, { ...service, id: generateId('svc') }])
  }

  const updateService: DataContextValue['updateService'] = (id, service) => {
    setServices((prev) => prev.map((item) => (item.id === id ? { ...service, id } : item)))
  }

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((item) => item.id !== id))
  }

  const addOrder: DataContextValue['addOrder'] = (order) => {
    const id = generateId('NODE')
    setOrders((prev) => [{ ...order, id, createdAt: new Date().toISOString(), status: 'new' }, ...prev])
    return id
  }

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, status } : order)))
  }

  const clearOrders = () => setOrders([])

  return (
    <DataContext.Provider
      value={{ services, orders, addService, updateService, deleteService, addOrder, updateOrderStatus, clearOrders }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
