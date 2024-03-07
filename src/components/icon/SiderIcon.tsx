import type { GetProps } from "antd";
import Icon from "@ant-design/icons";

type IconComponentProps = GetProps<typeof Icon>;

const LogoSvg = () => {
  return (
    <svg
      viewBox="0 0 1126 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M56.0128 219.5456C24.96 219.5456 0 197.2736 0 168.96V50.8416C0 19.7888 24.96-2.4832 56.0128 0.2304h711.3216c30.3616 0 56.0128 22.272 56.0128 50.6112v118.0928c0 28.3392-24.9856 50.6112-56.0128 50.6112H56.0128z m62.08-168.704c-28.3392 0-53.2992 25.6512-53.2992 53.2992 0 27.6736 25.6512 53.3248 53.2992 53.3248 27.6736 0 53.3248-22.272 53.3248-53.3248 0-27.648-22.272-53.2992-53.3248-53.2992z m-62.08 458.24C24.96 509.0816 0 484.096 0 458.4704v-118.1184c0-28.3392 24.96-50.6112 56.0128-50.6112h711.3216c30.3616 0 56.0128 22.272 56.0128 50.6112v118.1184c0 28.3392-24.9856 50.6112-56.0128 50.6112H56.0128zM118.0928 343.04a53.4272 53.4272 0 0 0-53.2992 53.2992c0 27.6736 25.6512 53.3248 53.2992 53.3248 27.6736 0 53.3248-22.272 53.3248-53.3248 0-27.648-22.272-53.2992-53.3248-53.2992z m317.184 307.0464c-95.1296 24.9856-179.5072 95.1552-184.9088 197.7344-2.688 103.936 53.3248 174.1312 53.3248 174.1312H50.6112c-47.9232 0-47.9232-47.9232-47.9232-47.9232V622.464c0-50.6368 47.9232-47.9232 47.9232-47.9232h432.5888c-36.4288 24.96-47.8976 75.5712-47.8976 75.5712z m577.024 92.4672s106.624 22.9376 105.2928 146.432c0 120.832-106.6496 134.9888-106.6496 134.9888H425.856s-112.7168-25.6512-112.7168-163.328 131.584-154.5472 176.8192-140.3648c0 0-16.896-87.04 72.8832-112.6912 0 0 70.1952-19.584 120.8064 28.3392 0 0 75.5712-115.4048 222.0288-62.1056 145.7664 56.0384 106.624 168.7296 106.624 168.7296z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const TransmissionSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M512.1 64.2C265.2 64.2 64.3 265.1 64.3 512s200.9 447.8 447.8 447.8S959.9 758.9 959.9 512 759 64.2 512.1 64.2z m0 846C292.6 910.2 114 731.6 114 512.1 114 292.6 292.6 114 512.1 114c219.5 0 398.1 178.6 398.1 398.1 0 219.5-178.6 398.1-398.1 398.1z"
        fill="currentColor"
      ></path>
      <path
        d="M468.8 616.9l-48.9 48.9V439.6c0-14.5-11.8-26.3-26.3-26.3s-26.3 11.8-26.3 26.3v226.2l-48.9-48.9c-10.3-10.3-27-10.3-37.3 0-10.3 10.3-10.3 27 0 37.3l93.8 93.8c1.2 1.2 2.6 2.3 4 3.3 0.7 0.4 1.4 0.7 2 1.1 0.8 0.5 1.6 1 2.5 1.3 0.9 0.4 1.8 0.6 2.7 0.8 0.8 0.2 1.5 0.5 2.2 0.7 1.7 0.3 3.4 0.5 5.2 0.5s3.5-0.2 5.2-0.5c0.8-0.2 1.5-0.4 2.2-0.7 0.9-0.3 1.8-0.5 2.7-0.8 0.9-0.4 1.7-0.9 2.5-1.3 0.7-0.4 1.4-0.7 2-1.1 1.5-1 2.8-2.1 4-3.3l93.8-93.8c10.3-10.3 10.3-27 0-37.3-10.2-10.3-26.8-10.3-37.1 0z m192-340.8c-1.2-1.2-2.6-2.3-4-3.3-0.7-0.4-1.4-0.8-2.1-1.1-0.8-0.4-1.6-0.9-2.5-1.3-0.9-0.4-1.8-0.6-2.7-0.8-0.7-0.2-1.4-0.5-2.2-0.7-3.4-0.7-6.9-0.7-10.3 0-0.8 0.2-1.5 0.4-2.2 0.7-0.9 0.3-1.8 0.5-2.7 0.8-0.9 0.4-1.7 0.9-2.5 1.3-0.7 0.4-1.4 0.7-2.1 1.1-1.4 1-2.8 2.1-4 3.3L529.7 370c-10.3 10.3-10.3 27 0 37.3 5.1 5.1 11.9 7.7 18.6 7.7s13.5-2.6 18.6-7.7l48.9-48.9v226.2c0 14.5 11.8 26.3 26.3 26.3s26.3-11.8 26.3-26.3V358.3l48.9 48.9c5.1 5.1 11.9 7.7 18.6 7.7s13.5-2.6 18.6-7.7c10.3-10.3 10.3-27 0-37.3l-93.7-93.8z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const SettingSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M908.8 524.8l70.4-25.6v-32L902.4 448l-19.2-76.8 51.2-51.2c-6.4-12.8-12.8-19.2-12.8-32l-70.4 12.8c-12.8-19.2-32-44.8-44.8-64l32-64c-6.4-6.4-19.2-12.8-25.6-25.6l-64 38.4c-12.8-6.4-19.2-12.8-32-19.2s-25.6-12.8-32-19.2v-57.6c-12.8-6.4-19.2-6.4-32-12.8l-38.4 57.6C582.4 128 556.8 128 531.2 128L505.6 57.6h-32L460.8 128c-25.6 6.4-51.2 12.8-83.2 19.2l-44.8-51.2c-19.2 6.4-19.2 12.8-32 12.8l12.8 70.4c-19.2 12.8-44.8 32-64 44.8l-64-32c-6.4 6.4-12.8 19.2-25.6 25.6l38.4 64c-6.4 12.8-12.8 19.2-19.2 32-6.4 12.8-12.8 25.6-19.2 32l-70.4-6.4c-6.4 12.8-6.4 19.2-12.8 32l57.6 38.4c-6.4 25.6-6.4 51.2-12.8 76.8L51.2 512v32l89.6 32 19.2 76.8-51.2 44.8c6.4 12.8 12.8 19.2 12.8 32l70.4-12.8c12.8 19.2 32 44.8 44.8 64l-32 64c6.4 6.4 19.2 12.8 25.6 25.6l64-38.4c12.8 6.4 19.2 12.8 32 19.2s25.6 12.8 32 19.2l-6.4 70.4c12.8 6.4 19.2 6.4 32 12.8l38.4-57.6c25.6 6.4 51.2 6.4 76.8 12.8l25.6 70.4h32l12.8-70.4 76.8-19.2 51.2 51.2c12.8-6.4 19.2-12.8 32-12.8l-12.8-70.4c19.2-12.8 44.8-32 64-44.8l64 32c6.4-6.4 12.8-19.2 25.6-25.6l-38.4-64c6.4-12.8 12.8-19.2 19.2-32s12.8-25.6 19.2-32l70.4 6.4c6.4-12.8 6.4-19.2 12.8-32l-57.6-38.4c6.4-51.2 6.4-76.8 12.8-102.4z m-569.6 256c-140.8-96-192-288-102.4-441.6 25.6-44.8 57.6-83.2 102.4-108.8l108.8 192c-12.8 12.8-19.2 25.6-25.6 32-25.6 44.8-19.2 102.4 12.8 140.8l-96 185.6z m467.2-108.8c-89.6 153.6-275.2 204.8-428.8 134.4l108.8-192c51.2 12.8 102.4-6.4 128-51.2 6.4-12.8 12.8-19.2 12.8-32h217.6c0 51.2-19.2 96-38.4 140.8zM460.8 473.6c19.2-32 64-44.8 96-25.6 32 19.2 44.8 64 25.6 96-19.2 32-64 44.8-96 25.6-32-19.2-44.8-57.6-25.6-96z m160 12.8c-6.4-32-25.6-57.6-51.2-70.4-19.2-19.2-51.2-19.2-83.2-12.8l-108.8-192c96-44.8 211.2-44.8 307.2 12.8 96 57.6 160 160 166.4 262.4H620.8z"></path>
    </svg>
  );
};

const ImageSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M256 298.666667a85.333333 85.333333 0 1 1 85.333333 85.333333 85.333333 85.333333 0 0 1-85.333333-85.333333z m674.133333 415.146666l-256-341.333333a32.426667 32.426667 0 0 0-51.2 0l-170.666666 220.586667a21.333333 21.333333 0 0 1-33.28 0l-93.44-113.493334a32 32 0 0 0-49.92 0l-181.333334 234.24a42.666667 42.666667 0 0 0-8.96 26.026667v38.826667a32.426667 32.426667 0 0 0 32 32h789.333334a32.426667 32.426667 0 0 0 32-32v-39.253334a42.666667 42.666667 0 0 0-8.533334-25.6z"></path>
    </svg>
  );
};

const DocumentSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M576 96H272c-44.184 0-80 35.816-80 80v672c0 44.184 35.816 80 80 80h480c44.184 0 80-35.816 80-80V352L576 96z m-32 288V160l224 224H544z"></path>
    </svg>
  );
};

const VideoSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M770.2784 232.6528V276.48h-68.992V231.936H322.2272v44.544H253.2352V232.6528C233.9584 228.608 217.6768 228.7104 204.8 243.712v536.5248c12.544 14.336 28.5952 14.976 46.72 11.6992l1.9712-20.48h67.7632l1.6384 20.48h377.728l1.6384-20.48h67.7632l1.9712 20.48c18.0992 3.2768 34.176 2.6368 46.72-11.6992V243.712c-12.8768-15.0016-29.1584-15.104-48.4352-11.0592zM253.4656 349.2352h67.3792v67.3792H253.4656v-67.3792z m67.712 348.3136H253.2352v-66.3296h67.9424v66.3296z m0.1536-140.032h-67.84v-68.096h67.84v68.096z m288.9728-37.632a10114.4064 10114.4064 0 0 1-154.88 89.5232c-15.2576 8.6272-27.0336 0.5888-27.1872-17.2544-0.256-28.928-0.0512-57.8816-0.0512-86.8096 0-28.416-0.128-56.8576 0.0512-85.2992 0.1024-18.8672 11.648-27.2384 27.648-18.2272a8108.2624 8108.2624 0 0 1 154.88 89.6512c12.3904 7.3216 12.0832 21.0432-0.4608 28.416z m92.3648-170.6496h67.3536v67.3792h-67.3536v-67.3792z m-0.512 208.2816v-68.096h67.8656v68.096h-67.84z m68.096 140.032h-67.9424v-66.3296h67.968v66.3296z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const AudioSvg = () => {
  return (
    <svg
      viewBox="0 0 1045 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M981.356412 475.455702c0-121.426008-50.544027-232.662982-141.563391-323.722459-91.059477-91.059477-212.445371-131.494699-343.980184-131.494699-131.494699 0-242.771787 40.435222-343.94007 131.494699C70.962209 242.79272 20.418182 343.920889 20.418182 475.455702v333.79115c0 50.584141 10.068691 80.910558 50.544027 121.385894 30.326416 30.366531 70.841867 50.584141 121.385894 50.584141H263.149855c60.733061 0 101.168283-50.584141 101.168283-101.168282v-232.662982c0-50.544027-50.584141-101.128168-101.168283-101.128169H161.981573v-70.801752c0-91.059477 30.366531-161.86123 101.168282-222.554176 70.841867-70.841867 151.752424-101.168283 242.771788-101.168283 91.059477 0 171.970035 30.326416 232.703096 91.059477 60.692947 60.692947 101.168283 141.603504 101.168282 222.514062v70.841867h-91.059477c-60.692947 0-101.168283 40.435222-101.168283 101.128168v232.662982c0 50.584141 50.584141 101.168283 101.168283 101.168283h60.692947c50.584141 0 91.019363-20.257725 121.385893-50.584142 30.326416-30.366531 50.544027-70.801752 50.544028-121.385893v-323.682345z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const UploadSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M768 841.142857c0-20.004571-16.566857-36.571429-36.571429-36.571428s-36.571429 16.566857-36.571428 36.571428 16.566857 36.571429 36.571428 36.571429 36.571429-16.566857 36.571429-36.571429z m146.285714 0c0-20.004571-16.566857-36.571429-36.571428-36.571428s-36.571429 16.566857-36.571429 36.571428 16.566857 36.571429 36.571429 36.571429 36.571429-16.566857 36.571428-36.571429z m73.142857-128v182.857143a54.857143 54.857143 0 0 1-54.857142 54.857143h-841.142858A54.857143 54.857143 0 0 1 36.571429 896v-182.857143A54.857143 54.857143 0 0 1 91.428571 658.285714h244.004572c15.433143 42.276571 55.990857 73.142857 103.424 73.142857h146.285714c47.433143 0 87.990857-30.866286 103.424-73.142857H932.571429a54.857143 54.857143 0 0 1 54.857142 54.857143zM801.718857 342.857143A36.644571 36.644571 0 0 1 768 365.714286h-146.285714v256c0 20.004571-16.566857 36.571429-36.571429 36.571428h-146.285714c-20.004571 0-36.571429-16.566857-36.571429-36.571428v-256H256c-14.848 0-28.013714-9.142857-33.718857-22.857143a35.254857 35.254857 0 0 1 8.009143-39.424l256-256C493.129143 40.009143 502.857143 36.571429 512 36.571429s18.870857 3.437714 25.709714 10.861714l256 256a35.254857 35.254857 0 0 1 8.009143 39.424z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const DownloadSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M432 0h160c26.6 0 48 21.4 48 48v336h175.4c35.6 0 53.4 43 28.2 68.2L539.4 756.6c-15 15-39.6 15-54.6 0L180.2 452.2c-25.2-25.2-7.4-68.2 28.2-68.2H384V48c0-26.6 21.4-48 48-48z m592 752v224c0 26.6-21.4 48-48 48H48c-26.6 0-48-21.4-48-48V752c0-26.6 21.4-48 48-48h293.4l98 98c40.2 40.2 105 40.2 145.2 0l98-98H976c26.6 0 48 21.4 48 48z m-248 176c0-22-18-40-40-40s-40 18-40 40 18 40 40 40 40-18 40-40z m128 0c0-22-18-40-40-40s-40 18-40 40 18 40 40 40 40-18 40-40z"></path>
    </svg>
  );
};

