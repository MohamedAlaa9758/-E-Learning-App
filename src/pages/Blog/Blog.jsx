import haedImag from "../../assets/Group 40.png";
import imgBlog1 from "../../assets/1.png";
import imgBlog2 from "../../assets/2.jpg";
import imgBlog3 from "../../assets/3.jpg";
import imgBlog4 from "../../assets/4.png";
import relatedImg from "../../assets/rBlog.png";
import userImg from "../../assets/userimage.png";
import market1 from "../../assets/market1.png";
import market4 from "../../assets/market4.png";
import ButtonComponent from "../../components/shared/Button/ButtonCompoent";
import CardComponent from "../../components/shared/CardComponent";

const cardData = [
  {
    srcImg: market1,
    cardTitle: "AWS Certified solutions Architect",
    cardDes: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    userImg: userImg,
    userName: "lina",
    priceBefor: "$100",
    priceAfter: "$80",
  },
  {
    srcImg: imgBlog1,
    cardTitle: "AWS Certified solutions Architect",
    cardDes: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    userImg: userImg,
    userName: "lina",
    priceBefor: "$100",
    priceAfter: "$80",
  },
  {
    srcImg: haedImag,
    cardTitle: "AWS Certified solutions Architect",
    cardDes: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    userImg: userImg,
    userName: "lina",
    priceBefor: "$100",
    priceAfter: "$80",
  },
  {
    srcImg: market4,
    cardTitle: "AWS Certified solutions Architect",
    cardDes: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    userImg: userImg,
    userName: "lina",
    priceBefor: "$100",
    priceAfter: "$80",
  },
];

export default function Blog() {
  return (
    <>
      <main>
        <section className=" bg-blue-light py-8">
          <div className="container">
            <div className="lg:flex p-5 gap-2 ">
              <div className="lg:w-1/2  ">
                <div className="inner">
                  <p>
                    By Themadbrains in <span className="text-color-btn1">inspiration</span>
                  </p>
                  <h2 className="text-4xl text-[#2F327D] mt-6">Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
                  <p className="text-[#696984] my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                    elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor
                    sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                  <div className="text-center lg:text-start">
                    <ButtonComponent margin="my-4" paddingX="px-5" paddingY="py-3" text="Start learning now" />
                  </div>
                </div>
              </div>
              <div className=" lg:w-1/2 mt-2 lg:mt-0 flex justify-center items-center">
                <div className="inner w-3/4   ">
                  <img src={haedImag} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bg-primary py-8">
          <div className="container">
            <h2 className="text-text-primary text-2xl font-semibold px-5 ">Reading blog list</h2>
            <div className="flex flex-wrap  my-5  ">
              <div className="lg:w-1/4 md:w-1/2 w-full rounded-2xl relative">
                <div className="inner m-5">
                  <img src={imgBlog1} className="rounded-2xl h-60 w-full object-cover  " alt="UX/UI image" />
                  <div className="bg-bg-primary/75  rounded-2xl text-center absolute  bottom-6 left-1/2 -translate-x-1/2  w-45 h-10 flex items-center justify-center ">
                    <span>UX/UI</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full rounded-2xl relative">
                <div className="inner m-5">
                  <img src={imgBlog2} className="rounded-2xl h-60 w-full object-cover  " alt="React image" />
                  <div className="bg-bg-primary/75 rounded-2xl text-center absolute  bottom-6 left-1/2 -translate-x-1/2  w-45 h-10 flex items-center justify-center ">
                    <span>React</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full rounded-2xl relative">
                <div className="inner m-5  ">
                  <img src={imgBlog3} className="rounded-2xl h-60 w-full object-cover  " alt="PHP image" />
                  <div className="bg-bg-primary/75 rounded-2xl text-center absolute  bottom-6 left-1/2 -translate-x-1/2  w-45 h-10 flex items-center justify-center ">
                    <span>PHP</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full rounded-2xl relative">
                <div className="inner m-5">
                  <img src={imgBlog4} className="rounded-2xl h-60 w-full object-cover  " alt="JavaScript image" />
                  <div className="bg-bg-primary/75 rounded-2xl text-center absolute  bottom-6 left-1/2 -translate-x-1/2  w-45 h-10 flex items-center justify-center ">
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-light py-8 ">
          <div className="container">
            <div className="flex justify-between items-center px-5">
              <h2 className="text-text-primary text-2xl font-semibold ">Related Blog</h2>
              <a className="text-color-btn1" href="#">
                See all
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                <div className="inner m-5">
                  <div className="card bg-bg-primary rounded-2xl py-4 px-3">
                    <div className=" py-4  w-full">
                      <img src={relatedImg} className="rounded-2xl object-cover " alt="" />
                    </div>
                    <div className="card-body">
                      <p className="text-text-primary">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                    </div>
                    <div className="flex items-center gap-2 my-3">
                      <div className=" size-15 rounded-full overflow-hidden ">
                        <img src={userImg} className="rounded-full" alt="" />
                      </div>
                      <h3 className="text-text-primary">Lina</h3>
                    </div>
                    <p className="text-gray-400">
                      Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                    </p>
                    <div className="flex justify-between my-3">
                      <a href="#" className="text-gray-400 underline">
                        Read more
                      </a>
                      <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-color-btn1">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path
                            fillRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="text-gray-400">251,232</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="inner m-5">
                  <div className="card bg-bg-primary rounded-2xl py-4 px-3">
                    <div className=" py-4  w-full">
                      <img src={haedImag} className="rounded-2xl object-cover " alt="" />
                    </div>
                    <div className="card-body">
                      <p className="text-text-primary">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                    </div>
                    <div className="flex items-center gap-2 my-3">
                      <div className=" size-15 rounded-full overflow-hidden ">
                        <img src={userImg} className="rounded-full" alt="" />
                      </div>
                      <h3 className="text-text-primary">Lina</h3>
                    </div>
                    <p className="text-gray-400">
                      Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                    </p>
                    <div className="flex justify-between my-3">
                      <a href="#" className="text-gray-400 underline">
                        Read more
                      </a>
                      <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-color-btn1">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path
                            fillRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="text-gray-400">251,232</span>
                      </div>
                    </div>
                  </div>
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
              <h2 className="text-text-primary text-2xl font-semibold ">Marketing Articles</h2>
              <a className="text-color-btn1" href="#">
                See all
              </a>
            </div>
            <div className="flex flex-wrap">
              {cardData.map((item, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 w-full">
                  <div className="inner m-5">
                    <CardComponent
                      srcImg={item.srcImg}
                      cardTitle={item.cardTitle}
                      cardDes={item.cardDes}
                      altImg={item.cardTitle}
                      userImg={item.userImg}
                      userName={item.userName}
                      priceBefor={item.priceBefor}
                      priceAfter={item.priceAfter}
                    />
                  </div>
                </div>
              ))}
              {/* <div className="lg:w-1/4 md:w-1/2 w-full">
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
                    srcImg={imgBlog1}
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
                    srcImg={market4}
                    cardDes={"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"}
                    cardTitle={"AWS Certified solutions Architect"}
                    userImg={userImg}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
