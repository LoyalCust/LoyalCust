import Link from "next/link";

const WaHelpdesk = () => {
  return (
    <div className="fixed bottom-0 right-0 z-30 p-2">
      <Link
        href="https://wa.me/62816282136"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-center justify-center rounded-full bg-green-500 w-[40px] h-[40px] md:w-[75px] md:h-[75px] hover:bg-white shadow-lg transition-colors duration-300">
          <svg
            // width="54"
            // height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-green-500 fill-white transition-colors duration-300 w-[25px] h-[25px] md:w-[54px] md:h-[54px]"
          >
            <path d="M47.081 14.3104C40.0273 3.37541 25.5823 0.135411 14.411 6.91916C3.50978 13.7029 -0.000222445 28.4854 7.05353 39.3867L7.62728 40.2642L5.26478 49.1067L14.1073 46.7442L14.9848 47.3179C18.7985 49.3767 22.9498 50.5579 27.0673 50.5579C31.4885 50.5579 35.9098 49.3767 39.7235 47.0142C50.6248 39.9267 53.8648 25.4479 47.081 14.2429V14.3104ZM40.9048 37.0579C39.7235 38.8129 38.2385 39.9942 36.1798 40.2979C34.9985 40.2979 33.5135 40.8717 27.641 38.5429C22.646 36.1804 18.4948 32.3329 15.5585 27.9117C13.8035 25.8529 12.8923 23.1867 12.6223 20.5204C12.6223 18.1579 13.4998 16.0992 14.9848 14.6142C15.5585 14.0404 16.166 13.7367 16.7398 13.7367H18.2248C18.7985 13.7367 19.406 13.7367 19.7098 14.9179C20.2835 16.4029 21.7685 19.9467 21.7685 20.2504C22.0723 20.5542 21.9373 22.8154 20.5873 24.0979C19.8448 24.9417 19.7098 24.9754 20.0135 25.5829C21.1948 27.3379 22.6798 29.1267 24.131 30.6117C25.886 32.0967 27.6748 33.2779 29.7335 34.1554C30.3073 34.4592 30.9148 34.4592 31.2185 33.8517C31.5223 33.2779 32.9735 31.7929 33.581 31.1854C34.1548 30.6117 34.4585 30.6117 35.066 30.8817L39.791 33.2442C40.3648 33.5479 40.9723 33.8179 41.276 34.1217C41.5798 34.9992 41.5798 36.1804 40.9723 37.0579H40.9048Z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default WaHelpdesk;