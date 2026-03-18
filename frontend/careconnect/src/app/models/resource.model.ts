// TypeScript model that mirrors the Resource object returned by the .NET API.
export interface Resource {
  // Unique identifier for each resource.
  id: number;
  // Resource name shown to users.
  name: string;
  // Description of offered service.
  description: string;
  // Group/category label.
  category: string;
  // Physical address.
  address: string;
  // Primary contact phone.
  phoneNumber: string;
  // External website URL.
  website: string;
  // Human-readable operating hours.
  hoursOfOperation: string;
  // Whether the resource is open 24/7.
  is24Hours: boolean;
}
