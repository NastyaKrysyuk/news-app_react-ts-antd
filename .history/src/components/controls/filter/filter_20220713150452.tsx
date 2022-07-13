
import { Select } from 'antd';
const FilterComponent = () => {
  const { Option } = Select;
  return (
    
    <Select defaultValue="popularity" style={{ width: '50%' }} >
      <Option value="relevancy">default</Option>
      <Option value="popularity">by popularity</Option>
      <Option value="publishedAt">by date added</Option>
    </Select>
  );
}
export default FilterComponent