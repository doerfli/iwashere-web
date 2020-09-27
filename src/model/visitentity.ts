interface VisitEntity {
  id: number;
  guest_name: string;
  guest_email: string | null;
  guest_phone: string | null;
  guest_street: string | null;
  guest_zip: string | null;
  guest_city: string | null;
  guest_country: string | null;
  visitTimestamp: string;
  verifiedEmail: boolean;
  verifiedPhone: boolean;
  tableNumber: string;
  sector: string;
}

export default VisitEntity;
