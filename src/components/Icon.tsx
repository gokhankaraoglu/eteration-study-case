export enum Icons {
  PROFILE_ICON = "profileIcon",
  CART_ICON = "cartIcon",
}

export interface IconProps {
  icon: Icons;
  className?: string;
}

const getIcon = (icon: Icons) => {
  switch (icon) {
    case Icons.PROFILE_ICON:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM7 19C7 16.2386 9.23858 14 12 14C14.7614 14 17 16.2386 17 19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19C19 15.134 15.866 12 12 12C8.13401 12 5 15.134 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19Z"
            fill="white"
          />
        </svg>
      );
    case Icons.CART_ICON:
      return (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3C7 2.44772 7.44772 2 8 2H12C12.5523 2 13 2.44772 13 3H7ZM5 3C5 1.34315 6.34315 0 8 0H12C13.6569 0 15 1.34315 15 3H17C18.6569 3 20 4.34315 20 6V8V15C20 16.6569 18.6569 18 17 18H3C1.34315 18 0 16.6569 0 15V8V6C0 4.34315 1.34315 3 3 3H5ZM14 5H17C17.5523 5 18 5.44772 18 6V7H2V6C2 5.44772 2.44772 5 3 5H6H14ZM18 15V9H2V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15Z"
            fill="white"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const Icon = ({ icon, className = "" }: IconProps) => {
  return <span className={className}>{getIcon(icon)}</span>;
};
