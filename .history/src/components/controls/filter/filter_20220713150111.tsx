
import { Select } from 'antd';
const FilterComponent=()=>{
  const { Option } = Select;
  return (
    <Select defaultValue="lucy" style={{ width: '50%' }} >
    <Option value="jack">Jack</Option>
    <Option value="lucy">
by popularity</Option>
    <Option value="Yiminghe">yiminghe</Option>
  </Select>
  );
}
export default FilterComponent