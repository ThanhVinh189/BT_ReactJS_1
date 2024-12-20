export default function Carousel() {
  return (
    <div className="py-5 text-center flex justify-center">
      <div className="max-w-sm p-6 bg-gray-800 border border-gray-700 rounded-lg shadow dark:bg-white dark:border-gray-200">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
