
import { Select } from 'antd';
const FilterComponent = () => {
  const { Option } = Select;
  return (
    <Select defaultValue="lucy" style={{ width: '50%' }} >
      <Option value="jack">Jack</Option>
      <Option value="by popularity">by popularity</Option>
      <Option value="by date added">by date added</Option>
    </Select>
  );
}
export default FilterComponent