export interface GetServiceByCategory {
  catgories: Category[];
}

export interface Category {
  category: string;
  services: Service[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface GetScheduleByService {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
}
