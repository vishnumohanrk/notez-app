import { Search } from 'lucide-react';

import { FormInput } from '../shared/form-input';
import { IconButton } from '../shared/icon-button';

export function SearchBar() {
  return (
    <>
      <FormInput
        name="search"
        type="search"
        minLength={3}
        className="px-12"
        autoComplete="off"
        label="Search Notes"
      />
      <IconButton type="submit" title="Search" className="absolute left-0">
        <Search size={20} />
      </IconButton>
    </>
  );
}
