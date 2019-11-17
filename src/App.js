import './App.css';
import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as arrData from "../src/data/arr.json";
import mapStyles from "./mapStyles";

function Map() {
  const [selectedArr, setSelectedArr] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedArr(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 48.856613, lng: 2.352222 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {arrData.features.map(arr => (
        <Marker
          key={arr.properties.ARR_ID}
          position={{
            lat: arr.geometry.coordinates[0],
            lng: arr.geometry.coordinates[1]
          }}
          onClick={() => {
            setSelectedArr(arr);
          }}
          icon={{
            url: `/placeholder.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

      {selectedArr && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedArr(null);
          }}
          position={{
            lat: selectedArr.geometry.coordinates[0],
            lng: selectedArr.geometry.coordinates[1]
          }}
        >
          <div>
            <h2>{selectedArr.properties.NAME}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}




// import mapStyles from "./mapStyles";
// const initialState = [{
//   id: 0,
//   name: 'product 1',
//   quantity: 0,
// },{
//   id: 1,
//   name: 'product 2',
//   quantity: 0,
// }]

// function products(state = initialState, action) {
//   if (action.type == 'ADD_TO_CART') {
//     state [action.index].quantity += 1
//     return state
//   }
//   return state
// }

// const store = Redux.createStore(
//   Redux.combineReducers({
//     products
//   })
// )

// function Product(props) {
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <p>Quantity: {props.quantity}</p>
//       <button onClick={() => store.dispatch({
//         type:'ADD_TO_CART',
//         index: props.id
//       })}>Add to cart</button>
//     </div>
//   )
// }

// function Header(){
//   return(
//     <div>Products in cart: 0</div>
//   )
// }


// function App() {
//   return (
//     <div>
//       <Header />
//       {
//         store.getState().products.map ((product) => (
//           <Product 
//             name={product.name}
//             quantity={product.quantity}
//             id={product.id}
//           />
//         ))
//       }
//     </div>
//   );
// }
// store.subscribe(function() {

// })
function Comparison() {
  return (
    <div className="comparison-container">
      <h2>Comparer</h2>
      <div className="comparison-filter">Hébergement</div>
      <div className="comparison-filter">Restauration</div>
      <div className="comparison-filter">Déplacement</div>
    </div>
  )
}

function JourneyDuration() {
  return (
    <div className="journey-duration-container">
      <h2>Durée du séjour</h2>
      <select className="duration-selector">
        <option>1 semaine</option>
        <option>2 semaine</option>
        <option>3 semaine</option>
        <option>1 mois</option>
        <option>2 mois</option>
      </select>
    </div>
  )
}
function LogoText() {
  return (
    <div className="logo-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices lorem lorem, nec mollis nisl faucibus nec. Donec mauris tortor.</p>
    </div>
  )
}
function Logo() {
  return (
    <div className="logo-container">
      <svg width="136" height="36" viewBox="0 0 136 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#919191" />
        <path d="M54.28 17.736H56.896C57.712 17.736 58.36 17.52 58.84 17.088C59.32 16.64 59.56 16.048 59.56 15.312C59.56 14.56 59.32 13.968 58.84 13.536C58.376 13.088 57.728 12.864 56.896 12.864H54.28V17.736ZM57.304 20.592H54.256V27H50.944V9.984H57.304C58.968 9.984 60.312 10.48 61.336 11.472C62.376 12.464 62.896 13.736 62.896 15.288C62.896 16.84 62.376 18.112 61.336 19.104C60.312 20.096 58.968 20.592 57.304 20.592ZM64.1168 23.784C64.1168 22.776 64.4448 21.968 65.1008 21.36C65.7568 20.752 66.6048 20.368 67.6448 20.208L70.5488 19.776C71.1408 19.696 71.4368 19.416 71.4368 18.936C71.4368 18.488 71.2608 18.12 70.9088 17.832C70.5728 17.544 70.0848 17.4 69.4448 17.4C68.7728 17.4 68.2368 17.584 67.8368 17.952C67.4528 18.32 67.2368 18.776 67.1888 19.32L64.3568 18.72C64.4688 17.696 64.9728 16.792 65.8688 16.008C66.7648 15.224 67.9488 14.832 69.4208 14.832C71.1808 14.832 72.4768 15.256 73.3088 16.104C74.1408 16.936 74.5568 18.008 74.5568 19.32V25.128C74.5568 25.832 74.6048 26.456 74.7008 27H71.7728C71.6928 26.648 71.6528 26.176 71.6528 25.584C70.9008 26.752 69.7408 27.336 68.1728 27.336C66.9568 27.336 65.9728 26.984 65.2208 26.28C64.4848 25.576 64.1168 24.744 64.1168 23.784ZM68.8448 24.96C69.5968 24.96 70.2128 24.752 70.6928 24.336C71.1888 23.904 71.4368 23.2 71.4368 22.224V21.696L68.7728 22.104C67.7968 22.248 67.3088 22.744 67.3088 23.592C67.3088 23.976 67.4448 24.304 67.7168 24.576C67.9888 24.832 68.3648 24.96 68.8448 24.96ZM84.9743 15.144V18.36C84.6543 18.296 84.3343 18.264 84.0143 18.264C83.1023 18.264 82.3663 18.528 81.8063 19.056C81.2463 19.568 80.9663 20.416 80.9663 21.6V27H77.7743V15.192H80.8703V16.944C81.4463 15.712 82.5663 15.096 84.2303 15.096C84.4063 15.096 84.6543 15.112 84.9743 15.144ZM90.4116 27H87.2196V15.192H90.4116V27ZM86.8356 11.328C86.8356 10.784 87.0276 10.32 87.4116 9.936C87.7956 9.536 88.2596 9.336 88.8036 9.336C89.3476 9.336 89.8116 9.528 90.1956 9.912C90.5796 10.296 90.7716 10.768 90.7716 11.328C90.7716 11.856 90.5796 12.312 90.1956 12.696C89.8116 13.08 89.3476 13.272 88.8036 13.272C88.2596 13.272 87.7956 13.08 87.4116 12.696C87.0276 12.312 86.8356 11.856 86.8356 11.328ZM92.821 23.712L95.557 23.112C95.589 23.624 95.789 24.056 96.157 24.408C96.541 24.744 97.061 24.912 97.717 24.912C98.213 24.912 98.597 24.8 98.869 24.576C99.141 24.352 99.277 24.072 99.277 23.736C99.277 23.144 98.853 22.76 98.005 22.584L96.445 22.224C95.341 21.984 94.509 21.552 93.949 20.928C93.405 20.304 93.133 19.56 93.133 18.696C93.133 17.624 93.549 16.712 94.381 15.96C95.229 15.208 96.285 14.832 97.549 14.832C98.349 14.832 99.053 14.952 99.661 15.192C100.269 15.416 100.741 15.712 101.077 16.08C101.413 16.432 101.669 16.792 101.845 17.16C102.021 17.528 102.133 17.888 102.181 18.24L99.517 18.84C99.453 18.424 99.261 18.056 98.941 17.736C98.637 17.416 98.181 17.256 97.573 17.256C97.157 17.256 96.797 17.368 96.493 17.592C96.205 17.816 96.061 18.096 96.061 18.432C96.061 19.008 96.421 19.36 97.141 19.488L98.821 19.848C99.957 20.088 100.821 20.528 101.413 21.168C102.021 21.808 102.325 22.576 102.325 23.472C102.325 24.528 101.925 25.44 101.125 26.208C100.325 26.976 99.197 27.36 97.741 27.36C96.909 27.36 96.165 27.24 95.509 27C94.853 26.744 94.341 26.424 93.973 26.04C93.621 25.64 93.349 25.248 93.157 24.864C92.981 24.464 92.869 24.08 92.821 23.712Z" fill="#2364AA" />
        <path d="M120.54 27H117.852L117.636 25.056C117.204 25.712 116.556 26.264 115.692 26.712C114.844 27.144 113.82 27.36 112.62 27.36C110.252 27.36 108.244 26.552 106.596 24.936C104.948 23.32 104.124 21.176 104.124 18.504C104.124 15.848 104.972 13.704 106.668 12.072C108.38 10.44 110.436 9.624 112.836 9.624C114.916 9.624 116.612 10.128 117.924 11.136C119.252 12.144 120.148 13.384 120.612 14.856L117.444 15.984C117.188 15.104 116.668 14.344 115.884 13.704C115.116 13.048 114.1 12.72 112.836 12.72C111.396 12.72 110.14 13.216 109.068 14.208C108.012 15.2 107.484 16.632 107.484 18.504C107.484 20.344 107.996 21.776 109.02 22.8C110.06 23.824 111.34 24.336 112.86 24.336C114.268 24.336 115.348 23.984 116.1 23.28C116.852 22.56 117.292 21.808 117.42 21.024H112.044V18.144H120.54V27ZM126.81 23.568C127.402 24.16 128.114 24.456 128.946 24.456C129.778 24.456 130.482 24.16 131.058 23.568C131.65 22.976 131.946 22.152 131.946 21.096C131.946 20.04 131.65 19.216 131.058 18.624C130.482 18.032 129.778 17.736 128.946 17.736C128.114 17.736 127.402 18.032 126.81 18.624C126.234 19.216 125.946 20.04 125.946 21.096C125.946 22.152 126.234 22.976 126.81 23.568ZM124.506 16.608C125.69 15.424 127.17 14.832 128.946 14.832C130.722 14.832 132.194 15.424 133.362 16.608C134.546 17.792 135.138 19.288 135.138 21.096C135.138 22.904 134.546 24.4 133.362 25.584C132.194 26.768 130.722 27.36 128.946 27.36C127.17 27.36 125.69 26.768 124.506 25.584C123.338 24.4 122.754 22.904 122.754 21.096C122.754 19.288 123.338 17.792 124.506 16.608Z" fill="#3DA5D9" />
      </svg>

    </div>
  )
}
function Navigation() {
  return (
    <div className="nav-container">
      <Logo />
      <LogoText />
      <JourneyDuration />
      <Comparison />
    </div>
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="map-container">
          <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCH7anqaqx11AqSPHR1rzBACnVHzhbsJl4`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
  );
}

