import { CardGlobalCategories } from "../index";
import { AllServicesData } from "./AllServicesData";

const AllServices = ({ deviceType }) => {
  return (
    <div className="space-y-1">
      <CardGlobalCategories
        deviceType={deviceType}
        propsData={AllServicesData}
        title="all categories"
        isCarousel={true}
      />
      <CardGlobalCategories
        deviceType={deviceType}
        propsData={AllServicesData}
        title="Pack"
        isCarousel={false}
      />
      <CardGlobalCategories
        deviceType={deviceType}
        propsData={AllServicesData}
        title="CAnapé"
        isCarousel={false}
      />

      {/* <CardCategories  deviceType ={ deviceType } propsData={AllServicesData} title="PACK promotionel"/> */}
    </div>
  );
};

export default AllServices;
