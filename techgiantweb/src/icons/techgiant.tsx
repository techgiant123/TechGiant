import React from "react";

// Define the props type
interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({
  width = 119,
  height = 199,
  fill = "currentColor",
}) => {

  return (
    <svg width={width} height={height} viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M119 0H0V119H119V0Z" fill="black"/>
<path d="M21.58 63.736H20.92C20.89 63.277 20.81 62.893 20.7 62.584C20.58 62.275 20.4101 62.035 20.1801 61.864C19.9701 61.683 19.7 61.555 19.37 61.48C19.04 61.405 18.6401 61.368 18.1801 61.368C17.7901 61.368 17.47 61.379 17.22 61.4C16.99 61.411 16.8101 61.437 16.6801 61.48C16.5501 61.523 16.47 61.576 16.42 61.64C16.39 61.693 16.38 61.768 16.38 61.864V70.424C16.38 70.765 16.3999 71.059 16.4399 71.304C16.4899 71.549 16.59 71.752 16.73 71.912C16.88 72.061 17.09 72.179 17.35 72.264C17.63 72.339 17.9899 72.381 18.4399 72.392V73H12.39V72.392C12.84 72.381 13.2 72.339 13.48 72.264C13.76 72.179 13.97 72.061 14.1 71.912C14.25 71.752 14.35 71.549 14.39 71.304C14.45 71.059 14.47 70.765 14.47 70.424V61.864C14.47 61.768 14.45 61.693 14.41 61.64C14.38 61.576 14.3001 61.523 14.1801 61.48C14.0801 61.437 13.92 61.411 13.72 61.4C13.52 61.379 13.25 61.368 12.9 61.368C12.49 61.368 12.1 61.384 11.74 61.416C11.38 61.448 11.0701 61.544 10.8101 61.704C10.5501 61.853 10.3401 62.088 10.1801 62.408C10.0201 62.728 9.94005 63.171 9.93005 63.736H9.33997V60.68H21.42L21.58 63.736ZM26 66.232C26.58 66.232 27.0599 66.2 27.4399 66.136C27.8399 66.061 28.15 65.949 28.37 65.8C28.61 65.651 28.77 65.459 28.87 65.224C28.97 64.989 29.03 64.712 29.03 64.392H29.59V68.76H29.03C29.03 68.44 28.98 68.163 28.88 67.928C28.8 67.693 28.64 67.501 28.4 67.352C28.18 67.192 27.87 67.075 27.48 67C27.09 66.915 26.6 66.872 26 66.872V70.488C26 70.84 26.05 71.133 26.13 71.368C26.22 71.592 26.3601 71.779 26.5601 71.928C26.7801 72.067 27.05 72.168 27.4 72.232C27.74 72.285 28.16 72.312 28.66 72.312C29.23 72.312 29.71 72.275 30.1 72.2C30.49 72.115 30.83 71.976 31.09 71.784C31.36 71.592 31.57 71.341 31.73 71.032C31.89 70.712 32.03 70.317 32.13 69.848H32.74L32.5 73H22.5601V72.392C22.9401 72.381 23.24 72.349 23.46 72.296C23.69 72.243 23.88 72.152 24 72.024C24.13 71.896 24.22 71.715 24.26 71.48C24.3 71.245 24.3199 70.941 24.3199 70.568V63.112C24.3199 62.739 24.3 62.44 24.26 62.216C24.23 61.981 24.15 61.8 24.04 61.672C23.93 61.533 23.7701 61.443 23.5601 61.4C23.3401 61.347 23.07 61.309 22.72 61.288V60.68H31.97L32.12 63.496H31.5601C31.4901 63.069 31.39 62.723 31.24 62.456C31.1 62.179 30.9 61.96 30.64 61.8C30.4 61.64 30.08 61.528 29.7 61.464C29.32 61.4 28.8501 61.368 28.3101 61.368H26.28C26.09 61.368 26 61.459 26 61.64V66.232ZM44.48 60.68H44.9301L45.0699 64.36H44.48C44.24 63.421 43.79 62.685 43.12 62.152C42.45 61.619 41.6299 61.352 40.6899 61.352C40.0299 61.352 39.4499 61.48 38.9399 61.736C38.4299 61.992 38 62.36 37.65 62.84C37.29 63.32 37.02 63.907 36.83 64.6C36.65 65.293 36.5601 66.077 36.5601 66.952C36.5601 68.669 36.91 69.992 37.63 70.92C38.34 71.837 39.38 72.296 40.73 72.296C42.79 72.296 44.11 71.203 44.7 69.016H45.36V73H44.8L44.4301 71.736C43.3101 72.685 41.95 73.16 40.37 73.16C39.46 73.16 38.64 73.016 37.9 72.728C37.18 72.44 36.55 72.035 36.03 71.512C35.52 70.979 35.12 70.333 34.83 69.576C34.55 68.819 34.41 67.976 34.41 67.048C34.41 66.077 34.56 65.192 34.86 64.392C35.16 63.592 35.58 62.904 36.11 62.328C36.65 61.752 37.3 61.309 38.05 61C38.8 60.68 39.63 60.52 40.54 60.52C41.18 60.52 41.78 60.611 42.35 60.792C42.91 60.973 43.5299 61.267 44.1899 61.672L44.48 60.68ZM58.6 70.456C58.6 70.861 58.62 71.192 58.67 71.448C58.71 71.693 58.79 71.885 58.91 72.024C59.03 72.152 59.2101 72.243 59.4301 72.296C59.6701 72.349 59.97 72.381 60.35 72.392V73H55.16V72.392C55.53 72.381 55.8301 72.349 56.0601 72.296C56.2901 72.243 56.47 72.152 56.6 72.024C56.73 71.896 56.81 71.715 56.86 71.48C56.9 71.245 56.92 70.941 56.92 70.568V67.096H50.4399V70.456C50.4399 70.861 50.46 71.192 50.51 71.448C50.55 71.693 50.63 71.885 50.75 72.024C50.87 72.152 51.05 72.243 51.27 72.296C51.51 72.349 51.8099 72.381 52.1899 72.392V73H47V72.392C47.37 72.381 47.67 72.349 47.9 72.296C48.13 72.243 48.3099 72.152 48.4399 72.024C48.5699 71.896 48.65 71.715 48.7 71.48C48.74 71.245 48.76 70.941 48.76 70.568V63.112C48.76 62.739 48.74 62.44 48.7 62.216C48.67 61.981 48.59 61.8 48.47 61.672C48.37 61.533 48.21 61.443 47.99 61.4C47.78 61.347 47.5 61.309 47.16 61.288V60.68H52.03V61.288C51.68 61.299 51.4099 61.331 51.1899 61.384C50.9899 61.437 50.83 61.533 50.71 61.672C50.61 61.811 50.53 62.003 50.49 62.248C50.46 62.493 50.4399 62.819 50.4399 63.224V66.296H56.92V63.112C56.92 62.739 56.9 62.44 56.86 62.216C56.83 61.981 56.75 61.8 56.63 61.672C56.53 61.533 56.37 61.443 56.15 61.4C55.94 61.347 55.6599 61.309 55.3199 61.288V60.68H60.1899V61.288C59.8399 61.299 59.57 61.331 59.35 61.384C59.15 61.437 58.99 61.533 58.87 61.672C58.77 61.811 58.69 62.003 58.65 62.248C58.62 62.493 58.6 62.819 58.6 63.224V70.456Z" fill="white"/>
<path d="M19.27 102.24C17.91 102.24 16.69 102.024 15.6 101.592C14.51 101.16 13.5799 100.552 12.8199 99.768C12.0499 98.968 11.46 98 11.04 96.864C10.64 95.728 10.4399 94.464 10.4399 93.072C10.4399 91.616 10.66 90.288 11.11 89.088C11.56 87.888 12.18 86.856 12.98 85.992C13.8 85.128 14.77 84.464 15.89 84C17.02 83.52 18.27 83.28 19.63 83.28C20.59 83.28 21.5 83.416 22.34 83.688C23.19 83.96 24.11 84.4 25.1 85.008L25.61 83.52H26.45L26.14 89.04H24.98C24.98 88.256 24.83 87.584 24.53 87.024C24.24 86.448 23.86 85.976 23.38 85.608C22.9 85.24 22.34 84.968 21.72 84.792C21.11 84.616 20.49 84.528 19.85 84.528C18.87 84.528 18 84.72 17.23 85.104C16.46 85.488 15.82 86.04 15.29 86.76C14.76 87.48 14.3501 88.36 14.0601 89.4C13.7901 90.44 13.66 91.616 13.66 92.928C13.66 95.504 14.19 97.488 15.26 98.88C16.34 100.256 17.89 100.944 19.92 100.944C20.69 100.944 21.38 100.856 21.98 100.68C22.59 100.488 23.1 100.24 23.52 99.936C23.95 99.616 24.27 99.256 24.48 98.856C24.7 98.44 24.8199 98.008 24.8199 97.56C24.8199 96.632 24.62 96.008 24.24 95.688C23.87 95.352 23.26 95.184 22.42 95.184V94.272H29.23V95.184C28.85 95.184 28.53 95.216 28.27 95.28C28.02 95.344 27.81 95.464 27.65 95.64C27.5 95.8 27.4 96.016 27.34 96.288C27.29 96.56 27.26 96.904 27.26 97.32V100.008C26.96 100.008 26.68 100.024 26.42 100.056C26.18 100.072 25.93 100.128 25.66 100.224C25.38 100.304 25.08 100.424 24.74 100.584C24.42 100.728 24.04 100.928 23.59 101.184C23.03 101.504 22.38 101.76 21.65 101.952C20.93 102.144 20.14 102.24 19.27 102.24ZM36.12 97.464C36.12 98.264 36.15 98.896 36.22 99.36C36.28 99.824 36.4 100.184 36.58 100.44C36.77 100.696 37.03 100.864 37.37 100.944C37.72 101.024 38.18 101.072 38.74 101.088V102H30.96V101.088C31.52 101.072 31.9701 101.024 32.3101 100.944C32.6601 100.848 32.93 100.68 33.12 100.44C33.31 100.2 33.44 99.864 33.51 99.432C33.57 98.984 33.6 98.384 33.6 97.632V87.888C33.6 87.216 33.57 86.664 33.51 86.232C33.46 85.784 33.35 85.432 33.17 85.176C33.01 84.92 32.77 84.744 32.45 84.648C32.13 84.536 31.71 84.464 31.2 84.432V83.52H38.5V84.432C37.99 84.448 37.57 84.512 37.25 84.624C36.95 84.736 36.71 84.928 36.53 85.2C36.37 85.456 36.2599 85.816 36.1899 86.28C36.1499 86.744 36.12 87.336 36.12 88.056V97.464ZM51.5601 95.304H45.15C44.88 95.96 44.6399 96.544 44.45 97.056C44.26 97.552 44.1 97.984 43.97 98.352C43.86 98.72 43.78 99.032 43.73 99.288C43.68 99.544 43.66 99.752 43.66 99.912C43.66 100.36 43.8 100.672 44.09 100.848C44.38 101.008 44.86 101.088 45.53 101.088V102H39.7V101.088C40.07 101.04 40.38 100.976 40.64 100.896C40.91 100.816 41.14 100.704 41.33 100.56C41.54 100.416 41.72 100.232 41.86 100.008C42.02 99.768 42.1699 99.48 42.3199 99.144L48.5601 83.52H49.59L55.04 97.056C55.4 97.952 55.72 98.672 56 99.216C56.27 99.744 56.53 100.144 56.79 100.416C57.04 100.688 57.32 100.864 57.6 100.944C57.91 101.024 58.2701 101.064 58.6801 101.064V102H50.86V101.064C51.71 101.064 52.29 100.984 52.61 100.824C52.93 100.664 53.09 100.4 53.09 100.032C53.09 99.872 53.0799 99.728 53.0699 99.6C53.0499 99.456 53.02 99.304 52.97 99.144C52.94 98.984 52.8801 98.808 52.8 98.616C52.74 98.408 52.65 98.168 52.54 97.896L51.5601 95.304ZM45.63 94.104H51.1L48.4399 87.024L45.63 94.104ZM75.04 102.24L63.64 87.216H63.54V97.464C63.54 98.264 63.57 98.896 63.61 99.36C63.68 99.824 63.79 100.184 63.95 100.44C64.13 100.696 64.37 100.864 64.67 100.944C64.99 101.024 65.41 101.072 65.92 101.088V102H59.46V101.088C60.02 101.072 60.4701 101.024 60.8101 100.944C61.1601 100.848 61.43 100.68 61.62 100.44C61.81 100.2 61.94 99.864 62.01 99.432C62.07 98.984 62.1 98.384 62.1 97.632V87.888C62.1 87.216 62.07 86.664 62.01 86.232C61.96 85.784 61.85 85.432 61.67 85.176C61.51 84.92 61.27 84.744 60.95 84.648C60.63 84.536 60.2099 84.464 59.7 84.432V83.52H64.45L74.9399 97.512H75.04V88.056C75.04 87.272 75.0099 86.648 74.9399 86.184C74.8899 85.704 74.78 85.336 74.61 85.08C74.45 84.824 74.21 84.656 73.89 84.576C73.58 84.496 73.17 84.448 72.66 84.432V83.52H79.12V84.432C78.56 84.448 78.1 84.504 77.75 84.6C77.41 84.68 77.15 84.84 76.96 85.08C76.77 85.32 76.6399 85.664 76.5699 86.112C76.5099 86.56 76.48 87.152 76.48 87.888V102.24H75.04ZM98.9 88.104H97.92C97.87 87.416 97.76 86.84 97.58 86.376C97.41 85.912 97.1499 85.552 96.8199 85.296C96.4999 85.024 96.09 84.832 95.59 84.72C95.1 84.608 94.4999 84.552 93.8199 84.552C93.2199 84.552 92.74 84.568 92.38 84.6C92.02 84.616 91.7501 84.656 91.5601 84.72C91.3701 84.784 91.2401 84.864 91.1801 84.96C91.1301 85.04 91.1 85.152 91.1 85.296V98.136C91.1 98.648 91.14 99.088 91.2 99.456C91.28 99.824 91.42 100.128 91.63 100.368C91.86 100.592 92.1699 100.768 92.5699 100.896C92.9799 101.008 93.53 101.072 94.2 101.088V102H85.13V101.088C85.8 101.072 86.34 101.008 86.76 100.896C87.18 100.768 87.49 100.592 87.7 100.368C87.92 100.128 88.06 99.824 88.13 99.456C88.21 99.088 88.25 98.648 88.25 98.136V85.296C88.25 85.152 88.22 85.04 88.15 84.96C88.1 84.864 87.9899 84.784 87.8199 84.72C87.6599 84.656 87.42 84.616 87.12 84.6C86.82 84.568 86.41 84.552 85.9 84.552C85.27 84.552 84.69 84.576 84.14 84.624C83.62 84.672 83.15 84.816 82.75 85.056C82.37 85.28 82.0599 85.632 81.8199 86.112C81.5799 86.592 81.4501 87.256 81.4301 88.104H80.54V83.52H98.66L98.9 88.104Z" fill="white"/>
<path d="M108 10H98V20H108V10Z" fill="white"/>
<path d="M106 12H96V22H106V12Z" fill="black"/>
</svg>

   
  );
};

