
import { Select } from 'antd';
import { useAppDispatch } from '../../../hook/redux-hooks';
import { fetchNewsList } from '../../../store/slices/news-listSlices';
const FilterComponent = () => {
  const { Option } = Select;

  const dispatch=useAppDispatch();

  const handleChange = (value: { value: string}) => {
    console.log(value); 
    dispatch(fetchNewsList(`${value}`))
  };
  
  return (
    
    <Select onChange={handleChange} defaultValue={{ value: 'popularity'}} style={{ width: '50%' }} >
      <Option value="relevancy">default</Option>
      <Option value="popularity">by popularity</Option>
      <Option value="publishedAt">by date added</Option>
    </Select>
  );
}
export default FilterComponent