import { Switch } from 'antd';
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
function index() {
  return (
    <div className="index">
      首页
			<Switch defaultChecked onChange={onChange} />
    </div>
  )
}
export default index