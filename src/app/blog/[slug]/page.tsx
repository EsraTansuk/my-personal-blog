"use client";

import React from "react";
import { BlogDetail } from "@/app/components/header/components/blog-detail";
import { Title } from "@/app/components/header/components/title";
import { useParams, useRouter } from "next/navigation";
import { translator } from "@/utils/translator";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getLanguageState } from "@/app/app/appSelector";

const blogPosts = {
  "tailwind-css-ve-clsx": {
    title: "Tailwind CSS ve clsx: Dinamik Stil Yönetimi İçin Güçlü Bir İkili",
    author: "Esra Tansuk",
    date: "Oct 3, 2024",
    tags: "wordpress, business, economy, design",
    src: "/img/blog-post-1.webp",
    alt: "Blog Post 1",
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Tailwind CSS ve clsx kütüphanesi, modern frontend geliştirme
          süreçlerinde büyük kolaylıklar sağlayan araçlardır. Özellikle dinamik
          stiller oluşturma ve koşullu sınıfları yönetme noktasında bu iki araç
          bir araya geldiğinde projelerde kodun daha temiz, okunabilir ve bakımı
          kolay hale gelmesini sağlar. Bu makalede, Tailwind CSS ile clsx
          kullanarak sınıfların nasıl birleştirileceğini ve bu iki aracın
          avantajlarını ele alacağız.
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          Tailwind CSS Nedir?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Tailwind CSS, utility-first (yardımcı sınıf tabanlı) bir CSS
          framework&apos;üdür. Bu framework, geliştiricilerin projelerinde
          küçük, işlevsel CSS sınıfları kullanarak stil oluşturmasına olanak
          tanır.
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          clsx Nedir?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          clsx, koşullu sınıf adlarını yönetmek için kullanılan hafif bir
          JavaScript kütüphanesidir. Daha önceden kullanılan classnames
          kütüphanesine benzer işlevler sağlar ancak daha küçük ve daha optimize
          bir yapıya sahiptir.
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          Neden Birlikte Kullanmalıyız?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Bu iki aracın sağladığı esneklik sayesinde, tasarım ve stil yönetimini
          çok daha verimli bir şekilde yapabilir, UI bileşenlerinizde esneklik
          sağlayabilirsiniz.
        </p>
      </div>
    ),
  },
  // Diğer blog postları buraya eklenebilir
};

export default function BlogPost() {
  const { slug } = useParams();
  const currentLanguage = useAppSelector(getLanguageState());
  const router = useRouter();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        {translator("BLOG.BACK_TO_BLOG")}
      </button>
      <Title
        titleOne={translator("BLOG")}
        titleTwo={
          currentLanguage?.name === "en-US"
            ? translator("DETAIL")
            : translator("DETAIL")
        }
        titleBackground={translator("BLOG.MY.BLOGPOSTDETAIL")}
        
      />
      <BlogDetail
        title={post.title}
        author={post.author}
        date={post.date}
        tags={post.tags}
        src={post.src}
        alt={post.alt}
      >
        {post.content}
      </BlogDetail>
    </div>
  );
}
