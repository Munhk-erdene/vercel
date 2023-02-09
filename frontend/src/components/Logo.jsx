import React from "react";
import { Link } from "react-router-dom";
function Logo() {
  const Remove = () => {
    window.localStorage.clear();
  };
  return (
    <Link to="/">
      <div className="boginooLogo" onClick={Remove}>
        <svg
          width="184"
          height="118"
          viewBox="0 0 184 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6876 104.952C20.1943 104.952 18.8876 104.635 17.7676 104C16.685 103.403 16.1436 102.339 16.1436 100.808C16.1436 99.8373 16.3863 98.7547 16.8716 97.56C17.5436 98.3067 18.1596 98.8293 18.7196 99.128C19.317 99.4267 19.9516 99.576 20.6236 99.576C22.4903 99.576 23.8716 98.5307 24.7676 96.44C25.701 94.3493 26.1676 92.0347 26.1676 89.496C26.1676 84.7547 24.3943 82.384 20.8476 82.384C19.8396 82.384 18.981 82.44 18.2716 82.552L13.6796 104H5.61563L13.2316 68.384L21.5196 67.264L18.8876 79.696H19.2236C20.6423 79.696 21.9676 79.248 23.1996 78.352C24.4316 77.4187 25.421 76.2613 26.1676 74.88C26.9143 73.4613 27.2876 72.0427 27.2876 70.624C27.2876 68.9067 26.6716 67.4693 25.4396 66.312C24.245 65.1547 22.397 64.576 19.8956 64.576C17.6183 64.576 15.397 65.0987 13.2316 66.144C11.0663 67.152 9.29296 68.6827 7.91163 70.736C6.56763 72.7893 5.89563 75.272 5.89563 78.184C5.89563 79.5653 6.02629 80.536 6.28763 81.096C6.54896 81.6187 6.67963 81.9173 6.67963 81.992C4.70096 81.992 3.20763 81.6 2.19963 80.816C1.19163 79.9947 0.687625 78.6693 0.687625 76.84C0.687625 74.3013 1.63963 71.8933 3.54363 69.616C5.44763 67.3387 7.96763 65.5093 11.1036 64.128C14.2396 62.7093 17.5436 62 21.0156 62C23.629 62 25.8316 62.4107 27.6236 63.232C29.4156 64.0533 30.741 65.136 31.5996 66.48C32.4956 67.824 32.9436 69.2987 32.9436 70.904C32.9436 72.6213 32.4583 74.2827 31.4876 75.888C30.517 77.4933 29.1356 78.8 27.3436 79.808C29.5836 80.2187 31.245 81.264 32.3276 82.944C33.4103 84.5867 33.9516 86.5467 33.9516 88.824C33.9516 90.952 33.541 93.2667 32.7196 95.768C31.9356 98.2693 30.6103 100.435 28.7436 102.264C26.9143 104.056 24.5623 104.952 21.6876 104.952ZM44.0666 104.224C41.304 104.224 39.12 103.515 37.5146 102.096C35.9093 100.677 35.1066 98.4373 35.1066 95.376C35.1066 92.8373 35.6293 90.0187 36.6746 86.92C37.72 83.8213 39.4 81.152 41.7146 78.912C44.0293 76.6347 46.9413 75.496 50.4506 75.496C55.2293 75.496 57.6186 78.4827 57.6186 84.456V84.512C57.7306 84.5493 57.936 84.568 58.2346 84.568C59.4666 84.568 60.8853 84.2507 62.4906 83.616C64.096 82.944 65.552 82.1413 66.8586 81.208L67.3626 82.72C66.28 83.8773 64.8613 84.8667 63.1066 85.688C61.3893 86.472 59.504 87.032 57.4506 87.368C57.152 90.7653 56.3866 93.7333 55.1546 96.272C53.9226 98.8107 52.336 100.771 50.3946 102.152C48.4533 103.533 46.344 104.224 44.0666 104.224ZM46.3066 99.184C47.2026 99.184 48.0986 98.68 48.9946 97.672C49.8906 96.6267 50.6746 95.2267 51.3466 93.472C52.0186 91.68 52.504 89.7013 52.8026 87.536C51.7946 87.312 51.2906 86.528 51.2906 85.184C51.2906 83.6533 51.8693 82.6453 53.0266 82.16C52.952 80.928 52.7653 80.088 52.4666 79.64C52.168 79.1547 51.6453 78.912 50.8986 78.912C49.6666 78.912 48.472 79.808 47.3146 81.6C46.1573 83.392 45.224 85.5387 44.5146 88.04C43.8053 90.5413 43.4506 92.744 43.4506 94.648C43.4506 96.44 43.656 97.6533 44.0666 98.288C44.4773 98.8853 45.224 99.184 46.3066 99.184ZM70.412 118C68.62 118 67.1267 117.533 65.932 116.6C64.7373 115.667 64.14 114.323 64.14 112.568C64.14 110.44 64.9987 108.723 66.716 107.416C68.4333 106.147 70.6173 105.083 73.268 104.224L73.94 101.256C72.036 103.309 69.796 104.336 67.22 104.336C65.092 104.336 63.3187 103.608 61.9 102.152C60.4813 100.696 59.772 98.4187 59.772 95.32C59.772 92.5573 60.3133 89.664 61.396 86.64C62.516 83.5787 64.1587 81.0027 66.324 78.912C68.5267 76.784 71.14 75.72 74.164 75.72C75.6947 75.72 76.8333 75.9813 77.58 76.504C78.3267 77.0267 78.7 77.7173 78.7 78.576V78.912L79.316 76H87.38L81.836 101.984C83.628 101.387 85.0653 100.491 86.148 99.296C87.2307 98.1013 88.1453 96.328 88.892 93.976H91.244C90.236 97.2987 88.8733 99.744 87.156 101.312C85.4387 102.843 83.4973 103.888 81.332 104.448L80.492 108.48C79.7453 112.101 78.4573 114.584 76.628 115.928C74.7987 117.309 72.7267 118 70.412 118ZM70.86 98.904C71.7187 98.904 72.596 98.512 73.492 97.728C74.388 96.944 75.004 95.88 75.34 94.536L78.196 81.264C78.196 80.816 78.0093 80.368 77.636 79.92C77.2627 79.4347 76.684 79.192 75.9 79.192C74.4067 79.192 73.0627 80.0693 71.868 81.824C70.6733 83.5413 69.74 85.632 69.068 88.096C68.396 90.5227 68.06 92.6693 68.06 94.536C68.06 96.4027 68.3213 97.5973 68.844 98.12C69.404 98.6427 70.076 98.904 70.86 98.904ZM69.124 113.632C69.7587 113.632 70.3747 113.203 70.972 112.344C71.5693 111.485 72.036 110.253 72.372 108.648L72.708 107.024C69.0493 108.368 67.22 109.955 67.22 111.784C67.22 112.269 67.388 112.699 67.724 113.072C68.06 113.445 68.5267 113.632 69.124 113.632ZM98.2348 72.976C97.0028 72.976 95.9575 72.5467 95.0988 71.688C94.2401 70.8293 93.8108 69.784 93.8108 68.552C93.8108 67.32 94.2401 66.2747 95.0988 65.416C95.9575 64.52 97.0028 64.072 98.2348 64.072C99.4668 64.072 100.512 64.52 101.371 65.416C102.267 66.2747 102.715 67.32 102.715 68.552C102.715 69.784 102.267 70.8293 101.371 71.688C100.512 72.5467 99.4668 72.976 98.2348 72.976ZM94.4268 104.336C92.6348 104.336 91.1788 103.776 90.0588 102.656C88.9761 101.536 88.4348 99.856 88.4348 97.616C88.4348 96.6827 88.5841 95.4693 88.8828 93.976L92.6908 76H100.755L96.7228 95.04C96.5735 95.6 96.4988 96.1973 96.4988 96.832C96.4988 97.5787 96.6668 98.12 97.0028 98.456C97.3761 98.7547 97.9735 98.904 98.7948 98.904C99.8775 98.904 100.885 98.456 101.819 97.56C102.752 96.6267 103.424 95.432 103.835 93.976H106.187C104.805 98.008 103.032 100.752 100.867 102.208C98.7015 103.627 96.5548 104.336 94.4268 104.336ZM124.029 104.336C121.751 104.336 120.071 103.739 118.989 102.544C117.943 101.312 117.421 99.8 117.421 98.008C117.421 97.224 117.514 96.3467 117.701 95.376C117.887 94.368 118.074 93.3973 118.261 92.464C118.485 91.5307 118.634 90.9333 118.709 90.672C119.007 89.3653 119.287 88.0773 119.549 86.808C119.81 85.5387 119.941 84.512 119.941 83.728C119.941 81.824 119.269 80.872 117.925 80.872C116.954 80.872 116.095 81.3573 115.349 82.328C114.602 83.2613 114.005 84.4933 113.557 86.024L109.749 104H101.684L107.621 76H115.685L115.069 78.912C116.935 76.8213 119.119 75.776 121.621 75.776C123.525 75.776 125.037 76.2987 126.157 77.344C127.277 78.3893 127.837 79.976 127.837 82.104C127.837 83.1867 127.706 84.4 127.445 85.744C127.183 87.0507 126.81 88.656 126.325 90.56C126.026 91.7173 125.746 92.856 125.485 93.976C125.261 95.0587 125.149 95.9173 125.149 96.552C125.149 97.2987 125.317 97.8773 125.653 98.288C125.989 98.6987 126.567 98.904 127.389 98.904C128.509 98.904 129.405 98.512 130.077 97.728C130.749 96.9067 131.421 95.656 132.092 93.976H134.445C133.063 98.0827 131.458 100.845 129.629 102.264C127.837 103.645 125.97 104.336 124.029 104.336ZM140.262 104.224C137.499 104.224 135.315 103.515 133.71 102.096C132.105 100.677 131.302 98.4373 131.302 95.376C131.302 92.8373 131.825 90.0187 132.87 86.92C133.915 83.8213 135.595 81.152 137.91 78.912C140.225 76.6347 143.137 75.496 146.646 75.496C151.425 75.496 153.814 78.4827 153.814 84.456V84.512C153.926 84.5493 154.131 84.568 154.43 84.568C155.662 84.568 157.081 84.2507 158.686 83.616C160.291 82.944 161.747 82.1413 163.054 81.208L163.558 82.72C162.475 83.8773 161.057 84.8667 159.302 85.688C157.585 86.472 155.699 87.032 153.646 87.368C153.347 90.7653 152.582 93.7333 151.35 96.272C150.118 98.8107 148.531 100.771 146.59 102.152C144.649 103.533 142.539 104.224 140.262 104.224ZM142.502 99.184C143.398 99.184 144.294 98.68 145.19 97.672C146.086 96.6267 146.87 95.2267 147.542 93.472C148.214 91.68 148.699 89.7013 148.998 87.536C147.99 87.312 147.486 86.528 147.486 85.184C147.486 83.6533 148.065 82.6453 149.222 82.16C149.147 80.928 148.961 80.088 148.662 79.64C148.363 79.1547 147.841 78.912 147.094 78.912C145.862 78.912 144.667 79.808 143.51 81.6C142.353 83.392 141.419 85.5387 140.71 88.04C140.001 90.5413 139.646 92.744 139.646 94.648C139.646 96.44 139.851 97.6533 140.262 98.288C140.673 98.8853 141.419 99.184 142.502 99.184ZM164.871 104.224C162.109 104.224 159.925 103.515 158.319 102.096C156.714 100.677 155.911 98.4373 155.911 95.376C155.911 92.8 156.415 89.9813 157.423 86.92C158.431 83.8213 160.074 81.152 162.351 78.912C164.629 76.6347 167.541 75.496 171.087 75.496C175.493 75.496 177.863 78.016 178.199 83.056C179.021 82.8693 179.749 82.4213 180.383 81.712C181.018 80.9653 181.615 80.1253 182.175 79.192H183.967C182.959 81.208 182.063 82.7947 181.279 83.952C180.495 85.072 179.469 85.9867 178.199 86.696C177.975 90.2053 177.247 93.2853 176.015 95.936C174.821 98.5867 173.253 100.64 171.311 102.096C169.37 103.515 167.223 104.224 164.871 104.224ZM167.111 99.184C168.493 99.184 169.781 98.064 170.975 95.824C172.17 93.584 172.991 90.8213 173.439 87.536C172.543 87.2 172.095 86.36 172.095 85.016C172.095 83.56 172.618 82.5893 173.663 82.104C173.589 80.9093 173.383 80.088 173.047 79.64C172.749 79.1547 172.245 78.912 171.535 78.912C170.303 78.912 169.127 79.808 168.007 81.6C166.887 83.3547 165.973 85.5013 165.263 88.04C164.591 90.5413 164.255 92.744 164.255 94.648C164.255 96.44 164.461 97.6533 164.871 98.288C165.282 98.8853 166.029 99.184 167.111 99.184Z"
            fill="#02B589"
          />
          <path
            d="M78.499 20.0027C78.499 20.8866 78.8526 21.7343 79.4819 22.3593C80.1113 22.9843 80.9649 23.3355 81.8549 23.3355H101.99C102.88 23.3355 103.734 22.9843 104.363 22.3593C104.993 21.7343 105.346 20.8866 105.346 20.0027C105.346 19.1188 104.993 18.2711 104.363 17.6461C103.734 17.0211 102.88 16.6699 101.99 16.6699H81.8549C80.9649 16.6699 80.1113 17.0211 79.4819 17.6461C78.8526 18.2711 78.499 19.1188 78.499 20.0027Z"
            fill="#02B589"
          />
          <path
            d="M78 20.0027C78 20.8866 78.3536 21.7343 78.9829 22.3593C79.6123 22.9843 80.4659 23.3355 81.3559 23.3355H101.491C102.381 23.3355 103.235 22.9843 103.864 22.3593C104.494 21.7343 104.847 20.8866 104.847 20.0027C104.847 19.1188 104.494 18.2711 103.864 17.6461C103.235 17.0211 102.381 16.6699 101.491 16.6699H81.3559C80.4659 16.6699 79.6123 17.0211 78.9829 17.6461C78.3536 18.2711 78 19.1188 78 20.0027Z"
            fill="#02B589"
          />
          <path
            d="M78 20.0027C78 20.8866 78.3536 21.7343 78.9829 22.3593C79.6123 22.9843 80.4659 23.3355 81.3559 23.3355H101.491C102.381 23.3355 103.235 22.9843 103.864 22.3593C104.494 21.7343 104.847 20.8866 104.847 20.0027C104.847 19.1188 104.494 18.2711 103.864 17.6461C103.235 17.0211 102.381 16.6699 101.491 16.6699H81.3559C80.4659 16.6699 79.6123 17.0211 78.9829 17.6461C78.3536 18.2711 78 19.1188 78 20.0027Z"
            fill="#02B589"
          />
          <path
            d="M82.8549 33.3343H76.8478C73.3991 33.4257 70.04 32.2365 67.4272 29.9992C64.8145 27.7619 63.1358 24.6373 62.7193 21.2363C62.5461 19.3848 62.7649 17.5178 63.3615 15.7553C63.9581 13.9927 64.9194 12.3736 66.1836 11.002C67.4478 9.63037 68.9869 8.53657 70.7021 7.79087C72.4173 7.04517 74.2707 6.66406 76.143 6.67203H82.8549C83.7449 6.67203 84.5985 6.3209 85.2279 5.69588C85.8572 5.07086 86.2108 4.22316 86.2108 3.33925C86.2108 2.45534 85.8572 1.60764 85.2279 0.982619C84.5985 0.357602 83.7449 0.00647019 82.8549 0.00647019H76.8478C71.8734 -0.0595461 67.0423 1.66104 63.2439 4.85152C59.4454 8.04201 56.9352 12.4877 56.1753 17.3703C55.7976 20.1944 56.0319 23.0662 56.8625 25.7931C57.6932 28.5201 59.101 31.0393 60.9917 33.182C62.8823 35.3247 65.2122 37.0415 67.8253 38.2173C70.4384 39.3931 73.2742 40.0009 76.143 39.9998H82.8549C83.7449 39.9998 84.5985 39.6487 85.2279 39.0237C85.8572 38.3987 86.2108 37.5509 86.2108 36.667C86.2108 35.7831 85.8572 34.9354 85.2279 34.3104C84.5985 33.6854 83.7449 33.3343 82.8549 33.3343Z"
            fill="#02B589"
          />
          <path
            d="M128.203 17.4698C127.453 12.5256 124.911 8.02345 121.056 4.80808C117.2 1.59271 112.296 -0.114796 107.262 0.00599704H102.195C99.4766 0.00599704 98 1.50575 98 3.33878C98 4.22268 98.3536 5.07039 98.9829 5.69541C99.6123 6.32042 100.466 6.67156 101.356 6.67156H107.363C110.812 6.58014 114.171 7.76931 116.784 10.0066C119.396 12.2439 121.075 15.3685 121.491 18.7695C121.665 20.621 121.446 22.488 120.849 24.2506C120.253 26.0131 119.291 27.6322 118.027 29.0038C116.763 30.3754 115.224 31.4692 113.509 32.215C111.793 32.9607 109.94 33.3418 108.068 33.3338H101.356C100.466 33.3338 99.6123 33.6849 98.9829 34.3099C98.3536 34.935 98 35.7827 98 36.6666C98 37.5505 98.3536 38.3982 98.9829 39.0232C99.6123 39.6482 100.466 39.9994 101.356 39.9994H108.068C110.941 40.0223 113.786 39.4344 116.411 38.275C119.037 37.1156 121.382 35.4115 123.289 33.2774C125.197 31.1433 126.622 28.6285 127.47 25.9019C128.317 23.1754 128.567 20.3003 128.203 17.4698Z"
            fill="#02B589"
          />
        </svg>
      </div>
    </Link>
  );
}

export default Logo;
