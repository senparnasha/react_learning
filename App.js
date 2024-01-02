import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.jpg";
import biriyani from "./biriyani.png"

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />;
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const resObj={
  info: {
    id: "39309",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Kasba",
    areaName: "Kasba RB Connector",
    costForTwo: "₹450 for two",
    cuisines: [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    avgRating: 4.4,
    parentId: "547",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "27 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2023-12-29 02:59:00",
      opened: true
    },
    badges: {
      
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    aggregatedDiscountInfoV3: {
      header: "EVERY ITEM",
      subHeader: "@ ₹179"
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    reviewsSummary: {
      
    },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  analytics: {
    
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-kasba-kasba-rb-connector-kolkata-39309",
    type: "WEBLINK"
  }
}


const RestroCard = (props) => {
  const restroData=props
  console.log(restroData?.restroData?.info)
  return (
    <div className="res-card">
        <img className="card-image" alt="res-card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"+ restroData?.restroData?.info?. cloudinaryImageId}/>
      <div className="title">{restroData?.restroData?.info?.name}</div>
     
      <div className="sub-title">{restroData?.restroData?.info?.avgRating}
      <span style={{marginLeft:"5px"}}>.{restroData?.restroData?.info?.sla?.slaString}</span></div>
      <div>{restroData?.restroData?.info?.cuisines.join(", ")}</div>
      <div >{restroData?.restroData?.info?. locality}</div>
      <div >{restroData?.restroData?.info?. areaName}</div>



    </div>
  );
};

const MainBody = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        <RestroCard restroData={resObj}/>
       

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
     <MainBody/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
