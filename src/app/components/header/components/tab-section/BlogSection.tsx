import React from 'react'
import { BlogItem } from '../blog-item'
import { BlogDetail } from '../blog-detail'
import { Title } from '../title'

export const BlogSection = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-y-auto force-overflow large-2">
            <div className="w-full lg:max-w-7xl">
              <Title titleOne="MY" titleTwo="BLOG" titleBackground="POSTS" />
              <div className="w-full mb-14">
                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-auto">
                  <BlogItem
                    src="/img/blog-post-1.webp"
                    alt="Blog Post 1"
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
                        src="/img/blog-post-1.webp"
                        alt="Blog Post 1"
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
  )
}
