export default function CardComponent({ srcImg, altImg, cardTitle, cardDes, userImg }) {
  return (
    <>
      <div className="card bg-bg-primary shadow-2xl rounded-2xl py-4 px-3">
        <div className=" py-4  w-full">
          <img src={srcImg} className="rounded-2xl h-60 w-full object-cover " alt={altImg} />
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            <span className="text-gray-400 text-xs">Design</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <span className="text-gray-400 text-xs">3 Month</span>
          </div>
        </div>
        <div className="card-body">
          <p className="text-text-primary">{cardTitle}</p>
        </div>
        <p className="text-gray-400">{cardDes}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 my-3">
            <div className=" size-10 rounded-full overflow-hidden ">
              <img src={userImg} className="rounded-full" alt="" />
            </div>
            <h3 className="text-text-primary">Lina</h3>
          </div>
          <p className="text-color-btn1 font-bold ">
            <span className="text-gray-400 line-through font-light">$100</span> $80
          </p>
        </div>
      </div>
    </>
  );
}
