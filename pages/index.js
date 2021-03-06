/* eslint-disable @next/next/no-img-element */
import { useStateContext } from "../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />

      <MediaRow
        title="Featured"
        type="large-v"
        endpoint="discover/movie?primary_release_year=2021"
      />
      <MediaRow
        title="Continue Watching"
        type="small-h"
        endpoint="discover/movie?with_genres=35&primary_release_year=2019"
      />
      <MediaRow
        title="Action"
        type="small-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2021"
      />
      <MediaRow
        title="Comedy"
        type="small-v"
        endpoint="discover/movie?with_genres=35&primary_release_year=2021"
      />
      <MediaRow
        title="Romance"
        type="small-v"
        endpoint="discover/movie?with_genres=10749&primary_release_year=2021"
      />
      <MediaRow
        title="Recently Added"
        type="large-h"
        endpoint="discover/movie?with_genres=35&primary_release_year=2021"
      />
      <MediaRow
        title="Horror"
        type="small-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2021"
      />
      <MediaRow
        title="Sci-fi"
        type="small-v"
        endpoint="discover/movie?with_genres=878&primary_release_year=2021"
      />
      <MediaRow
        title="Drama"
        type="small-v"
        endpoint="discover/movie?with_genres=18&primary_release_year=2021"
      />
      <MediaRow
        title="Music"
        type="small-v"
        endpoint="discover/movie?with_genres=10402&primary_release_year=2021"
      />
      <MediaRow
        title="Crime"
        type="small-v"
        endpoint="discover/movie?with_genres=80&primary_release_year=2021"
      />
    </MainLayout>
  );
}
