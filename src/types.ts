export type Language = 'ru' | 'en' | 'uz'

export interface Service {
  id: string
  title: string
  description: string
  price: string
}

export type OrderStatus = 'new' | 'in_progress' | 'done'

export interface Order {
  id: string
  serviceId: string
  serviceTitle: string
  name: string
  contact: string
  message: string
  createdAt: string
  status: OrderStatus
}
