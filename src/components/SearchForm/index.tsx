import { MagnifyingGlass } from "phosphor-react";
import { SearchComponent } from "./styles";

export function SearchForm() {
  return (
    <SearchComponent>
      <input type="text" placeholder="Busque por transações" />

      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchComponent>
  );
}
