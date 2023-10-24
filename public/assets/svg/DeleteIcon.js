const DeleteIcon = ({ top, bottom }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="8"
        viewBox="0 0 30 8"
        className={top}
      >
        <g clip-path="url(#clip0_738_275)">
          <path
            d="M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75ZM10 11.25H20V23.75H10V11.25ZM19.375 5L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75V5H19.375Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_738_275">
            <rect width="30" height="8" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="21"
        viewBox="0 0 30 21"
        className={bottom}
      >
        <g clip-path="url(#clip0_738_273)">
          <path
            d="M7.5 14.75C7.5 15.413 7.76339 16.0489 8.23223 16.5178C8.70107 16.9866 9.33696 17.25 10 17.25H20C20.663 17.25 21.2989 16.9866 21.7678 16.5178C22.2366 16.0489 22.5 15.413 22.5 14.75V-0.25H7.5V14.75ZM10 2.25H20V14.75H10V2.25ZM19.375 -4L18.125 -5.25H11.875L10.625 -4H6.25V-1.5H23.75V-4H19.375Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_738_273">
            <rect width="30" height="21" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default DeleteIcon;
