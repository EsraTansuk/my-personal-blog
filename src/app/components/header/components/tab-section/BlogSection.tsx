"use client";

import React from "react";
import { BlogItem } from "../blog-item";
import { Title } from "../title";
import { useAppSelector } from "@/hooks";
import { getLanguageState } from "@/app/app/appSelector";
import { translator } from "@/utils/translator";

export const BlogSection = () => {
  const currentLanguage = useAppSelector(getLanguageState());

  return (
    <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
      <div className="w-full lg:max-w-7xl">
        <Title
          titleOne={translator("BLOG.MY.BLOG")}
          titleTwo={
            currentLanguage?.name === "en-US"
              ? translator("BLOG.BLOG")
              : undefined
          }
          titleBackground={translator("BLOG.POSTS")}
        />
        <div className="w-full mb-20 lg:mb-14">
          <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-auto">
            <BlogItem
              src="/img/blog-post-1.webp"
              alt="Blog Post 1"
              title="Tailwind CSS ve clsx: Dinamik Stil Yönetimi İçin Güçlü Bir İkili"
              text="Tailwind CSS ve clsx kütüphanesi, modern frontend geliştirme süreçlerinde büyük kolaylıklar sağlayan araçlardır. Özellikle dinamik stiller oluşturma ve koşullu sınıfları yönetme noktasında bu iki araç bir araya geldiğinde projelerde kodun daha temiz, okunabilir ve bakımı kolay hale gelmesini sağlar. Bu makalede, Tailwind CSS ile clsx kullanarak sınıfların nasıl birleştirileceğini ve bu iki aracın avantajlarını ele alacağız."
              slug="tailwind-css-ve-clsx"
            />

            <BlogItem
              src="/img/blog-post-2.webp"
              alt="Blog Post 2"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
              slug="lorem-ipsum-2"
            />

            <BlogItem
              src="/img/blog-post-3.webp"
              alt="Blog Post 3"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
              slug="lorem-ipsum-3"
            />

            <BlogItem
              src="/img/blog-post-4.webp"
              alt="Blog Post 4"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
              slug="lorem-ipsum-4"
            />

            <BlogItem
              src="/img/blog-post-5.webp"
              alt="Blog Post 5"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
              slug="lorem-ipsum-5"
            />

            <BlogItem
              src="/img/blog-post-6.webp"
              alt="Blog Post 6"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
              slug="lorem-ipsum-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
