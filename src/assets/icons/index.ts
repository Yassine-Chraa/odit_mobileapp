const height = 48;
const width = 48;
const left = 16;
const top = 16;
const home = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="home">
<path id="Stroke 1" d="M12.9999 1.7998L13.6724 1.01524C13.2854 0.683549 12.7144 0.683549 12.3274 1.01524L12.9999 1.7998ZM1.79993 11.3998L1.12744 10.6152L0.766593 10.9245V11.3998H1.79993ZM9.79993 24.1998V25.2331C10.3706 25.2331 10.8333 24.7705 10.8333 24.1998H9.79993ZM16.1999 24.1998H15.1666C15.1666 24.7705 15.6292 25.2331 16.1999 25.2331V24.1998ZM24.1999 11.3998H25.2333V10.9245L24.8724 10.6152L24.1999 11.3998ZM3.39993 25.2331H9.79993V23.1665H3.39993V25.2331ZM24.8724 10.6152L13.6724 1.01524L12.3274 2.58437L23.5274 12.1844L24.8724 10.6152ZM12.3274 1.01524L1.12744 10.6152L2.47241 12.1844L13.6724 2.58437L12.3274 1.01524ZM10.8333 24.1998V19.3998H8.76659V24.1998H10.8333ZM15.1666 19.3998V24.1998H17.2333V19.3998H15.1666ZM16.1999 25.2331H22.5999V23.1665H16.1999V25.2331ZM25.2333 22.5998V11.3998H23.1666V22.5998H25.2333ZM0.766593 11.3998V22.5998H2.83326V11.3998H0.766593ZM12.9999 17.2331C14.1965 17.2331 15.1666 18.2032 15.1666 19.3998H17.2333C17.2333 17.0618 15.3379 15.1665 12.9999 15.1665V17.2331ZM12.9999 15.1665C10.6619 15.1665 8.76659 17.0618 8.76659 19.3998H10.8333C10.8333 18.2032 11.8033 17.2331 12.9999 17.2331V15.1665ZM22.5999 25.2331C24.0543 25.2331 25.2333 24.0542 25.2333 22.5998H23.1666C23.1666 22.9128 22.9129 23.1665 22.5999 23.1665V25.2331ZM3.39993 23.1665C3.08697 23.1665 2.83326 22.9128 2.83326 22.5998H0.766593C0.766593 24.0542 1.94558 25.2331 3.39993 25.2331V23.1665Z" fill="#351900"/>
</g>
</svg>`;

const bell = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
<path d="M1.6001 17.8003H22.4001M4.0001 17.8003V9.80029C4.0001 5.38201 7.58182 1.80029 12.0001 1.80029C16.4184 1.80029 20.0001 5.38201 20.0001 9.80029V17.8003M8.8001 20.2003V21.0003C8.8001 22.7676 10.2328 24.2003 12.0001 24.2003C13.7674 24.2003 15.2001 22.7676 15.2001 21.0003V20.2003" stroke="#351900" stroke-width="2.06667"/>
</svg>`;
const plus = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M12.4996 1.59961V22.3996M2.09961 11.9996H22.8996" stroke="#160B00" stroke-width="1.53846"/>
</svg>`;
const search = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M23.2003 23.2003L16.8003 16.8003M10.4003 20.0003C5.09836 20.0003 0.800293 15.7022 0.800293 10.4003C0.800293 5.09836 5.09836 0.800293 10.4003 0.800293C15.7022 0.800293 20.0003 5.09836 20.0003 10.4003C20.0003 15.7022 15.7022 20.0003 10.4003 20.0003Z" stroke="#351900" stroke-width="1.46667"/>
</svg>
`;

const homeFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 56 56" fill="none">
<circle cx="28" cy="28" r="28" fill="#FADC3D"/>
<path transform="translate(${left}, ${15})" d="M12.9999 1.7998L13.6724 1.01524C13.2854 0.683549 12.7144 0.683549 12.3274 1.01524L12.9999 1.7998ZM1.7999 11.3998L1.12742 10.6152L0.766567 10.9245V11.3998H1.7999ZM9.7999 24.1998V25.2331C10.3706 25.2331 10.8332 24.7705 10.8332 24.1998H9.7999ZM16.1999 24.1998H15.1666C15.1666 24.7705 15.6292 25.2331 16.1999 25.2331V24.1998ZM24.1999 11.3998H25.2332V10.9245L24.8724 10.6152L24.1999 11.3998ZM3.3999 25.2331H9.7999V23.1665H3.3999V25.2331ZM24.8724 10.6152L13.6724 1.01524L12.3274 2.58437L23.5274 12.1844L24.8724 10.6152ZM12.3274 1.01524L1.12742 10.6152L2.47238 12.1844L13.6724 2.58437L12.3274 1.01524ZM10.8332 24.1998V19.3998H8.76657V24.1998H10.8332ZM15.1666 19.3998V24.1998H17.2332V19.3998H15.1666ZM16.1999 25.2331H22.5999V23.1665H16.1999V25.2331ZM25.2332 22.5998V11.3998H23.1666V22.5998H25.2332ZM0.766567 11.3998V22.5998H2.83323V11.3998H0.766567ZM12.9999 17.2331C14.1965 17.2331 15.1666 18.2032 15.1666 19.3998H17.2332C17.2332 17.0618 15.3379 15.1665 12.9999 15.1665V17.2331ZM12.9999 15.1665C10.6619 15.1665 8.76657 17.0618 8.76657 19.3998H10.8332C10.8332 18.2032 11.8033 17.2331 12.9999 17.2331V15.1665ZM22.5999 25.2331C24.0542 25.2331 25.2332 24.0542 25.2332 22.5998H23.1666C23.1666 22.9128 22.9129 23.1665 22.5999 23.1665V25.2331ZM3.3999 23.1665C3.08694 23.1665 2.83323 22.9128 2.83323 22.5998H0.766567C0.766567 24.0542 1.94555 25.2331 3.3999 25.2331V23.1665Z"
 fill="#351900"/>
</svg>`;

const bellFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 56 56" fill="none">
<circle cx="28" cy="28" r="28" fill="#FADC3D"/>
<path transform="translate(${left}, ${top})" d="M1.6001 17.8003H22.4001M4.0001 17.8003V9.80029C4.0001 5.38201 7.58182 1.80029 12.0001 1.80029C16.4184 1.80029 20.0001 5.38201 20.0001 9.80029V17.8003M8.8001 20.2003V21.0003C8.8001 22.7676 10.2328 24.2003 12.0001 24.2003C13.7674 24.2003 15.2001 22.7676 15.2001 21.0003V20.2003" stroke="#351900" stroke-width="2.06667"/>
</svg>`;

const plusFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 56 56" fill="none">
<circle cx="28" cy="28" r="28" fill="#FADC3D"/>
<path transform="translate(${left}, ${top})" d="M12.4996 1.59961V22.3996M2.09961 11.9996H22.8996" stroke="#160B00" stroke-width="1.53846"/>
</svg>`;

const searchFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 56 56" fill="none">
<circle cx="28" cy="28" r="28" fill="#FADC3D"/>
<path transform="translate(${left}, ${top})" d="M23.2003 23.2003L16.8003 16.8003M10.4003 20.0003C5.09836 20.0003 0.800293 15.7022 0.800293 10.4003C0.800293 5.09836 5.09836 0.800293 10.4003 0.800293C15.7022 0.800293 20.0003 5.09836 20.0003 10.4003C20.0003 15.7022 15.7022 20.0003 10.4003 20.0003Z" stroke="#351900" stroke-width="1.46667"/>
</svg>`;

export default {
  home,
  notifications: bell,
  addproject: plus,
  search,
  'home-focused': homeFocused,
  'notifications-focused': bellFocused,
  'addproject-focused': plusFocused,
  'search-focused': searchFocused,
} as {[key: string]: any};