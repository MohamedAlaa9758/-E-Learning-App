import haedImag from "../../assets/Group 40.png";
import welcome2 from "../../assets/w2.jpg";
import imgBlog4 from "../../assets/4.png";
import userImg from "../../assets/userimage.png";
import market1 from "../../assets/market1.png";
import ButtonComponent from "../../components/shared/Button/ButtonCompoent";
import CardComponent from "../../components/shared/CardComponent";
import FavCourse from "../../components/shared/FavCourse/FavCourse";

export default function Course() {
  return (
    <>
      <main>
        <section className="bg-blue-light py-8">
          <div className="container">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-text-primary text-sm md:text-2xl font-semibold ">Welcome back, ready for your next lesson?</h2>
              <a className="text-color-btn1 text-xs md:text-sm " href="#">
                View hisotry
              </a>
            </div>
            <div className="flex my-5 flex-wrap justify-center ">
              <div className="md:w-1/2 lg:w-1/3 my-3 ">
                <div className="inner bg-bg-primary p-5 rounded-2xl mx-3">
                  <img src={haedImag} className="mb-2 rounded-2xl h-60 w-full object-cover " alt="" />
                  <p className="text-text-primary">AWS Certified Solutions Architect</p>
                  <div className="flex items-center gap-2 my-3">
                    <div className=" size-10 rounded-full overflow-hidden ">
                      <img src={userImg} className="rounded-full" alt="" />
                    </div>
                    <h3 className="text-text-primary">Lina</h3>
                  </div>
                  <div className="w-full bg-gray-300 h-1 rounded-2xl">
                    <div className="w-70 bg-color-btn1 h-1 rounded-2xl"></div>
                  </div>
                  <p className="text-gray-400 text-xs pt-3 text-end">Lesson 5 of 7</p>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-1/3 my-3 ">
                <div className="inner bg-bg-primary p-5 rounded-2xl mx-3">
                  <img src={welcome2} className="mb-2 rounded-2xl h-60 w-full object-cover" alt="" />
                  <p className="text-text-primary">AWS Certified Solutions Architect</p>
                  <div className="flex items-center gap-2 my-3">
                    <div className=" size-10 rounded-full overflow-hidden ">
                      <img src={userImg} className="rounded-full" alt="" />
                    </div>
                    <h3 className="text-text-primary">Lina</h3>
                  </div>
                  <div className="w-full bg-gray-300 h-1 rounded-2xl">
                    <div className="w-70 bg-color-btn1 h-1 rounded-2xl"></div>
                  </div>
                  <p className="text-gray-400 text-xs pt-3 text-end">Lesson 5 of 7</p>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-1/3 my-3 ">
                <div className="inner bg-bg-primary p-5 rounded-2xl mx-3">
                  <img src={imgBlog4} className=" mb-2 rounded-2xl h-60 w-full object-cover" alt="" />
                  <p className="text-text-primary">AWS Certified Solutions Architect</p>
                  <div className="flex items-center gap-2 my-3">
                    <div className=" size-10 rounded-full overflow-hidden ">
                      <img src={userImg} className="rounded-full" alt="" />
                    </div>
                    <h3 className="text-text-primary">Lina</h3>
                  </div>
                  <div className="w-full bg-gray-300 h-1 rounded-2xl">
                    <div className="w-70 bg-color-btn1 h-1 rounded-2xl"></div>
                  </div>
                  <p className="text-gray-400 text-xs pt-3 text-end">Lesson 5 of 7</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end px-5">
              <ButtonComponent
                rounded="rounded-0"
                paddingX="px-2"
                paddingY="py-2"
                text={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-bg-primary">
                    <path
                      fillRule="evenodd"
                      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <ButtonComponent
                rounded="rounded-0"
                paddingX="px-2"
                paddingY="py-2"
                text={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-bg-primary">
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </section>
        <section className="bg-bg-primary py-8">
          <div className="container">
            <h2 className="text-text-primary text-lg lg:text-2xl font-semibold px-2">Choice favourite course from top category</h2>
            <div className="flex my-5 flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#C8EBEB]"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"}
                    title={"Design"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#49BBBD]">
                        <path
                          fillRule="evenodd"
                          d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#CED5FA]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#5B72EE]">
                        <path
                          fillRule="evenodd"
                          d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    title={"Development"}
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#E2F0FF]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#9DCCFF]">
                        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                      </svg>
                    }
                    title={"Database"}
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#B3EFEA]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#00CBB8]">
                        <path
                          fillRule="evenodd"
                          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                      </svg>
                    }
                    title={"Business"}
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#FCDDB4]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#F48C06]">
                        <path
                          fillRule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    title={"Marketing"}
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#FAD0CE]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#EE645B]">
                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                        <path
                          fillRule="evenodd"
                          d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    title={"Photography"}
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#BEBEC6]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#252641]">
                        <path
                          fillRule="evenodd"
                          d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    title={"Acting"}
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="inner bg-bg-primary rounded-2xl shadow-xl m-3 py-5">
                  <FavCourse
                    colorBox={"bg-[#B3EFEA]"}
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#00CBB8]">
                        <path
                          fillRule="evenodd"
                          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                      </svg>
                    }
                    title={"Business"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-light py-8 ">
          <div className="container">
            <div className="flex justify-between items-center px-3 ">
              <h2 className="text-text-primary text-2xl font-semibold ">Recommended for you</h2>
              <a className="text-color-btn1" href="#">
                See all
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end px-5">
              <ButtonComponent
                rounded="rounded-0"
                paddingX="px-2"
                paddingY="py-2"
                text={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-bg-primary">
                    <path
                      fillRule="evenodd"
                      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <ButtonComponent
                rounded="rounded-0"
                paddingX="px-2"
                paddingY="py-2"
                text={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-bg-primary">
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </section>
        <section className="bg-bg-primary py-8 ">
          <div className="container">
            <div className="flex justify-between items-center px-3 ">
              <h2 className="text-text-primary text-2xl font-semibold ">Get choice of your course</h2>
              <a className="text-color-btn1" href="#">
                See all
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bg-primary py-8 px-2">
          <div className="container bg-blue-dark rounded-3xl ">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="md:text-2xl lg:text-3xl text-white mt-10 mb-8">Online coaching lessons for remote learning.</h2>
              <p className="text-white text-center lg:text-xl px-5 lg:px-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </p>
              <ButtonComponent text={"Start learning now"} margin={"my-10 "} paddingX="px-8" paddingY="py-4" />
            </div>
          </div>
        </section>
        <section className="bg-bg-primary py-8 ">
          <div className="container">
            <div className="flex justify-between items-center px-3 ">
              <h2 className="text-text-primarytext-sm md:text-2xl font-semibold ">The course in personal development</h2>
              <a className="text-color-btn1 " href="#">
                See all
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-light py-8 ">
          <div className="container">
            <div className="flex justify-between items-center px-3 ">
              <h2 className="text-text-primary text-2xl font-semibold ">Student are viewing</h2>
              <a className="text-color-btn1" href="#">
                See all
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={market1}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full">
                <div className="inner m-5">
                  <CardComponent
                    srcImg={haedImag}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
