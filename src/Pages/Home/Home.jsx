import AdBanners from "../../Components/AdBanners/AdBanners";
import Banner from "../../Components/Banner/Banner";
import BestSellingProducts from "../../Components/BestSellingProducts/BestSellingProducts";
import Category from "../../Components/Category/Category";
import DiscountBanner from "../../Components/DiscountBanner/DiscountBanner";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import JustArrived from "../../Components/JustArrived/JustArrived";
import MostPopularProducts from "../../Components/MostPopularProducts/MostPopularProducts";
import RecentBlog from "../../Components/RecentBlog/RecentBlog";

export default function Home() {
  return (
    <>
      <Banner/>
      <Category/>
      <BestSellingProducts/>
      <AdBanners/>
      <FeaturedProducts/>
      <DiscountBanner/>
      <MostPopularProducts/>
      <JustArrived/>
      <RecentBlog/>
      <DownloadApp/>
    </>
  )
}
