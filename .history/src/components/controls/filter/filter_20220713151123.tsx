
import { Select } from 'antd';
const FilterComponent = () => {
  const { Option } = Select;

  const handleChange = (value: { value: string}) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  return (
    
    <Select onChange={}={} defaultValue={{ value: 'popularity'}} style={{ width: '50%' }} >
      <Option value="relevancy">default</Option>
      <Option value="popularity">by popularity</Option>
      <Option value="publishedAt">by date added</Option>
    </Select>
  );
}
export default FilterComponent