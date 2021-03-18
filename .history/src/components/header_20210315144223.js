import React from 'react';
import logo from '../logodhomes.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {/* prettier-ignore */}
      <img src={logo} className="w-10" alt="logo" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" width="196.505" height="58.601"><defs><linearGradient id="a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#ff6c00"/><stop offset="1" stopColor="#ff9500"/></linearGradient></defs><g data-name="logo DHome-01"><g data-name="Group 41887" fill="#61657e"><path data-name="Path 41307" d="M91.311 43.263c0 .516-.345.933-1.035 1.24a4.8 4.8 0 01-1.968.466 4.55 4.55 0 01-3.105-1.138 4.5 4.5 0 01-1.293-3.572q0-1.088.2-3.367t.622-5.851q-5.229.413-9.479.466-.258 2.332-.379 4.144t-.129 3.208c0 .485 0 .933.027 1.346s.042.8.076 1.138a7.408 7.408 0 00.155 1.4c.034.14.061.243.08.311a.974.974 0 01.023.209 1.34 1.34 0 01-.827 1.138 3.932 3.932 0 01-1.866.466 4.209 4.209 0 01-2.848-1.088 4.3 4.3 0 01-1.24-3.413q0-1.919.777-8.387a93.274 93.274 0 00.758-10.871 32.228 32.228 0 00-.155-3.367 21.889 21.889 0 00-.311-2.275 6.771 6.771 0 01-.155-1.035c0-.622.554-.929 1.657-.929a6.621 6.621 0 014.247 1.24 3.883 3.883 0 011.559 3.155q0 .413-.284 3t-.857 7.352q2.8-.155 5.153-.379t4.323-.6q.315-3.936.311-6.215a33.224 33.224 0 00-.155-3.363 22.661 22.661 0 00-.311-2.275 6.909 6.909 0 01-.155-1.035q0-.933 1.657-.933a7.072 7.072 0 014.349 1.244 3.792 3.792 0 011.615 3.094q0 1.555-1.084 9.68a100.9 100.9 0 00-1.088 11.375 8.342 8.342 0 00.311 2.487 4.027 4.027 0 00.622 1.4 1.577 1.577 0 01.311.519z"/><path data-name="Path 41308" d="M108.239 13.286a6.859 6.859 0 014.815 1.657 8.486 8.486 0 014.865 4.368 17.729 17.729 0 011.865 8.592q0 7.583-3.625 12.323a11.7 11.7 0 01-9.786 4.815 10.689 10.689 0 01-8.436-3.727q-3.261-3.727-3.261-9.942a21.756 21.756 0 011.809-8.7 17.108 17.108 0 014.971-6.677 10.709 10.709 0 016.825-2.59zm5.532 15.326q0-9.168-5.843-11.955-2.654 1.194-4.66 5.126a19.66 19.66 0 00-2.01 9 14.865 14.865 0 001.706 7.508q1.706 2.958 4.4 2.95 3.056 0 4.762-3.727a21.162 21.162 0 001.71-8.854z"/><path data-name="Path 41309" d="M142.828 40.209c0-.69.049-1.6.155-2.719s.239-2.491.413-4.114.318-3.033.44-4.273.216-2.275.284-3.132c-.068.106-.182.311-.337.622s-.379.724-.645 1.244-.512.948-.7 1.293-.334.6-.44.758a6.217 6.217 0 00-.379.724l-.6 1.213-.622 1.244a9.046 9.046 0 00-.413.933c-.106.277-.216.576-.337.906s-.269.679-.44 1.058a17.859 17.859 0 00-.777 2.23c-.1.379-.2.732-.284 1.062s-.163.664-.231 1.009a1.585 1.585 0 01-1.763 1.4 3.787 3.787 0 01-3.31-2.328 33.345 33.345 0 01-2.54-6.783 44.439 44.439 0 00-2.173-6.366q-.379 3.625-.519 6.419t-.155 4.815a17.5 17.5 0 00.262 3.105 16.033 16.033 0 00.466 1.968 7.209 7.209 0 01.258.724c0 .447-.379.83-1.088 1.137a5.468 5.468 0 01-2.173.466q-3 0-3-4.5 0-1.9.777-8.387a93.207 93.207 0 00.758-10.871 32.164 32.164 0 00-.155-3.363 21.579 21.579 0 00-.311-2.275 6.727 6.727 0 01-.152-1.035q0-.933 1.653-.933a6.957 6.957 0 015.593 2.794 16.009 16.009 0 012.176 4.3q.518 1.393 1.035 3.033c.345 1.092.705 2.252 1.084 3.5a56.147 56.147 0 001.9 5.627c.209-.447.542-1.1 1.009-1.968s1.043-1.949 1.737-3.261q2.07-3.883 3.413-6.988a25.432 25.432 0 001.706-5.748q.053-1.24.933-1.24a7.088 7.088 0 014.349 1.24 3.758 3.758 0 011.657 3.109q0 1.551-1.088 9.68a99.834 99.834 0 00-1.084 11.375 8.342 8.342 0 00.311 2.484 4.171 4.171 0 00.618 1.4 1.516 1.516 0 01.311.516q0 .777-1.035 1.244a4.8 4.8 0 01-1.968.466 4.208 4.208 0 01-4.4-4.713z"/><path data-name="Path 41310" d="M164.775 31.824c-1.137 0-2.434-.049-3.883-.155q-.482 5.384-.482 7.868a14.03 14.03 0 013.883-.466h.853a11.378 11.378 0 011.217.049 11.819 11.819 0 001.244.053h.88a7.022 7.022 0 002.226-.311 5.935 5.935 0 001.4-.622 1.653 1.653 0 01.622-.311c.379 0 .671.277.88.83a4.834 4.834 0 01.311 1.6 5.092 5.092 0 01-1.088 3.212 4.136 4.136 0 01-3.469 1.4 21.76 21.76 0 01-4.194-.516 20.935 20.935 0 00-3.625-.519 15.618 15.618 0 00-2.654.209 12.033 12.033 0 01-1.517.193 3.31 3.31 0 01-2.176-.88 3.915 3.915 0 01-.982-3.105q0-1.919.758-8.387a92.52 92.52 0 00.777-10.871v-1.7a12.36 12.36 0 00-.049-1.4c-.072-.861-.121-1.464-.155-1.809a2.2 2.2 0 01-.053-.466v-.311q0-1.71 2.173-1.71a8.722 8.722 0 01.959.08c.432.049.993.11 1.684.178s1.327.133 1.915.182 1.156.08 1.71.08a48.051 48.051 0 005.9-.311 24.1 24.1 0 003.409-.622 7.107 7.107 0 011.138-.311c.379 0 .569.413.569 1.244q0 2.844-1.866 3.932a9.942 9.942 0 01-5.02 1.088 42.989 42.989 0 01-5.282-.466q-.618 3.833-1.244 9.165 1.517-.053 2.772-.155a34.622 34.622 0 002.305-.258 14.788 14.788 0 002.9-.622c.277-.1.527-.209.758-.311s.425-.19.6-.258a2.7 2.7 0 01.88-.258c.554 0 .83.428.83 1.293a3.682 3.682 0 01-1.191 2.848q-1.592 1.608-6.306 1.608z"/><path data-name="Path 41311" d="M180.15 31.717a3.568 3.568 0 011.873.485c.516.311.758.637.758.982a4.51 4.51 0 01-.622.933 3.682 3.682 0 00-.622 2.173 4.834 4.834 0 001.555 3.792 5.373 5.373 0 003.727 1.4 4.436 4.436 0 003.105-1.088 3.617 3.617 0 001.191-2.794 4.292 4.292 0 00-1.4-3.105 15.338 15.338 0 00-3.363-2.487q-.986-.569-1.941-1.138t-1.991-1.14a10.461 10.461 0 01-3.413-3.105 7.435 7.435 0 01-1.4-4.5 7.7 7.7 0 012.9-6.2 10.526 10.526 0 016.988-2.43 11.55 11.55 0 015.851 1.4 4.414 4.414 0 011.456 6.73q-1.035 1.244-1.862 1.244a.759.759 0 01-.519-.258 5.643 5.643 0 01-.618-.88c-.14-.209-.262-.4-.379-.573l-.3-.516q-2.275-3.223-5.123-3.223a3.115 3.115 0 00-2.381.83 2.851 2.851 0 00-.777 1.9 3.3 3.3 0 001.4 2.59 16.234 16.234 0 003.413 2.173q1.035.516 2.021 1.088t2.017 1.191a11.326 11.326 0 013.412 3.261 7.982 7.982 0 011.4 4.66 9.384 9.384 0 01-3.105 7.071q-3.105 2.95-8.6 2.95-4.929 0-7.454-2.328a7.386 7.386 0 01-2.527-5.651 5.364 5.364 0 011.657-4.194 5.176 5.176 0 013.519-1.517z"/></g><path data-name="Path 41312" d="M115.543 82.692A25.043 25.043 0 01100 99.978s-.03.03-.046.03c-.3.121-.618.228-.918.334a2.411 2.411 0 01-.664.076 3.352 3.352 0 01-3.3-2.757v-40.54h-27.6l17.442 4.956.288.072a3.348 3.348 0 012.226 2.651v38.675a3.193 3.193 0 01-.027.345 3.359 3.359 0 01-3.314 2.848 2.442 2.442 0 01-.482-.045l-.8-.212-15.409-4.2h-6.8a3.185 3.185 0 01-2.654-2.821V50.974a3.359 3.359 0 012.965-2.9h.724l27.679.03s11.341.106 19 7.515 9.671 16.881 7.233 27.073z" fill="url(#a)" transform="translate(-57.94 -48.07)"/></g></svg> */}
    </header>
  );
}

export default Header;
