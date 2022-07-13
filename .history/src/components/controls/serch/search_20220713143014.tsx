import { Input } from "antd";

const SearchComponent = ({ handleSearch, search }: { handleSearch: any, search: string }) => {
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