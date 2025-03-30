import React from 'react';
import {
  BriefcaseIcon,
  MoonIcon,
  BellIcon,
  CogIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import ToggleButton from './ToggleButton';
// Placeholder for LanguageIcon since the exact icon isn't available in Heroicons
const LanguageIcon = () => (
  <svg
    className="h-5 w-5 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5h18M9 3v2m6-2v2M3 19h18M9 21v-2m6 2v-2m-9-4h12M7 9h10m-7 4h4"
    />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-20 border-t flex justify-center items-center z-50">
      {/* Left Side: Logo */}
      <div className='w-60 block'>
        <div className="p-4">
          <div className="rounded-md bg-[#F6F5F5]">
            <a
              href="/"
              className="flex items-center justify-center gap-3 px-4 py-3 text-sm border-2 rounded-md"
            >
              <img src="/logo.png" className='w-20' alt="" />
            </a>
          </div>
        </div>

      </div>

      {/* Right Side: RMS - Profiles and Icons */}
      <div className="flex-1 flex justify-between">
        {/* RMS - Profiles */}
        <div className="flex items-center rounded-md w-4/7 bg-[#0D468A] p-4">
          <svg width="16" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12.755C16.1405 13.9112 13.0844 14.5038 10 14.5C6.817 14.5 3.78 13.88 1 12.755M14 5.5V3.5C14 2.96957 13.7893 2.46086 13.4142 2.08579C13.0391 1.71071 12.5304 1.5 12 1.5H8C7.46957 1.5 6.96086 1.71071 6.58579 2.08579C6.21071 2.46086 6 2.96957 6 3.5V5.5M10 11.5H10.01M3 19.5H17C17.5304 19.5 18.0391 19.2893 18.4142 18.9142C18.7893 18.5391 19 18.0304 19 17.5V7.5C19 6.96957 18.7893 6.46086 18.4142 6.08579C18.0391 5.71071 17.5304 5.5 17 5.5H3C2.46957 5.5 1.96086 5.71071 1.58579 6.08579C1.21071 6.46086 1 6.96957 1 7.5V17.5C1 18.0304 1.21071 18.5391 1.58579 18.9142C1.96086 19.2893 2.46957 19.5 3 19.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span className="ml-2 text-xl text-white">
            RMS - Profiles
          </span>
        </div>

        {/* Icons */}
        <div className="flex justify-around items-center space-x-3 w-3/7 px-2">
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1136 11.1553C13.8179 11.6763 12.3975 11.8051 11.0291 11.5255C9.66078 11.246 8.40475 10.5704 7.41719 9.58286C6.42962 8.5953 5.75408 7.33927 5.47452 5.97091C5.19496 4.60255 5.32372 3.1822 5.8448 1.88642C4.31032 2.5045 3.03863 3.6371 2.24772 5.09007C1.45682 6.54304 1.19597 8.22588 1.50988 9.85011C1.82379 11.4743 2.69292 12.9388 3.96828 13.9924C5.24363 15.046 6.84577 15.6232 8.50005 15.625C9.92261 15.625 11.3126 15.1994 12.4913 14.4028C13.6699 13.6063 14.5832 12.4752 15.1136 11.1553Z" stroke="#433E3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <ToggleButton/>

          {/* Language Selector */}
          <button className="flex items-center text-white border border-gray-300 rounded-xl px-4 py-0.5 gap-2">
            <svg width="15" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33337 3.5H13.3334M7.33337 1.5V3.5M8.38137 13C6.84148 11.4059 5.60885 9.54132 4.74537 7.5M10.8334 16.5H17.8334M9.33337 19.5L14.3334 9.5L19.3334 19.5M11.0844 3.5C10.1164 9.27 6.40337 14.11 1.33337 16.629" stroke="#433E3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='text-[#6A6A6A] text-[13px]'>Eng</span>

          </button>

          {/* Notification Icon */}
          <div className="relative">
            <svg width="21" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15.552H17.5L16.095 14.147C15.9063 13.9583 15.7567 13.7343 15.6546 13.4877C15.5525 13.2411 15.5 12.9769 15.5 12.71V9.55202C15.5002 8.31096 15.1156 7.10037 14.3992 6.08691C13.6829 5.07346 12.67 4.30699 11.5 3.89302V3.55202C11.5 3.02159 11.2893 2.51288 10.9142 2.13781C10.5391 1.76274 10.0304 1.55202 9.5 1.55202C8.96957 1.55202 8.46086 1.76274 8.08579 2.13781C7.71071 2.51288 7.5 3.02159 7.5 3.55202V3.89302C5.17 4.71702 3.5 6.94002 3.5 9.55202V12.711C3.5 13.249 3.286 13.766 2.905 14.147L1.5 15.552H6.5M12.5 15.552V16.552C12.5 17.3477 12.1839 18.1107 11.6213 18.6733C11.0587 19.236 10.2956 19.552 9.5 19.552C8.70435 19.552 7.94129 19.236 7.37868 18.6733C6.81607 18.1107 6.5 17.3477 6.5 16.552V15.552M12.5 15.552H6.5" stroke="#363232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-orange-500 rounded-full">
              5
            </span>
          </div>

          {/* Settings Icon */}
          <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9178 9.51879H19.6411C19.4354 8.64483 19.1062 7.82725 18.6673 7.09425L20.272 5.445C20.4777 5.23356 20.4777 4.88116 20.272 4.66972L18.3107 2.65397C18.105 2.44253 17.7759 2.44253 17.5564 2.65397L15.9517 4.30322C15.2248 3.85214 14.4294 3.49974 13.5927 3.2883V0.962434C13.5927 0.666416 13.3596 0.412685 13.0578 0.412685H10.2737C9.98565 0.412685 9.73878 0.652319 9.73878 0.962434V3.30239C8.88844 3.51384 8.09296 3.85214 7.37977 4.31731L5.77509 2.66807C5.56937 2.45662 5.22649 2.45662 5.02076 2.66807L3.05949 4.66972C2.85377 4.88116 2.85377 5.21947 3.05949 5.445L4.66417 7.09425C4.22528 7.84135 3.8824 8.65892 3.67668 9.51879H1.41368C1.12566 9.51879 0.878784 9.75842 0.878784 10.0685V12.9301C0.878784 13.2261 1.11194 13.4798 1.41368 13.4798H3.69039C3.89612 14.3538 4.22528 15.1713 4.67788 15.9043L3.07321 17.5536C2.86748 17.765 2.86748 18.1033 3.07321 18.3289L5.03448 20.3446C5.2402 20.5561 5.56937 20.5561 5.78881 20.3446L7.39348 18.6954C8.12039 19.1464 8.91587 19.4989 9.75249 19.7103V22.0503C9.75249 22.3463 9.98565 22.6 10.2874 22.6H13.0716C13.3596 22.6 13.6065 22.3604 13.6065 22.0503V19.7103C14.4568 19.4989 15.2523 19.1605 15.9655 18.6954L17.5701 20.3446C17.7759 20.5561 18.1187 20.5561 18.3245 20.3446L20.2857 18.3289C20.4915 18.1174 20.4915 17.765 20.2857 17.5536L18.6811 15.9043C19.1199 15.1572 19.4628 14.3397 19.6548 13.4798H21.9316C22.2196 13.4798 22.4664 13.2402 22.4664 12.9301V10.0685C22.439 9.77252 22.2059 9.51879 21.9178 9.51879ZM11.6589 17.4408C8.46327 17.4408 5.8711 14.7766 5.8711 11.4922C5.8711 8.20785 8.46327 5.54368 11.6589 5.54368C14.8545 5.54368 17.4467 8.20785 17.4467 11.4922C17.4467 14.7766 14.8545 17.4408 11.6589 17.4408Z" fill="#363232" />
          </svg>

          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2954 3.46008C13.6875 3.18985 13.0477 3.66903 13.0477 4.3343V5.13C13.0477 5.53204 13.2919 5.88901 13.6453 6.08061C14.1836 6.3724 14.6836 6.73759 15.1322 7.1715C16.4134 8.4105 17.1191 10.059 17.1191 11.8125C17.1191 13.566 16.4134 15.2132 15.1322 16.4535C13.8511 17.6925 12.1465 18.375 10.3334 18.375C8.52023 18.375 6.81702 17.6925 5.53452 16.4535C4.25337 15.2145 3.54766 13.566 3.54766 11.8125C3.54766 10.059 4.25337 8.41181 5.53452 7.1715C5.98318 6.73759 6.48312 6.3724 7.02141 6.08061C7.37486 5.88901 7.61909 5.53204 7.61909 5.13V4.3343C7.61909 3.66903 6.97928 3.18985 6.37137 3.46008C3.10337 4.9128 0.833374 8.10606 0.833374 11.8125C0.833374 16.8866 5.08666 21 10.3334 21C15.5801 21 19.8334 16.8866 19.8334 11.8125C19.8334 8.10606 17.5634 4.9128 14.2954 3.46008ZM8.97623 1C8.97623 0.447715 9.42395 0 9.97623 0H10.6905C11.2428 0 11.6905 0.447715 11.6905 1V9.5C11.6905 10.0523 11.2428 10.5 10.6905 10.5H9.97623C9.42395 10.5 8.97623 10.0523 8.97623 9.5V1Z" fill="#363232" />
          </svg>



          {/* User Profile */}
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;