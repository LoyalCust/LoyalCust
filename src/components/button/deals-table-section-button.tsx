const DealsTableSectionButton = ({
  onClick,
  isTableView,
}: {
  onClick: () => void;
  isTableView: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isTableView ? 'bg-dark-navy' : 'bg-light-grayBright'
      }  rounded-[10px] inline-flex items-center justify-center p-[10px] hover:opacity-80 transition-shadow duration-200`}
    >
      <svg
        width="27"
        height="21"
        viewBox="0 0 27 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 10.5C27 10.9397 26.8293 11.3614 26.5255 11.6723C26.2217 11.9832 25.8097 12.1579 25.38 12.1579H1.62C1.19035 12.1579 0.778296 11.9832 0.474487 11.6723C0.170678 11.3614 0 10.9397 0 10.5C0 10.0603 0.170678 9.63861 0.474487 9.32769C0.778296 9.01678 1.19035 8.8421 1.62 8.8421H25.38C25.8097 8.8421 26.2217 9.01678 26.5255 9.32769C26.8293 9.63861 27 10.0603 27 10.5ZM1.62 3.31579H25.38C25.8097 3.31579 26.2217 3.14112 26.5255 2.8302C26.8293 2.51929 27 2.0976 27 1.65789C27 1.21819 26.8293 0.796501 26.5255 0.485586C26.2217 0.17467 25.8097 0 25.38 0H1.62C1.19035 0 0.778296 0.17467 0.474487 0.485586C0.170678 0.796501 0 1.21819 0 1.65789C0 2.0976 0.170678 2.51929 0.474487 2.8302C0.778296 3.14112 1.19035 3.31579 1.62 3.31579ZM25.38 17.6842H1.62C1.19035 17.6842 0.778296 17.8589 0.474487 18.1698C0.170678 18.4807 0 18.9024 0 19.3421C0 19.7818 0.170678 20.2035 0.474487 20.5144C0.778296 20.8253 1.19035 21 1.62 21H25.38C25.8097 21 26.2217 20.8253 26.5255 20.5144C26.8293 20.2035 27 19.7818 27 19.3421C27 18.9024 26.8293 18.4807 26.5255 18.1698C26.2217 17.8589 25.8097 17.6842 25.38 17.6842Z"
          fill={`${isTableView ? '#B8CCCF' : '#193442'}`}
        />
      </svg>
    </button>
  );
};

export default DealsTableSectionButton;