"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { SyncLoader } from "react-spinners";
import ReadMoreButton from "@/components/Buttons/NewsPage/ReadMoreButton";
import SeeMoreNewsButton from "@/components/Buttons/NewsPage/SeeMoreNewsButton";
import { formatDate } from "@/utils/dateUtils";
import Image from "next/image";
import FilterBar from "@/app/(comunicacao)/noticias/_components/FilterBar";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/services/news-service";

function truncateText(text: string): string {
  const maxLength = 100;

  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export default function NewsContent() {
  const [order, setOrder] = useState("desc");
  const {
    data: news = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["news", order],
    queryFn: () => fetchNews(order),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const handleOrderChange = (newOrder: string) => {
    setOrder(newOrder);
    setVisibleCount(9);
  };

  if (isLoading)
    return (
      <div className={styles.loadingState}>
        <SyncLoader color="#226c5f" aria-label="Carregando Notícias" />
      </div>
    );
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <main className={styles.mainContainer}>
      <FilterBar onOrderChange={handleOrderChange} />
      <div className={styles.newsWrapper}>
        {news.slice(0, visibleCount).map((article) => (
          <article key={article.id}>
            <div>
              <Image
                src={`data:image/jpeg;base64,${article.mainImage}`}
                alt="Imagem da notícia"
                width={320}
                height={420}
              />
            </div>
            <h2>{article.title}</h2>
            <p>{truncateText(article.body)}</p>
            <span>{formatDate(article.creationTime)}</span>
            <ReadMoreButton id={article.id} />
          </article>
        ))}
      </div>
      {visibleCount < news.length && <SeeMoreNewsButton onClick={loadMore} />}
    </main>
  );
}
