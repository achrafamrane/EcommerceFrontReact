import {CardCategories} from "../index";
import { AllServicesData } from "./AllServicesData";

const AllServices = ({ deviceType }) => {
    
  return (
    <div className='space-y-2'>
     <CardCategories  deviceType ={ deviceType } propsData={AllServicesData} title="all categories"/>
     <CardCategories  deviceType ={ deviceType } propsData={AllServicesData} title="PACK promotionel"/>
  </div>
  )
}

export default AllServices
