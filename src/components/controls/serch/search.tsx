import { Input } from "antd";
import { FC, SyntheticEvent } from "react";

type TProps = {
  handleSearch: (e: SyntheticEvent) => void,
  search: string
}

const SearchComponent: FC<TProps> = ({ handleSearch, search }) => {
  const { Search } = Input;

  return (
    <Search
      style={{ width: '50%' }}
      placeholder="input to search"
      allowClear
      value={search}
      onChange={handleSearch}
    />
  )
}

export default SearchComponent;