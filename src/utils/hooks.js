import useSWR from "swr";
import { fetcher } from "./api";

const useLastMatches = () => {
  const { data, error } = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/last",
    fetcher
  );
  return {
    lastMatches: data,
    isLoadingLastMatches: !data,
    isErrorLastMatches: error,
  };
};

const useNextMatches = () => {
  const { data, error } = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/next",
    fetcher
  );
  return {
    nextMatches: data,
    isLoadingNextMatches: !data,
    isErrorNextMatches: error,
  };
};

export { useLastMatches, useNextMatches };
