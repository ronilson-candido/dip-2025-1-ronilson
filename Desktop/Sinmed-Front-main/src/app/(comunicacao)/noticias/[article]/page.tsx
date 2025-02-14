import { fetchNewsBySlug } from "@/services/news-service";
import { NewsItem } from "@/app/types/news-type";
import styles from "./styles.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { formatDate } from "@/utils/dateUtils";
import { Metadata, ResolvingMetadata } from "next";

interface ArticleDetailsProps {
  params: Promise<{ article: string }>;
}

export async function generateMetadata(
  { params }: ArticleDetailsProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const title = resolvedParams.article;
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notices/${title}`
  ).then((res) => res.json());

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const notices = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notices`
  ).then((res) => res.json());

  return notices.content.map((notice: NewsItem) => ({
    article: notice.id,
  }));
}

export default async function ArticleDetails({ params }: ArticleDetailsProps) {
  const resolvedParams = await params;
  const { article } = resolvedParams;
  const newsItem = await fetchNewsBySlug(article);

  if (!newsItem) {
    return (
      <main className={styles.notFoundContainer}>
        <Header />
        <div className={styles.notFoundContent}>
          <Image
            src="/images/404-medic.png"
            alt="Página não encontrada"
            width={529}
            height={353}
          />
          <h1>Notícia não encontrada!</h1>
          <p>Não foi possível carregar essa notícia.</p>
          <Link href="/noticias">Clique aqui para ser redirecionado</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.mainArticle}>
      <Header />
      <article>
        <h1>{newsItem.title}</h1>
        <span>{formatDate(newsItem.creationTime)}</span>
        <div>
          <Image
            src={`data:image/jpeg;base64,${newsItem.mainImage}`}
            alt="Imagem"
            width={936}
            height={570}
          />
        </div>
        <p>{newsItem.body}</p>
        <h2>Imagens Relacionadas</h2>
        <section className={styles.secondaryImgs}>
          {newsItem.asideImages.map((image, index) => (
            <div key={index}>
              <Image
                src={`data:image/jpeg;base64,${image}`}
                alt="Imagem secundária"
                width={210}
                height={150}
              />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