export default Icon;

{/* <svg
version="1.1"
viewBox="0 0 2000 1118"
width={width}
height={height} 

>
<path
  transform="translate(601,23)"
  d="m0 0h19l32 4 31 6 34 9 29 10 28 12 23 11 23 13 22 14 18 13 14 11 13 11 10 9 12 11 14 14 7 8 9 10 11 14 13 17 14 21 12 20 13 24 11 24 11 28 8 25 9 36 6 36 2 18v19l-4 10-7 8-12 6-5 1h-416l-13-4-10-9-4-8-2-8v-415l2-9 6-10 9-7z"
  fill="#fff"
/>
<path
  transform="translate(1e3 559)"
  d="m0 0h16l10 4 8 6 6 10 2 8v417l-3 10-6 8-7 6-11 4h-419l-10-3-9-7-6-9-2-6v-19l4-32 7-35 8-29 9-27 10-24 12-25 11-21 13-21 11-16 14-19 11-13 9-11 9-9 7-8 9-9 8-7 12-11 11-9 18-14 27-18 15-9 18-10 22-11 29-12 36-12 36-9 36-6z"
  fill="#fff"
/>
<path
  transform="translate(467,20)"
  d="m0 0h15l11 4 10 9 4 8 1 4v423l-4 10-8 9-10 5-5 1h-419l-11-4-8-7-6-9-2-8 1-20 4-30 7-35 10-35 9-25 12-28 13-26 16-27 8-12 12-17 11-14 11-13 9-10 7-8 21-21 8-7 14-12 17-13 18-13 19-12 21-12 17-9 27-12 24-9 25-8 22-6 36-7z"
  fill="#fff"
/>
<path
  transform="translate(60,560)"
  d="m0 0h423l10 4 8 7 5 8 2 6v423l-4 10-6 7-10 6-8 2-19-1-31-4-34-7-29-8-29-10-26-11-25-12-23-13-22-14-18-13-16-13-11-9-13-12-12-11-7-7-7-8-11-12-9-11-13-17-14-20-15-25-12-22-11-23-11-28-9-27-9-36-5-27-4-36v-8l3-10 6-9 8-6z"
  fill="#fff"
/>
<path
  transform="translate(1237,831)"
  d="m0 0h32l20 4 16 6 7 4-1 6-9 20h-4l-14-7-11-3-7-1h-26l-16 4-12 6-11 9-9 13-6 14-2 9-1 18 2 17 5 15 6 11 8 10 8 7 10 6 11 4 12 2h14l18-3 12-5 4-3h2v-38h-40v-29h70v79l-9 9-13 8-15 6-18 4-12 1h-13l-21-3-15-5-15-8-10-8-9-8-9-12-8-15-5-15-3-16v-27l3-15 4-12 7-14 9-12 11-11 15-10 16-7 16-4z"
  fill="#fff"
/>
<path
  transform="translate(1620,833)"
  d="m0 0 5 1 8 8 7 8 10 11 7 8 10 11 7 8 11 12 7 8 27 30 7 8 11 12 1 2v-126h31v197h-5l-15-16-7-8-12-13-7-8-11-12-27-30-11-12-7-8-11-12-5-6v125h-31z"
  fill="#fff"
/>
<path
  transform="translate(1604,592)"
  d="m0 0h31v80h68v-80h31v197h-31v-91h-68v91h-31z"
  fill="#fff"
/>
<path
  transform="translate(1506,833)"
  d="m0 0 4 1 11 22 11 23 14 29 11 23 14 29 11 23 14 29 8 17v2h-35l-5-10-12-28h-89l-13 29-4 9h-34l3-9 19-39 13-28 20-41 11-23 16-34 11-23zm1 59-18 40-13 29-1 4h65l-2-6-18-40-11-26z"
  fill="#fff"
/>
<path
  transform="translate(1507,589)"
  d="m0 0h30l15 3 13 5 9 5 2 4-12 24h-4l-10-6-10-4-11-2h-17l-16 4-13 7-10 9-7 10-6 13-3 12-1 7v21l3 15 5 13 6 10 9 10 13 8 12 4 7 1h17l15-3 13-5 7-4h3l8 23-1 4-10 6-15 5-16 3h-24l-20-4-15-6-14-9-10-9-8-9-8-13-6-14-4-15-2-20 1-18 4-18 6-15 8-13 12-14 13-10 16-8 15-5z"
  fill="#fff"
/>
<path
  transform="translate(1306,592)"
  d="m0 0h87v27h-57v53h46v28h-46v62h65v27h-95z"
  fill="#fff"
/>
<path
  transform="translate(1797,834)"
  d="m0 0h132v26l-1 1h-50v170h-31v-170h-50z"
  fill="#fff"
/>
<path
  transform="translate(1146,592)"
  d="m0 0h132v27h-51v170h-30v-170h-51z"
  fill="#fff"
/>
<path transform="translate(1362,834)" d="m0 0h30v197h-30z" fill="#fff" />
</svg> */}
// <svg

