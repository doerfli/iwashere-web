interface LocationEntity {
  id: string | null;
  name: string;
  shortname: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  useTableNumber: boolean;
  useSector: boolean;
}

export default LocationEntity;
