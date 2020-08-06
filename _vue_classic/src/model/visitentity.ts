interface VisitEntity {
  id: number;
  guest_name: string;
  guest_email: string | null;
  guest_phone: string | null;
  visitTimestamp: string;
}

export default VisitEntity;