// width={width}
// height={height}
// viewBox={`0 0 ${width} ${height}`}
// preserveAspectRatio="none" // Removes proportional scaling
// style={{ width, height }}
// fill={fill}
// >
// <path
//   d="M874.563.101c-67.85 4.796-122.055 59.002-126.852 126.852-.375 5.295 3.805 9.803 9.112 9.803h118.41a9.135 9.135 0 0 0 9.135-9.135V9.213c0-5.308-4.507-9.485-9.802-9.113Zm166.39 127.66C1036.155 59.911 981.95 5.706 914.1.91c-5.295-.375-9.802 3.805-9.802 9.112v118.41a9.135 9.135 0 0 0 9.134 9.135h118.408c5.308 0 9.485-4.507 9.113-9.802Zm-10.84 28.34c-67.85 4.797-122.055 59.002-126.853 126.852-.375 5.295 3.805 9.803 9.113 9.803h118.41a9.135 9.135 0 0 0 9.135-9.135V165.213c0-5.307-4.507-9.485-9.802-9.112Zm-282.41 10.02c4.797 67.85 59.002 122.055 126.852 126.852 5.295.375 9.803-3.805 9.803-9.112v-118.41a9.135 9.135 0 0 0-9.135-9.135H756.815c-5.308 0-9.485 4.507-9.113 9.802Z"
//   transform={`scale(${scaleX}, ${scaleY})`}
// />
// <path
//   d="M1092.407 222.513h-8.595V173.19h-14.553v-7.586h37.857v7.586h-14.71Zm50.48 0h-27.49v-56.909h24.932v7.586h-16.337v15.72h13.161v7.741h-13.16v18.198h18.893Zm34.593.55q-6.81 0-12.113-2.324-5.3-2.322-8.976-6.39-3.685-4.056-5.577-9.29-1.9-5.223-1.9-11.103 0-6.429 2.126-11.77 2.136-5.34 6.007-9.25t9.212-6.077q5.341-2.176 11.77-2.176 4.175 0 7.428.853t5.341 1.901q2.088 1.05 2.637 1.666l-3.793 7.742q-2.097-1.862-5.155-3.018-3.057-1.166-7.164-1.166-5.34 0-9.633 2.636-4.302 2.626-6.81 7.428-2.52 4.802-2.52 11.378 0 5.811 2.166 10.574t6.39 7.625q4.214 2.861 10.26 2.861 3.323 0 6.537-.892 3.214-.882 6.625-2.979l2.548 7.36q-1 .931-3.4 1.97-2.402 1.048-5.538 1.744t-6.468.696m32.987-.549h-8.673v-56.909h8.673v23.226h20.05v-23.226h8.674v56.91h-8.673v-26.402h-20.05Zm-110.946 70.756q-6.429 0-11.809-2.244t-9.29-6.233-6.037-9.437q-2.127-5.459-2.127-11.81 0-6.27 2.166-11.534 2.166-5.272 6.115-9.143t9.37-5.998 11.847-2.127q5.028 0 8.703.892 3.685.892 5.89 1.93 2.205 1.05 2.822 1.667l-3.4 7.281q-.55-.47-2.176-1.39-1.627-.932-4.528-1.707t-7.467-.774q-6.35 0-10.84 2.744-4.488 2.754-6.889 7.4t-2.4 10.29q0 6.585 2.626 11.651 2.636 5.077 7.203 7.9 4.567 2.822 10.378 2.822 3.322 0 6.772-.843 3.45-.853 5.84-2.872V270.74h-11.68v-7.968h20.275v22.295q-2.548 3.254-8.046 5.733-5.497 2.47-13.318 2.47m40.72-.774h-8.664v-56.899h8.663Zm5.81 0 27.254-56.977h.853l27.4 56.977h-9.985l-4.88-11.143h-26.088l-4.88 11.143Zm27.793-40.484h-.156l-3.4 7.742-6.195 13.78h19.2l-6.117-13.7Zm75.411 40.484h-1.166l-33.29-36.848.235 6.193v30.655h-8.673v-56.977h1.088l33.437 37.318-.304-6.507v-30.733h8.673Zm31.517 0h-8.594v-49.314h-14.553v-7.585h37.857v7.585h-14.71Z"
//   transform={`scale(${scaleX}, ${scaleY})`}
// />
// </svg>