const SucceedSvg = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M229.391 829.44C107.931 821.068 12 719.867 12 596.256c0-129.093 104.63-233.743 233.696-233.743 6.147 0 12.238 0.237 18.265 0.703C302.773 264.151 399.196 194 512 194c112.804 0 209.227 70.151 248.039 169.216a236.89 236.89 0 0 1 18.265-0.703c129.067 0 233.696 104.65 233.696 233.743S907.37 830 778.304 830H229.391v-0.56z m221.26-205.279L382.77 556.28c-20.308-20.307-53.232-20.307-73.54 0-20.307 20.307-20.307 53.232 0 73.54L413.882 734.47c10.154 10.154 23.462 15.23 36.77 15.23 13.308 0 26.616-5.076 36.77-15.23l209.303-209.303c20.307-20.308 20.307-53.232 0-73.54-20.307-20.307-53.232-20.307-73.54 0L450.653 624.161z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const SyncSvg = () => {
  return (
    <svg
      viewBox="0 0 1471 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
    >
      <path
        d="M1162.190291 440.419417c-6.959223 0-12.924272-4.970874-14.912621-10.935922-0.994175-2.982524-1.98835-5.965049-1.98835-8.947573-1.98835-7.953398 2.982524-15.906796 9.941748-17.895145 7.953398-1.98835 15.906796 2.982524 17.895146 9.941747 0.994175 2.982524 1.98835 6.959223 2.982524 9.941748 1.98835 7.953398-2.982524 15.906796-10.935922 17.895145h-2.982525z m-24.854369-75.557281c-5.965049 0-11.930097-3.976699-13.918446-8.947573-0.994175-2.982524-1.98835-5.965049-3.976699-8.947573-2.982524-7.953398 0-15.906796 7.953398-19.883495 7.953398-2.982524 15.906796 0 19.883495 7.953398 0.994175 2.982524 2.982524 5.965049 3.976699 9.941748 2.982524 7.953398-0.994175 15.906796-7.953398 19.883495h-5.965049z m-36.784466-70.586408c-4.970874 0-9.941748-1.98835-12.924272-6.959223-1.98835-2.982524-3.976699-4.970874-4.970873-7.953398-4.970874-6.959223-2.982524-15.906796 3.976699-20.87767s15.906796-2.982524 20.87767 3.976699l5.965048 8.947573c4.970874 6.959223 2.982524 15.906796-3.976699 20.87767-3.976699 1.98835-5.965049 1.98835-8.947573 1.988349z m-50.702912-60.64466c-3.976699 0-6.959223-0.994175-9.941748-3.976699-1.98835-1.98835-4.970874-3.976699-6.959223-5.965049-5.965049-4.970874-6.959223-14.912621-0.994175-20.87767 4.970874-5.965049 14.912621-6.959223 20.87767-0.994174 2.982524 1.98835 4.970874 4.970874 7.953398 6.959223 5.965049 5.965049 5.965049 14.912621 0.994175 20.87767-3.976699 2.982524-7.953398 3.976699-11.930097 3.976699z m-64.62136-45.732039c-1.98835 0-4.970874-0.994175-6.959223-1.988349-2.982524-1.98835-5.965049-2.982524-8.947573-3.976699-6.959223-3.976699-9.941748-12.924272-6.959223-19.883496 3.976699-6.959223 12.924272-9.941748 19.883495-6.959223 2.982524 1.98835 5.965049 2.982524 8.947573 4.970874 6.959223 3.976699 9.941748 12.924272 5.965049 19.883495-1.98835 4.970874-6.959223 7.953398-11.930098 7.953398z m-73.568932-29.825243c-0.994175 0-2.982524 0-3.976699-0.994174-2.982524-0.994175-5.965049-1.98835-8.947572-1.98835-7.953398-1.98835-12.924272-9.941748-10.935923-17.895145 1.98835-7.953398 9.941748-12.924272 17.895146-10.935923 2.982524 0.994175 6.959223 1.98835 9.941747 2.982524 7.953398 1.98835 12.924272 9.941748 9.941748 17.895146-1.98835 6.959223-7.953398 10.935922-13.918447 10.935922z m-78.539805-13.918446h-0.994175c-2.982524 0-5.965049-0.994175-9.941748-0.994175-7.953398-0.994175-13.918447-7.953398-13.918446-15.906796 0.994175-7.953398 7.953398-14.912621 15.906796-13.918447 2.982524 0 6.959223 0.994175 9.941747 0.994175 7.953398 0.994175 13.918447 7.953398 13.918447 15.906796-0.994175 8.947573-6.959223 13.918447-14.912621 13.918447z m-89.475729-0.994175c-7.953398 0-14.912621-5.965049-14.912621-13.918447 0-7.953398 5.965049-14.912621 13.918447-15.906796h9.941747c7.953398 0 14.912621 5.965049 15.906796 13.918447 0 7.953398-5.965049 14.912621-13.918446 15.906796h-10.935923c0.994175 0 0 0 0 0zM616.38835 759.549515h-10.935923c-7.953398 0-14.912621-6.959223-13.918446-15.906797 0-7.953398 7.953398-14.912621 15.906796-13.918446h9.941747c7.953398 0 14.912621 6.959223 13.918447 15.906796 0 7.953398-6.959223 13.918447-14.912621 13.918447z m-78.539806-7.953398h-2.982525c-2.982524-0.994175-6.959223-0.994175-9.941747-1.98835-7.953398-1.98835-12.924272-9.941748-10.935922-17.895146 1.98835-7.953398 9.941748-12.924272 17.895145-10.935922 2.982524 0.994175 5.965049 0.994175 8.947573 1.98835 7.953398 1.98835 12.924272 8.947573 11.930097 17.895145-1.98835 5.965049-7.953398 10.935922-14.912621 10.935923z m-76.551457-23.860195c-1.98835 0-3.976699 0-5.965048-0.994174-2.982524-1.98835-5.965049-2.982524-9.941748-4.970874-6.959223-3.976699-9.941748-12.924272-5.965048-19.883495s12.924272-9.941748 19.883495-5.965049c2.982524 0.994175 5.965049 2.982524 7.953398 3.976699 7.953398 3.976699 10.935922 11.930097 6.959223 19.883495-1.98835 4.970874-6.959223 7.953398-12.924272 7.953398z m-64.621359-45.732039c-3.976699 0-7.953398-1.98835-10.935922-4.970873-1.98835-2.982524-4.970874-4.970874-6.959223-7.953398-4.970874-5.965049-4.970874-15.906796 0.994174-20.87767s15.906796-4.970874 20.87767 0.994175c1.98835 1.98835 3.976699 4.970874 5.965049 6.959223 5.965049 5.965049 5.965049 14.912621 0 20.87767-1.98835 3.976699-5.965049 4.970874-9.941748 4.970873zM353.926214 616.38835c-5.965049 0-10.935922-2.982524-13.918447-8.947573-0.994175-2.982524-2.982524-5.965049-3.976699-9.941748-2.982524-7.953398 0.994175-15.906796 8.947573-18.88932 7.953398-2.982524 15.906796 0.994175 18.88932 8.947573 0.994175 2.982524 1.98835 5.965049 3.976699 8.947572 2.982524 7.953398 0 15.906796-7.953398 19.883496h-5.965048z m-21.871845-76.551457c-6.959223 0-13.918447-4.970874-14.912621-12.924272-0.994175-2.982524-0.994175-6.959223-0.994175-9.941747-0.994175-7.953398 4.970874-15.906796 12.924272-16.900971 7.953398-0.994175 15.906796 4.970874 16.900971 12.924272 0 2.982524 0.994175 5.965049 0.994174 9.941747 0.994175 7.953398-3.976699 15.906796-12.924272 16.900971h-1.988349z m-4.970874-78.539806c-7.953398 0-14.912621-6.959223-14.912621-14.912621v-9.941748c0-7.953398 6.959223-14.912621 14.912621-14.912621s14.912621 6.959223 14.912622 14.912621v9.941748c0 7.953398-6.959223 14.912621-14.912622 14.912621z"
        fill="#C5DCFA"
      ></path>
      <path
        d="M1091.603883 254.508738m-35.790291 0a35.790291 35.790291 0 1 0 71.580583 0 35.790291 35.790291 0 1 0-71.580583 0Z"
        fill="#FFFFFF"
      ></path>
      <path
        d="M1091.603883 305.21165C1063.76699 305.21165 1040.900971 282.345631 1040.900971 254.508738S1063.76699 203.805825 1091.603883 203.805825s50.702913 22.866019 50.702913 50.702913-22.866019 50.702913-50.702913 50.702912z m0-71.580582c-11.930097 0-20.87767 9.941748-20.877669 20.87767 0 11.930097 9.941748 20.87767 20.877669 20.87767 11.930097 0 20.87767-9.941748 20.87767-20.87767 0-11.930097-9.941748-20.87767-20.87767-20.87767z"
        fill="#C5DCFA"
      ></path>
      <path
        d="M343.984466 566.679612m-35.790291 0a35.790291 35.790291 0 1 0 71.580582 0 35.790291 35.790291 0 1 0-71.580582 0Z"
        fill="#FFFFFF"
      ></path>
      <path
        d="M343.984466 617.382524C316.147573 617.382524 293.281553 594.516505 293.281553 566.679612S316.147573 515.976699 343.984466 515.976699s50.702913 22.866019 50.702913 50.702913-22.866019 50.702913-50.702913 50.702912z m0-71.580582c-11.930097 0-20.87767 9.941748-20.87767 20.87767 0 11.930097 9.941748 20.87767 20.87767 20.87767s20.87767-9.941748 20.87767-20.87767c0-11.930097-8.947573-20.87767-20.87767-20.87767z"
        fill="#C5DCFA"
      ></path>
      <path
        d="M1471.378641 965.343689v20.87767c0 18.88932-15.906796 34.796117-36.784466 34.796117H697.91068c-19.883495 0-36.784466-15.906796-36.784466-34.796117v-20.87767H994.174757c2.982524 7.953398 10.935922 13.918447 19.883495 13.918447h104.38835c8.947573 0 16.900971-5.965049 19.883495-13.918447H1471.378641z"
        fill="#2767F4"
      ></path>
      <path
        d="M1471.378641 965.343689c0 18.88932-16.900971 34.796117-36.784466 34.796117H697.91068c-19.883495 0-36.784466-15.906796-36.784466-34.796117H994.174757c2.982524 7.953398 10.935922 13.918447 19.883495 13.918447h104.38835c8.947573 0 16.900971-5.965049 19.883495-13.918447H1471.378641z"
        fill="#3973F4"
      ></path>
      <path
        d="M1429.623301 965.343689H702.881553V526.912621c0-26.842718 21.871845-48.714563 48.714564-48.714563h629.312621c26.842718 0 48.714563 21.871845 48.714563 48.714563v438.431068z"
        fill="#4988FD"
      ></path>
      <path
        d="M1248.683495 967.332039H737.67767V516.970874h655.161165v450.361165h-68.598058M737.67767 516.970874h655.161165"
        fill="#FFFFFF"
      ></path>
      <path
        d="M113.335922 170.998058C50.702913 170.998058 0 221.700971 0 284.333981c0 27.836893 9.941748 52.691262 25.848544 72.574757 20.87767 24.854369 51.697087 40.761165 87.487378 40.761165h482.174758c14.912621 0 27.836893-2.982524 40.761165-7.953398 42.749515-15.906796 72.574757-57.662136 72.574757-105.382524 0-53.685437-36.784466-98.423301-86.493204-110.353398v-6.959224C622.353398 79.533981 551.76699 8.947573 464.279612 8.947573c-56.667961 0-105.382524 29.825243-133.219418 73.568932C309.18835 68.598058 282.345631 59.650485 253.514563 59.650485c-67.603883 0.994175-124.271845 47.720388-140.178641 111.347573z"
        fill="#DFECFD"
      ></path>
    </svg>
  );
};

export const LogoIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={LogoSvg} {...props} />
);

export const TransmissionIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={TransmissionSvg} {...props} />
);

export const SettingIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={SettingSvg} {...props} />
);

export const ImageIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={ImageSvg} {...props} />
);

export const DocumentIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={DocumentSvg} {...props} />
);

export const VideoIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={VideoSvg} {...props} />
);

export const AudioIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={AudioSvg} {...props} />
);

export const UploadIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={UploadSvg} {...props} />
);

export const DownloadIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={DownloadSvg} {...props} />
);

export const SucceedIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={SucceedSvg} {...props} />
);

export const SyncIcon = (props: Partial<IconComponentProps>) => (
  <Icon component={SyncSvg} {...props} />
);
