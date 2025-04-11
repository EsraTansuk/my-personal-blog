"use client";

import React from "react";
import { BlogItem } from "../blog-item";
import { BlogDetail } from "../blog-detail";
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
          <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-auto">
            <BlogItem
              src="/img/blog-post-1.webp"
              alt="Blog Post 1"
              title="Tailwind CSS ve clsx: Dinamik Stil Yönetimi İçin Güçlü Bir İkili"
              text="Tailwind CSS ve clsx kütüphanesi, modern frontend geliştirme süreçlerinde büyük kolaylıklar sağlayan araçlardır. Özellikle dinamik stiller oluşturma ve koşullu sınıfları yönetme noktasında bu iki araç bir araya geldiğinde projelerde kodun daha temiz, okunabilir ve bakımı kolay hale gelmesini sağlar. Bu makalede, Tailwind CSS ile clsx kullanarak sınıfların nasıl birleştirileceğini ve bu iki aracın avantajlarını ele alacağız."
            >
              <div className="pb-6 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                <article>
                  <Title
                    titleOne="POST"
                    titleTwo="DETAILS"
                    titleBackground="POSTS"
                    pySmall
                  />
                </article>
                <BlogDetail
                  src="/img/blog-post-1.webp"
                  alt="Blog Post 1"
                  author="Esra Tansuk"
                  date="Oct 3, 2024"
                  tags="wordpress, business, economy, design"
                  title="Tailwind CSS ve clsx: Dinamik Stil Yönetimi İçin Güçlü Bir İkili"
                >
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Tailwind CSS ve clsx kütüphanesi, modern frontend geliştirme süreçlerinde büyük kolaylıklar sağlayan araçlardır. Özellikle dinamik stiller oluşturma ve koşullu sınıfları yönetme noktasında bu iki araç bir araya geldiğinde projelerde kodun daha temiz, okunabilir ve bakımı kolay hale gelmesini sağlar. Bu makalede, Tailwind CSS ile clsx kullanarak sınıfların nasıl birleştirileceğini ve bu iki aracın avantajlarını ele alacağız.
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Tailwind CSS Nedir?</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Tailwind CSS, utility-first (yardımcı sınıf tabanlı) bir CSS framework&apos;üdür. Bu framework, geliştiricilerin projelerinde küçük, işlevsel CSS sınıfları kullanarak stil oluşturmasına olanak tanır. Örneğin:
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Bu tarz utility sınıflar sayesinde hızlıca stil uygulanabilir ve klasik CSS&apos;e kıyasla daha modüler, bileşen bazlı bir yaklaşım sunar.
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">clsx Nedir?</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      clsx, koşullu sınıf adlarını yönetmek için kullanılan hafif bir JavaScript kütüphanesidir. Daha önceden kullanılan classnames kütüphanesine benzer işlevler sağlar ancak daha küçük ve daha optimize bir yapıya sahiptir. clsx sayesinde bir bileşende kullanılacak olan CSS sınıflarını dinamik olarak oluşturabilir, koşullara göre farklı stiller ekleyebilirsiniz.
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Neden clsx ve Tailwind CSS&apos;i Birlikte Kullanmalıyız?</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Tailwind CSS&apos;in utility sınıfları, stil yönetimini oldukça kolaylaştırsa da, bazen dinamik olarak birden fazla sınıfı bir araya getirme ihtiyacı doğar. Özellikle durum tabanlı stil değişiklikleri veya bileşenlerde aktif/pasif durum yönetimi gibi durumlar için dinamik sınıf atamaları önem kazanır. İşte burada clsx, Tailwind CSS ile mükemmel bir uyum sağlar.
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">clsx Kullanarak Tailwind Sınıflarını Birleştirme</h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Bir projede koşullu olarak Tailwind sınıflarını birleştirmek için clsx kullanılabilir. Örnek bir senaryo ele alalım: Bir buton bileşeninde butonun aktif olup olmadığına göre farklı stiller eklemek isteyebilirsiniz.
                    </p>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Örnek 1: Basit Kullanım</h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Bu örnekte, clsx koşullu olarak bg-green-500 veya bg-gray-500 sınıflarını butonun durumuna göre ekler. Böylece, isActive durumu true olduğunda buton yeşil arka plana sahip olurken, false olduğunda gri arka plana sahip olacaktır.
                    </p>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Örnek 2: Dinamik Sınıflar ve Tailwind ile Daha Karmaşık Yapılar</h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      Daha karmaşık projelerde, birden fazla koşula dayalı sınıflar kullanmak gerekebilir. clsx ile bu tarz karmaşık durumlar da kolayca yönetilebilir.
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">clsx ile Tailwind Sınıflarını Daha Etkili Kullanma Yöntemleri</h2>
                    <ul className="space-y-4 ml-6">
                      <li className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold text-gray-900 dark:text-white">Dinamik Sınıf Yönetimi:</strong> clsx, Tailwind sınıflarını dinamik olarak ekleyip çıkarmak için idealdir. Bileşenlerde duruma göre farklı stiller kullanmak gerektiğinde, JSX içerisine manuel olarak uzun if yapıları yazmak yerine, clsx ile çok daha temiz ve okunabilir bir yapı oluşturulabilir.
                      </li>
                      <li className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold text-gray-900 dark:text-white">Kodun Temizliği:</strong> Tailwind&apos;in utility-first yapısı, projelerde uzun ve karmaşık sınıf listelerine yol açabilir. clsx ile bu sınıf listelerini organize ederek kodu daha okunabilir hale getirebilirsiniz.
                      </li>
                      <li className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold text-gray-900 dark:text-white">Modülerlik:</strong> Özellikle büyük projelerde, Tailwind sınıflarının modüler kullanımı önemlidir. clsx, bu modülerliği artırarak bileşenlerin kendi durumlarına göre stilleri kolayca değiştirebilmenizi sağlar.
                      </li>
                    </ul>
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mt-4">
                      Bu iki aracın sağladığı esneklik sayesinde, tasarım ve stil yönetimini çok daha verimli bir şekilde yapabilir, UI bileşenlerinizde esneklik sağlayabilirsiniz.
                    </p>
                  </div>
                </BlogDetail>
              </div>
            </BlogItem>

            <BlogItem
              src="/img/blog-post-2.webp"
              alt="Blog Post 2"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
            >
              <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                <article>
                  <Title
                    titleOne="POST"
                    titleTwo="DETAILS"
                    titleBackground="POSTS"
                    pySmall
                  />
                </article>
                <BlogDetail
                  src="/img/blog-post-2.webp"
                  alt="Blog Post 2"
                  author="John Doe"
                  date="May 10, 2021"
                  tags="wordpress, business, economy, design"
                  title="How to Own Your Audience by Creating an Email List"
                  text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                />
              </div>
            </BlogItem>

            <BlogItem
              src="/img/blog-post-3.webp"
              alt="Blog Post 3"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
            >
              <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                <article>
                  <Title
                    titleOne="POST"
                    titleTwo="DETAILS"
                    titleBackground="POSTS"
                    pySmall
                  />
                </article>
                <BlogDetail
                  src="/img/blog-post-3.webp"
                  alt="Blog Post 3"
                  author="John Doe"
                  date="May 10, 2021"
                  tags="wordpress, business, economy, design"
                  title="How to Own Your Audience by Creating an Email List"
                  text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                />
              </div>
            </BlogItem>

            <BlogItem
              src="/img/blog-post-4.webp"
              alt="Blog Post 4"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
            >
              <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                <article>
                  <Title
                    titleOne="POST"
                    titleTwo="DETAILS"
                    titleBackground="POSTS"
                    pySmall
                  />
                </article>
                <BlogDetail
                  src="/img/blog-post-4.webp"
                  alt="Blog Post 4"
                  author="John Doe"
                  date="May 10, 2021"
                  tags="wordpress, business, economy, design"
                  title="How to Own Your Audience by Creating an Email List"
                  text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                />
              </div>
            </BlogItem>

            <BlogItem
              src="/img/blog-post-5.webp"
              alt="Blog Post 5"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
            >
              <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                <article>
                  <Title
                    titleOne="POST"
                    titleTwo="DETAILS"
                    titleBackground="POSTS"
                    pySmall
                  />
                </article>
                <BlogDetail
                  src="/img/blog-post-5.webp"
                  alt="Blog Post 5"
                  author="John Doe"
                  date="May 10, 2021"
                  tags="wordpress, business, economy, design"
                  title="How to Own Your Audience by Creating an Email List"
                  text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                />
              </div>
            </BlogItem>

            <BlogItem
              src="/img/blog-post-6.webp"
              alt="Blog Post 6"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.."
            >
              <div className="py-0 px-12 h-[75vh] w-[750px] overflow-y-auto force-overflow large-2">
                <article>
                  <Title
                    titleOne="POST"
                    titleTwo="DETAILS"
                    titleBackground="POSTS"
                    pySmall
                  />
                </article>
                <BlogDetail
                  src="/img/blog-post-6.webp"
                  alt="Blog Post 6"
                  author="John Doe"
                  date="May 10, 2021"
                  tags="wordpress, business, economy, design"
                  title="How to Own Your Audience by Creating an Email List"
                  text="Tomfoolery crikey bits and bobs brilliant bamboozled
                      down the pub amongst brolly hanky panky, cack bonnet
                      arse over tit burke bugger all mate bodge. cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.Suspendisse interdum
                      consectetur libero id faucibu nisl. Lacus vel facilisis
                      volutpat est velit egestas.
                    
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A
                      trip somewhere new seems always exactly what our
                      photography needed, as shooting away from home
                      consistently inspires us to new artistic heights.
                    
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est
                      laborum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna.
                    
                      Riosum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    "
                />
              </div>
            </BlogItem>
          </div>
        </div>
      </div>
    </div>
  );
};
