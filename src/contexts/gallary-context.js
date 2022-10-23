import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1660132087948-f3f66c91dc0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    isFavourite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    isFavourite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isFavourite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavourite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    isFavourite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    isFavourite: false,
  },
];
const GallaryContext = createContext();
function GallaryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favouriteList, setFavouriteList] = useState([]);

  function toggleFavourite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavourite: !photo.isFavourite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }
  function addToCart(newItem) {
    setCartItems((prevItem) => {
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      if (isExisted) {
        setStoredCart([...prevItem]);
        return [...prevItem];
      }

      setStoredCart([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  }
  function removeFromCart(photoId) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoId);
      setStoredCart(result);
      return result;
    });
  }
  const value = {
    photos,
    cartItems,
    favouriteList,
    setPhotos,
    setCartItems,
    setFavouriteList,
    toggleFavourite,
    addToCart,
    removeFromCart,
  };
  return (
    <GallaryContext.Provider value={value} {...props}></GallaryContext.Provider>
  );
}
function useGallary() {
  const context = useContext(GallaryContext);
  if (typeof context === "undefined")
    throw new Error("useGallary must be used within a AuthProvider");
  return context;
}
export { useGallary, GallaryProvider };
