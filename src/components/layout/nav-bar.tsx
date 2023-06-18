import { Suspense } from 'react';

import { NavList } from './nav-list';
import { SearchBar } from './search-bar';
import { SearchForm } from './search-form';
import { UserProfile } from './user-profile';

export function NavBar() {
  return (
    <aside className="px-4">
      <SearchForm>
        <SearchBar />
        <Suspense>
          <UserProfile />
        </Suspense>
      </SearchForm>
      <nav>
        <Suspense>
          <NavList />
        </Suspense>
      </nav>
    </aside>
  );
}
